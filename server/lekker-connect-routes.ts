import type { Express, Request, Response } from "express";
import {
  createCheckout,
  getFeed,
  getPortalMe,
  isLekkerConnectConfigured,
  requestPortalOtp,
  searchProducts,
  verifyPortalOtp,
} from "./lekker-connect";

function lekkerUnavailable(res: Response) {
  return res.status(503).json({
    success: false,
    error: "lekker_not_configured",
    message: "Lekker Connect API is not configured. Set LEKKER_TOKEN on the server.",
  });
}

function handleLekkerError(res: Response, err: unknown, context: string) {
  console.error(`Lekker Connect ${context}:`, err);
  const message = err instanceof Error ? err.message : "Unknown error";
  const statusMatch = message.match(/Lekker API (\d+):/);
  const status = statusMatch ? parseInt(statusMatch[1], 10) : 502;
  return res.status(status >= 400 && status < 600 ? status : 502).json({
    success: false,
    error: "lekker_api_error",
    message,
  });
}

function normalizeCheckoutBody(body: Record<string, unknown>) {
  if (body.customer && typeof body.customer === "object") {
    return body as {
      items: Array<{ name: string; quantity: number; priceInCents: number }>;
      customer: { name: string; email?: string; phone?: string };
      returnUrl?: string;
      cancelUrl?: string;
    };
  }

  const identifier = String(body.customerEmail || body.customerMobile || "").trim();
  const isEmail = identifier.includes("@");

  const items = Array.isArray(body.items)
    ? body.items.map((item: Record<string, unknown>) => ({
        name: String(item.name || "Item"),
        quantity: Math.max(1, Number(item.quantity ?? item.qty ?? 1) || 1),
        priceInCents:
          typeof item.priceInCents === "number"
            ? item.priceInCents
            : typeof item.price === "number"
              ? Math.round(item.price * 100)
              : 0,
      }))
    : [];

  return {
    items,
    customer: {
      name: String(body.customerName || identifier || "Customer"),
      email: isEmail ? identifier : undefined,
      phone: !isEmail && identifier ? identifier : undefined,
    },
    returnUrl: (body.returnUrl || body.successUrl) as string | undefined,
    cancelUrl: body.cancelUrl as string | undefined,
  };
}

export function registerLekkerConnectRoutes(app: Express) {
  app.get("/api/feed", async (req, res) => {
    if (!isLekkerConnectConfigured()) return lekkerUnavailable(res);
    try {
      const params: Record<string, string | boolean> = { published: "true" };
      for (const [key, value] of Object.entries(req.query)) {
        if (typeof value === "string") params[key] = value;
      }
      const data = await getFeed(params);
      res.json(data);
    } catch (err) {
      return handleLekkerError(res, err, "feed");
    }
  });

  app.get("/api/products/search", async (req, res) => {
    if (!isLekkerConnectConfigured()) return lekkerUnavailable(res);
    try {
      const params: Record<string, string> = {};
      for (const [key, value] of Object.entries(req.query)) {
        if (typeof value === "string") params[key] = value;
      }
      const data = await searchProducts(params);
      res.json(data);
    } catch (err) {
      return handleLekkerError(res, err, "products/search");
    }
  });

  app.post("/api/checkout", async (req, res) => {
    if (!isLekkerConnectConfigured()) return lekkerUnavailable(res);
    try {
      const payload = normalizeCheckoutBody(req.body || {});
      if (!payload.items.length) {
        return res.status(400).json({
          success: false,
          error: "validation_error",
          message: "items array is required.",
        });
      }
      if (!payload.customer.name) {
        return res.status(400).json({
          success: false,
          error: "validation_error",
          message: "customer.name is required.",
        });
      }

      const origin = `${req.protocol}://${req.get("host")}`;
      const data = await createCheckout({
        ...payload,
        returnUrl: payload.returnUrl || `${origin}/checkout?payment=success`,
        cancelUrl: payload.cancelUrl || `${origin}/checkout?payment=cancelled`,
      });

      res.json({
        ...data,
        checkoutUrl: data.paymentUrl,
        success: true,
      });
    } catch (err) {
      return handleLekkerError(res, err, "checkout");
    }
  });

  app.post("/api/portal/request-otp", async (req, res) => {
    if (!isLekkerConnectConfigured()) return lekkerUnavailable(res);
    try {
      const data = await requestPortalOtp(req.body);
      res.json(data);
    } catch (err) {
      return handleLekkerError(res, err, "portal/request-otp");
    }
  });

  app.post("/api/portal/verify-otp", async (req, res) => {
    if (!isLekkerConnectConfigured()) return lekkerUnavailable(res);
    try {
      const data = await verifyPortalOtp(req.body);
      res.json(data);
    } catch (err) {
      return handleLekkerError(res, err, "portal/verify-otp");
    }
  });

  app.get("/api/portal/me", async (req, res) => {
    if (!isLekkerConnectConfigured()) return lekkerUnavailable(res);
    const sessionToken = req.header("X-Portal-Token");
    if (!sessionToken) {
      return res.status(401).json({
        success: false,
        error: "portal_token_required",
        message: "X-Portal-Token header is required.",
      });
    }
    try {
      const data = await getPortalMe(sessionToken);
      res.json(data);
    } catch (err) {
      return handleLekkerError(res, err, "portal/me");
    }
  });
}