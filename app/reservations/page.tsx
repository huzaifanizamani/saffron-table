import type { Metadata } from "next";
import ReservationForm from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "Book a table",
  description: "Reserve a table at Saffron Table.",
};

export default function ReservationsPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-ember">Reservations</p>
      <h1 className="mt-3 font-display text-5xl">Book a table</h1>
      <p className="mt-4 text-ink-soft">
        For groups larger than 10, please call us on +1 (555) 014-2290.
      </p>
      <ReservationForm />
    </section>
  );
}
