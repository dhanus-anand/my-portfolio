import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_EMAIL_TO || "dhanuskanth.ac@gmail.com";
// Resend requires sending FROM a verified domain or their test address. Never use @gmail.com as sender.
const FROM_ADDRESS = "Portfolio <onboarding@resend.dev>";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as { name?: string; email?: string; subject?: string; message?: string };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailSubject = subject?.trim()
      ? subject.trim()
      : `Portfolio contact from ${name}`;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Email is not configured. Set RESEND_API_KEY in .env.local" },
        { status: 503 }
      );
    }

    const resend = new Resend(resendApiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = subject?.trim() ? escapeHtml(subject.trim()) : null;
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [toEmail],
      replyTo: email,
      subject: emailSubject,
      text: message,
      html: [
        `<p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>`,
        safeSubject ? `<p><strong>Subject:</strong> ${safeSubject}</p>` : "",
        `<p><strong>Message:</strong></p>`,
        `<p>${safeMessage}</p>`,
      ].join(""),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email.", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
