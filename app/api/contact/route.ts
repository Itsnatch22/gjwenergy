import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import ContactSubmissionEmail from "@/emails/ContactSubmissionEmail";

const optionalText = z
  .string()
  .trim()
  .max(200)
  .optional()
  .nullable()
  .transform((value) => value || undefined);

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: optionalText,
  company: optionalText,
  service: optionalText,
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !from || !to) {
    return NextResponse.json({ detail: "Contact email delivery is not configured." }, { status: 503 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ detail: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ detail: "Please check the enquiry fields and try again." }, { status: 400 });
  }

  const { name, email, phone, company, service, message } = parsed.data;
  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New project enquiry from ${name}`,
    react: ContactSubmissionEmail({ name, email, phone, company, service, message }),
  });

  if (result.error) {
    return NextResponse.json({ detail: "Unable to send your enquiry right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
