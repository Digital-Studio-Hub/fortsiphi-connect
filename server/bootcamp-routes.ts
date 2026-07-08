import type { Express, Response } from "express";
import { getFeed, isLekkerConnectConfigured } from "./lekker-connect";

const BOOTCAMP_PRODUCT_ID =
  process.env.BOOTCAMP_PRODUCT_ID || "93c96da8-31e9-4f48-80bf-29c49d920747";
const EARLY_BIRD_DEADLINE = new Date("2026-07-15T23:59:59+02:00");
const EARLY_BIRD_PRICE_CENTS = 463500;
const STANDARD_PRICE_CENTS = 566500;
const EARLY_BIRD_SEAT_LIMIT = 3;

function lekkerUnavailable(res: Response) {
  return res.status(503).json({
    success: false,
    error: "lekker_not_configured",
    message: "Lekker Connect API is not configured.",
  });
}

function resolveImageUrl(imageUrl: string | null | undefined, baseUrl: string) {
  if (!imageUrl) return null;
  if (imageUrl.startsWith("http")) return imageUrl;
  return `${baseUrl}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
}

export function registerBootcampRoutes(app: Express) {
  app.get("/api/bootcamp", async (_req, res) => {
    if (!isLekkerConnectConfigured()) return lekkerUnavailable(res);

    try {
      const data = await getFeed({});
      const products = (data.products || []) as Array<Record<string, unknown>>;
      const product =
        products.find((p) => p.id === BOOTCAMP_PRODUCT_ID) ||
        products.find((p) =>
          String(p.name || "")
            .toLowerCase()
            .includes("bootcamp"),
        ) ||
        products[0];

      if (!product) {
        return res.status(404).json({
          success: false,
          error: "product_not_found",
          message: "Bootcamp product not found in Lekker workspace.",
        });
      }

      const stockQuantity =
        typeof product.stockQuantity === "number" ? product.stockQuantity : 10;
      const seatsLeft = product.inStock === false ? 0 : Math.max(0, stockQuantity);
      const earlyBirdAvailable =
        new Date() <= EARLY_BIRD_DEADLINE && seatsLeft > EARLY_BIRD_SEAT_LIMIT - 1;

      const priceInCents =
        typeof product.priceInCents === "number"
          ? product.priceInCents
          : STANDARD_PRICE_CENTS;

      res.json({
        success: true,
        product: {
          id: product.id,
          name: product.name,
          subtitle: product.subtitle,
          description: product.description,
          priceInCents,
          priceFormatted: product.priceFormatted || `R${(priceInCents / 100).toFixed(2)}`,
          imageUrl: resolveImageUrl(
            product.imageUrl as string | undefined,
            "https://lekker.network",
          ),
          inStock: product.inStock !== false && seatsLeft > 0,
        },
        pricing: {
          earlyBird: {
            available: earlyBirdAvailable,
            priceCents: EARLY_BIRD_PRICE_CENTS,
            priceFormatted: "R4,635",
            deadline: "2026-07-15",
            seatsLimit: EARLY_BIRD_SEAT_LIMIT,
            savingCents: STANDARD_PRICE_CENTS - EARLY_BIRD_PRICE_CENTS,
          },
          standard: {
            priceCents: priceInCents,
            priceFormatted: product.priceFormatted || "R5,665",
          },
        },
        event: {
          dates: "30 & 31 July 2026",
          time: "9:00 AM – 5:00 PM",
          venue: "Electron Exchange, Isando, Kempton Park",
          address:
            "Unit 49, Electron Exchange, 50 Electron Avenue, Isando, Kempton Park, 1619",
          countdownTarget: "2026-07-30T09:00:00+02:00",
        },
        seats: {
          total: 10,
          left: seatsLeft,
          soldOut: seatsLeft === 0,
        },
        workspace: data.workspace,
      });
    } catch (err) {
      console.error("Bootcamp feed error:", err);
      const message = err instanceof Error ? err.message : "Unknown error";
      return res.status(502).json({ success: false, error: "lekker_api_error", message });
    }
  });
}