"use client"; // forms need the browser: typing, clicking, showing errors

import { useState } from "react";
import { TIME_SLOTS, validateReservation, type Reservation, type ReservationErrors } from "@/lib/reservation";

const emptyForm: Reservation = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: 2,
  notes: "",
};

export default function ReservationForm() {
  const [form, setForm] = useState<Reservation>(emptyForm);
  const [errors, setErrors] = useState<ReservationErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  function update<K extends keyof Reservation>(field: K, value: Reservation[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validateReservation(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        setMessage(data.error ?? "Please fix the highlighted fields.");
        return;
      }

      setStatus("done");
      setMessage(data.message);
      setForm(emptyForm);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or call us.");
    }
  }

  if (status === "done") {
    return (
      <div className="mt-10 rounded-2xl border border-saffron bg-sand p-8">
        <h2 className="font-display text-2xl">Booking received ✓</h2>
        <p className="mt-3 text-ink-soft">{message}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-semibold text-ember underline underline-offset-4"
        >
          Make another booking
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-ink/20 bg-white px-4 py-3 outline-none transition focus:border-ember focus:ring-2 focus:ring-saffron/40";

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-10 grid gap-5 sm:grid-cols-2">
      <Field label="Full name" error={errors.name} className="sm:col-span-2">
        <input className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" />
      </Field>

      <Field label="Email" error={errors.email}>
        <input type="email" className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" />
      </Field>

      <Field label="Phone" error={errors.phone}>
        <input type="tel" className={inputClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" />
      </Field>

      <Field label="Date" error={errors.date}>
        <input type="date" className={inputClass} value={form.date} onChange={(e) => update("date", e.target.value)} />
      </Field>

      <Field label="Time" error={errors.time}>
        <select className={inputClass} value={form.time} onChange={(e) => update("time", e.target.value)}>
          <option value="">Select a time</option>
          {TIME_SLOTS.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Guests" error={errors.guests}>
        <select className={inputClass} value={form.guests} onChange={(e) => update("guests", Number(e.target.value))}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Special requests (optional)" className="sm:col-span-2">
        <textarea
          rows={3}
          maxLength={500}
          className={inputClass}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Birthday, allergies, high chair…"
        />
      </Field>

      {status === "error" && <p className="text-sm text-ember sm:col-span-2">{message}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-ink px-8 py-4 font-semibold text-cream transition hover:bg-ember disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? "Sending…" : "Request booking"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block text-sm font-medium ${className}`}>
      {label}
      {children}
      {error && <span className="mt-1 block text-sm font-normal text-ember">{error}</span>}
    </label>
  );
}
