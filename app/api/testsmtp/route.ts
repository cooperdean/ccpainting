import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.verify();
  console.log("✅ SMTP connection successful!");

  await transporter.sendMail({
    from: `"C&C Painting" <${process.env.SMTP_USER}>`,
    to: "contact@ccpainting.co",
    subject: "SMTP Test Email",
    text: "If you are reading this, your SMTP configuration works!",
  });

  return NextResponse.json({ success: true });
}