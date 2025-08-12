import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, serviceType, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"C&C Painting" <${process.env.SMTP_USER}>`,
    to: "contact@ccpainting.co",
    subject: `Quote Request from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service Type: ${serviceType}
Message: ${message}
    `,
  });

  return NextResponse.json({ success: true });
}
