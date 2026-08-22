import { NextResponse } from "next/server";

const fields = ["year", "make", "model", "part", "name", "phone", "email"] as const;
type Field = (typeof fields)[number];

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (body.website) return NextResponse.json({ message: "Unable to submit request." }, { status: 400 });
    if (!body.consent || fields.some((field) => typeof body[field] !== "string" || !String(body[field]).trim())) {
      return NextResponse.json({ message: "Please complete every required field and consent checkbox." }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(String(body.email))) {
      return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
    }

    const webhook = process.env.QUOTE_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json({ message: "Quote requests are temporarily unavailable. Please try again later." }, { status: 503 });
    }

    const lead = {
      ...Object.fromEntries(fields.map((field: Field) => [field, String(body[field]).trim()])),
      consent: true,
      consentRecordedAt: new Date().toISOString(),
      source: "website-quote-form",
    };
    const delivery = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10_000),
    });
    if (!delivery.ok) throw new Error("Lead delivery failed");
    return NextResponse.json({ message: "Thanks. Your quote request was sent successfully." });
  } catch {
    return NextResponse.json({ message: "We could not send your request. Please try again." }, { status: 500 });
  }
}
