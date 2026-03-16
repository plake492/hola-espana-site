import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  serviceType: string;
  message: string;
}

export async function POST(req: Request) {
  const body = (await req.json()) as ContactPayload;
  const { name, email, serviceType, message } = body;

  if (!name || !email || !serviceType || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY ?? '',
  });

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN ?? 'sandbox820df2fb6c894d45ac4a18fb8a560be1.mailgun.org', {
      from: `Hola España Contact Form <postmaster@${process.env.MAILGUN_DOMAIN ?? 'sandbox820df2fb6c894d45ac4a18fb8a560be1.mailgun.org'}>`,
      to: [process.env.CONTACT_EMAIL ?? 'plake.dev@gmail.com'],
      subject: `New enquiry: ${serviceType} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${serviceType}\n\nMessage:\n${message}`,
      'h:Reply-To': email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mailgun error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
