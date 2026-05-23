import { Resend } from "resend";
import { BRAND } from "@/lib/brand";
import type { BookingPayload } from "@/types/booking";

const BOOKING_TO = "sujalshah77715@gmail.com";

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

function buildText(data: BookingPayload) {
  return `
${BRAND.legalName.toUpperCase()} — NEW SERVICE REQUEST
=====================================
Submitted: ${new Date().toLocaleString()}

CLIENT DETAILS
--------------
Name:     ${data.fullName}
Email:    ${data.email}
Phone:    ${data.phone}

LOCATION
--------
Address:  ${data.address}
City/ZIP: ${data.city}, ${data.zip}

SERVICE
-------
Type:       ${data.serviceType}
Date:       ${formatDate(data.preferredDate)}
Time:       ${data.preferredTime}
Size:       ${data.propertySize}
Frequency:  ${data.frequency}

Notes:
${data.notes || "(none)"}
`.trim();
}

function buildHtml(data: BookingPayload) {
  const rows = [
    ["Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Address", data.address],
    ["City / ZIP", `${data.city}, ${data.zip}`],
    ["Service", data.serviceType],
    ["Date", formatDate(data.preferredDate)],
    ["Time", data.preferredTime],
    ["Property size", data.propertySize],
    ["Frequency", data.frequency],
    ["Notes", data.notes || "—"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;font-weight:600;width:140px;">${label}</td>
        <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#1e293b;font-size:15px;">${value}</td>
      </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:24px;background:#f8fafc;font-family:system-ui,sans-serif;">
  <table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;">
    <tr>
      <td style="background:#0a0a0a;padding:24px 28px;border-bottom:2px solid #dc2626;">
        <h1 style="margin:0;color:#fff;font-size:22px;">${BRAND.name}</h1>
        <p style="margin:6px 0 0;color:#a3a3a3;font-size:13px;">${BRAND.legalName}</p>
        <p style="margin:12px 0 0;color:#fca5a5;font-size:14px;">New service request</p>
      </td>
    </tr>
    <tr>
      <td style="padding:8px 12px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0">${tableRows}</table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendBookingEmail(data: BookingPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not configured. Add it to .env.local — see README."
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL ?? BRAND.emailFrom;

  const { error } = await resend.emails.send({
    from,
    to: BOOKING_TO,
    replyTo: data.email,
    subject: `New Request — ${data.fullName} | ${data.serviceType}`,
    html: buildHtml(data),
    text: buildText(data),
  });

  if (error) throw new Error(error.message);
}
