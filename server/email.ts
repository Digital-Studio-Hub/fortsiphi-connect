import { Inbound } from "inboundemail";
import type { ContactInquiry, ChecklistDownload } from "@shared/schema";

const apiKey = process.env.INBOUND_API_KEY || "";

if (!apiKey) {
  console.warn("INBOUND_API_KEY not found — emails will not be sent");
}

const client = apiKey ? new Inbound({ apiKey }) : null;

const fromName = "Cledwyn from Lekker Network ";
const adminEmail = "info@fortsiphi.co.za";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeText(value: string | null | undefined) {
  return escapeHtml(value?.trim() || "Not provided");
}

async function sendMail(to: string | string[], subject: string, html: string) {
  if (!client) {
    console.error(`Skipping email send for ${subject} because INBOUND_API_KEY is missing`);
    return;
  }

  await client.emails.send({
    from: fromName,
    to,
    subject,
    html,
  });
}

function contactAdminHtml(inquiry: ContactInquiry) {
  return `
    <h1>New contact enquiry</h1>
    <p><strong>Name:</strong> ${safeText(inquiry.name)}</p>
    <p><strong>Email:</strong> ${safeText(inquiry.email)}</p>
    <p><strong>Phone:</strong> ${safeText(inquiry.phone)}</p>
    <p><strong>Company:</strong> ${safeText(inquiry.company)}</p>
    <p><strong>Service:</strong> ${safeText(inquiry.service)}</p>
    <p><strong>Message:</strong></p>
    <p>${safeText(inquiry.message).replaceAll("\n", "<br />")}</p>
  `;
}

function contactCustomerHtml(inquiry: ContactInquiry) {
  return `
    <h1>Thank you for contacting Fortsiphi</h1>
    <p>Hi ${safeText(inquiry.name)},</p>
    <p>We have received your enquiry and will be in touch soon.</p>
    <p><strong>Service of interest:</strong> ${safeText(inquiry.service)}</p>
    <p><strong>Your message:</strong></p>
    <p>${safeText(inquiry.message).replaceAll("\n", "<br />")}</p>
  `;
}

function checklistAdminHtml(download: ChecklistDownload) {
  return `
    <h1>New checklist download</h1>
    <p><strong>Name:</strong> ${safeText(download.name)}</p>
    <p><strong>Email:</strong> ${safeText(download.email)}</p>
    <p><strong>Phone:</strong> ${safeText(download.phone)}</p>
    <p><strong>Company:</strong> ${safeText(download.company)}</p>
  `;
}

function checklistCustomerHtml(download: ChecklistDownload) {
  return `
    <h1>Your checklist download is ready</h1>
    <p>Hi ${safeText(download.name)},</p>
    <p>Thank you for your interest in Fortsiphi. You can download the checklist from the website after your request is submitted.</p>
    <p>If you need help, reply to this email and we will assist you.</p>
  `;
}

export async function sendContactInquiryEmails(inquiry: ContactInquiry) {
  await Promise.all([
    sendMail(adminEmail, "New Fortsiphi contact enquiry", contactAdminHtml(inquiry)),
    sendMail(inquiry.email, "Thanks for contacting Fortsiphi", contactCustomerHtml(inquiry)),
  ]);
}

export async function sendChecklistDownloadEmails(download: ChecklistDownload) {
  await Promise.all([
    sendMail(adminEmail, "New Fortsiphi checklist download", checklistAdminHtml(download)),
    sendMail(download.email, "Your Fortsiphi checklist download", checklistCustomerHtml(download)),
  ]);
}