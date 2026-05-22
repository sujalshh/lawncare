import { NextResponse } from "next/server";
import { sendBookingEmail } from "@/lib/email";
import type { BookingPayload } from "@/types/booking";

function validate(body: Partial<BookingPayload>): string | null {
  const required: (keyof BookingPayload)[] = [
    "fullName",
    "email",
    "phone",
    "address",
    "city",
    "zip",
    "serviceType",
    "preferredDate",
    "preferredTime",
    "propertySize",
    "frequency",
  ];

  for (const key of required) {
    if (!body[key]?.toString().trim()) {
      return `Missing required field: ${key}`;
    }
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(body.email!)) return "Invalid email address";

  const date = new Date(body.preferredDate!);
  if (isNaN(date.getTime())) return "Invalid date";

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date < today) return "Preferred date must be today or in the future";

  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<BookingPayload>;
    const error = validate(body);
    if (error) return NextResponse.json({ error }, { status: 400 });

    await sendBookingEmail(body as BookingPayload);

    return NextResponse.json({
      success: true,
      message:
        "Your appointment request has been sent. We will confirm shortly!",
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send booking request";
    console.error("[booking]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
