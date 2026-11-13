import Link from "next/link";
import Photo from "@/components/Photo";
import { featured } from "@/data/menu";

const highlights = [
  { title: "Wood-fired grill", text: "Every chop and skewer is cooked over real oak embers." },
  { title: "Made from scratch", text: "Breads, sauces and spice blends are prepared in-house daily." },
  { title: "Private dining", text: "A quiet room for up to 20 guests, birthdays and team dinners." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Photo src="hero.jpg" label="Grilled dishes on a wooden table" className="relative">
        {/* Dark overlay: strongest behind the text, lighter on the right so the food still shows */}
        {/* Plain rgba() so it works in every browser (28,23,20 = the "ink" brand colour) */}
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(28,23,20,0.95) 0%, rgba(28,23,20,0.88) 50%, rgba(28,23,20,0.7) 100%)",
          }}
        >
          <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-5 py-24 text-cream [text-shadow:0_2px_12px_rgb(0_0_0/0.6)]">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-saffron">Modern grill & kitchen</p>
            <h1 className="max-w-2xl font-display text-5xl leading-tight md:text-7xl">
              Fire, spice and a table worth sharing.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/90">
              Slow-cooked curries, wood-fired grills and warm bread straight from the oven.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 [text-shadow:none]">
              <Link href="/reservations" className="rounded-full bg-saffron px-8 py-3 font-semibold text-ink transition hover:bg-cream">
                Book a table
              </Link>
              <Link href="/menu" className="rounded-full border border-cream/60 px-8 py-3 font-semibold transition hover:border-saffron hover:text-saffron">
                View menu
              </Link>
            </div>
          </div>
        </div>
      </Photo>

      {/* Highlights */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="border-t-2 border-saffron pt-6">
            <h2 className="font-display text-2xl">{item.title}</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Featured dishes */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-ember">Chef&apos;s favourites</p>
              <h2 className="mt-2 font-display text-4xl">Signature dishes</h2>
            </div>
            <Link href="/menu" className="font-semibold text-ember underline underline-offset-4">
              Full menu →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {featured.map((dish) => (
              <article key={dish.name} className="overflow-hidden rounded-2xl bg-cream shadow-sm">
                <Photo src={dish.image ?? ""} label={dish.name} className="aspect-[4/3]" />
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl">{dish.name}</h3>
                    <span className="font-semibold text-ember">${dish.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{dish.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Planning a dinner?</h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-soft">
          Reserve online in under a minute. We&apos;ll confirm your booking by email.
        </p>
        <Link href="/reservations" className="mt-8 inline-block rounded-full bg-ink px-8 py-3 font-semibold text-cream transition hover:bg-ember">
          Reserve now
        </Link>
      </section>
    </>
  );
}
