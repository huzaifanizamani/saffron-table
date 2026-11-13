// Backend endpoint: POST /api/reservations
// Right now it validates the booking and logs it. In App 2 we'll learn to save
// bookings to a real database and send confirmation emails.

import { NextResponse } from "next/server";
import { validateReservation, type Reservation } from "@/lib/reservation";

export async function POST(request: Request) {
  let body: Partial<Reservation>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  // Valid JSON can still be null, a number or a list. Only accept an object.
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const reservation: Reservation = {
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    date: String(body.date ?? ""),
    time: String(body.time ?? ""),
    guests: Number(body.guests),
    notes: String(body.notes ?? "").slice(0, 500),
  };

  // Never trust the browser: check everything again on the server.
  const errors = validateReservation(reservation);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  console.log("New reservation:", reservation);

  return NextResponse.json({
    message: `Thanks ${reservation.name.split(" ")[0]}! Your table for ${reservation.guests} on ${reservation.date} at ${reservation.time} is requested. We'll confirm by email.`,
  });
}
