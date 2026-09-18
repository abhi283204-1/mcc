import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// P0-4 — Simple in-memory rate limiter
// NOTE: This is a single-instance in-memory limiter. It resets on server
// restart and does NOT provide distributed protection across multiple
// Node.js instances (e.g. horizontally scaled deployments). It is
// sufficient for a single-instance deployment or Vercel serverless where
// cold-starts naturally limit abuse.
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute window
const RATE_LIMIT_MAX_REQUESTS = 5;   // max 5 submissions per IP per window

const rateLimitMap = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    // New window
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}

// ---------------------------------------------------------------------------
// P0-1 — Nodemailer transporter using environment variables only
// ---------------------------------------------------------------------------
function createTransporter() {
  const user = process.env.GMAIL_FROM_EMAIL;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error("Missing GMAIL_FROM_EMAIL or GMAIL_APP_PASSWORD environment variables.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function POST(req: NextRequest) {
  // --- Rate limiting ---
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // --- Send email ---
  try {
    const body = await req.json();
    const { car, items, date, timeSlot, address, paymentMethod, total } = body;

    const fromEmail = process.env.GMAIL_FROM_EMAIL;
    const toEmail = process.env.BUSINESS_EMAIL;

    if (!fromEmail || !toEmail) {
      console.error("Missing email environment variables: GMAIL_FROM_EMAIL or BUSINESS_EMAIL");
      return NextResponse.json(
        { success: false, error: "Server email configuration error." },
        { status: 500 }
      );
    }

    const html = `
      <h2>New Order - Mittal Car Care</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
        <tr><td><b>Car</b></td><td>${car || "Not selected"}</td></tr>
        <tr><td><b>Services</b></td><td>${items?.map((i: { name: string; price: number }) => `${i.name} - ₹${i.price}`).join("<br/>") || "None"}</td></tr>
        <tr><td><b>Date</b></td><td>${date || "-"}</td></tr>
        <tr><td><b>Time Slot</b></td><td>${timeSlot || "-"}</td></tr>
        <tr><td><b>Address</b></td><td>${address || "-"}</td></tr>
        <tr><td><b>Payment</b></td><td>${paymentMethod || "-"}</td></tr>
        <tr><td><b>Total</b></td><td>₹${total || 0}</td></tr>
      </table>
    `;

    const transporter = createTransporter();

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `New Order Lead - Mittal Car Care`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
