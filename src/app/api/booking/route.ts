import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.email) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Connect later: Resend, WhatsApp, Supabase, Firebase, CRM or email.
  console.info("[booking-request]", {
    name: body.name,
    email: body.email,
    service: body.service,
    date: body.date,
  });

  return NextResponse.json({ ok: true });
}
