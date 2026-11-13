import Link from "next/link";
import { Suspense } from "react";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-cream">
            Saffron <span className="text-saffron">Table</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            Wood-fired grills and slow-cooked classics, made fresh every day.
          </p>
        </div>

        <div className="text-sm leading-7">
          <p className="mb-2 font-semibold uppercase tracking-widest text-saffron">Visit us</p>
          <p>24 Market Street, Old Town</p>
          <p>Tue–Sun: 12:00 – 23:00</p>
          <p>Monday: closed</p>
        </div>

        <div className="text-sm leading-7">
          <p className="mb-2 font-semibold uppercase tracking-widest text-saffron">Contact</p>
          <p>+1 (555) 014-2290</p>
          <p>hello@saffrontable.example</p>
          <Link href="/reservations" className="mt-2 inline-block text-cream underline underline-offset-4 hover:text-saffron">
            Book a table →
          </Link>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-cream/50">
        © <Suspense fallback={null}><CurrentYear /></Suspense> Saffron Table · Demo project, fictional restaurant
      </p>
    </footer>
  );
}
