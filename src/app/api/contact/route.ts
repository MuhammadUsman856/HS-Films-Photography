import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.email || !body?.message) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  console.info("[contact-request]", { name: body.name, email: body.email });
  return NextResponse.json({ ok: true });
}
