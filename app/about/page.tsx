import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Saffron Table.",
};

const values = [
  { number: "01", title: "Local produce", text: "We buy meat and vegetables from farms within 100 km." },
  { number: "02", title: "Slow cooking", text: "Our curries simmer for hours. There are no shortcuts." },
  { number: "03", title: "Warm service", text: "Every guest is treated like family at our table." },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-ember">Our story</p>
          <h1 className="mt-3 font-display text-5xl leading-tight">Cooking over fire since 2012</h1>
          <p className="mt-6 leading-relaxed text-ink-soft">
            Saffron Table started as a small grill stall at the weekend market. The queue kept getting
            longer, so we found a permanent home in the Old Town.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Today our kitchen still follows the same idea: honest ingredients, real fire and recipes
            passed down through family.
          </p>
          <Link href="/reservations" className="mt-8 inline-block rounded-full bg-ink px-8 py-3 font-semibold text-cream transition hover:bg-ember">
            Visit us
          </Link>
        </div>
        <Photo src="about.jpg" label="Chef cooking at the grill" className="aspect-[4/5] rounded-3xl" />
      </section>

      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.number}>
              <p className="font-display text-5xl text-saffron">{value.number}</p>
              <h2 className="mt-4 font-display text-2xl">{value.title}</h2>
              <p className="mt-2 text-cream/70">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
