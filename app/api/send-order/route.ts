import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "frontend.developer.abhi@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD || "",
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { car, items, date, timeSlot, address, paymentMethod, total } = body;

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

    await transporter.sendMail({
      from: "frontend.developer.abhi@gmail.com",
      to: "frontend.developer.abhi@gmail.com",
      subject: `New Order Lead - Mittal Car Care`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
