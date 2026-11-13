// Shared by the form (browser) and the API route (server),
// so both check the booking with exactly the same rules.

export type Reservation = {
  name: string;
  email: string;
  phone: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  guests: number;
  notes: string;
};

export type ReservationErrors = Partial<Record<keyof Reservation, string>>;

export const TIME_SLOTS = ["12:00", "13:00", "14:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export function validateReservation(data: Reservation): ReservationErrors {
  const errors: ReservationErrors = {};

  if (data.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = "Please enter a valid email.";
  if (data.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";

  if (!data.date) {
    errors.date = "Please choose a date.";
  } else {
    const chosen = new Date(`${data.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Reject anything that isn't a real calendar date, like "banana" or "2026-13-45".
    const [y, m, d] = data.date.split("-").map(Number);
    const isRealDate =
      /^\d{4}-\d{2}-\d{2}$/.test(data.date) &&
      chosen.getFullYear() === y &&
      chosen.getMonth() + 1 === m &&
      chosen.getDate() === d;
    if (!isRealDate) errors.date = "Please choose a valid date.";
    else if (chosen < today) errors.date = "Please choose a date in the future.";
    else if (chosen.getDay() === 1) errors.date = "Sorry, we're closed on Mondays.";
  }

  if (!TIME_SLOTS.includes(data.time)) errors.time = "Please choose a time.";
  if (!Number.isInteger(data.guests) || data.guests < 1 || data.guests > 10) {
    errors.guests = "Guests must be between 1 and 10.";
  }

  return errors;
}
