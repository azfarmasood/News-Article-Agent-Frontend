// src/app/api/sendemail/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  console.log("API route hit!");
  const { fullName, phoneNumber, email, recaptchaToken } = await req.json();

  // Verify reCAPTCHA token
  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    }
  );

  const recaptchaData = await recaptchaResponse.json();
  if (!recaptchaData.success) {
    return NextResponse.json(
      { message: "reCAPTCHA verification failed" },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Application Received",
      text: `Thank you ${fullName} for applying for our driving lessons.`,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "BUSINESS_EMAIL@gmail.com",
      subject: "New Driving Lesson Application",
      text: `New applicant:\n\nName: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}`,
    });

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send emails", error },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
