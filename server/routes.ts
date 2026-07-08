import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertChecklistDownloadSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import {
  sendContactInquiryEmails,
  sendChecklistDownloadEmails,
} from "./email";
import { submitContactToLekker } from "./lekker-connect";
import { registerLekkerConnectRoutes } from "./lekker-connect-routes";
import { registerLekkerHostedPages } from "./lekker-hosted-pages";
import { registerBootcampRoutes } from "./bootcamp-routes";

function contactSourceUrl(req: { headers: Record<string, unknown>; body?: Record<string, unknown> }) {
  return (
    (req.body?.sourceUrl as string) ||
    (req.headers.referer as string) ||
    (req.headers.origin as string) ||
    "https://fortsiphi.co.za"
  );
}

function buildContactMessage(fields: {
  service?: string;
  company?: string | null;
  phone?: string | null;
  message: string;
}) {
  const parts = [
    fields.service ? `Service: ${fields.service}` : null,
    fields.company ? `Company: ${fields.company}` : null,
    fields.phone ? `Phone: ${fields.phone}` : null,
    "",
    fields.message,
  ].filter((part) => part !== null);
  return parts.join("\n");
}

async function syncContactToLekker(data: {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  sourceUrl: string;
}) {
  try {
    await submitContactToLekker(data);
  } catch (error) {
    console.error("Lekker CRM sync failed:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  registerLekkerConnectRoutes(app);
  registerLekkerHostedPages(app);
  registerBootcampRoutes(app);

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      void syncContactToLekker({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: buildContactMessage(validatedData),
        sourceUrl: contactSourceUrl(req),
      });
      await sendContactInquiryEmails(inquiry);
      res.status(201).json({
        success: true,
        message: "Your enquiry has been received. We will be in touch soon.",
        id: inquiry.id,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details,
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request.",
        });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching enquiries.",
      });
    }
  });

  app.post("/api/checklist-download", async (req, res) => {
    try {
      const validatedData = insertChecklistDownloadSchema.parse(req.body);
      const download = await storage.createChecklistDownload(validatedData);
      void syncContactToLekker({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: buildContactMessage({
          service: "Tender Compliance Checklist Download",
          company: validatedData.company,
          phone: validatedData.phone,
          message: "Requested the Tender Compliance Checklist download.",
        }),
        sourceUrl: contactSourceUrl(req),
      });
      await sendChecklistDownloadEmails(download);
      res.status(201).json({
        success: true,
        message: "Thank you! Your download will begin shortly.",
        id: download.id,
        downloadUrl: "/Fortsiphi_Tender_Compliance_Checklist.pdf",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details,
        });
      } else {
        console.error("Checklist download error:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request.",
        });
      }
    }
  });

  return httpServer;
}
