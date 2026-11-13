import type { Metadata } from "next";
import { menu } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description: "Starters, grills, mains and desserts at Saffron Table.",
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-ink px-5 py-20 text-center text-cream">
        <p className="text-sm uppercase tracking-[0.3em] text-saffron">Our food</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">The Menu</h1>

        {/* Jump links to each category */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {menu.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-cream/30 px-5 py-2 text-sm transition hover:border-saffron hover:text-saffron"
            >
              {category.title}
            </a>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-16">
        {menu.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24 py-8">
            <h2 className="border-b border-ink/15 pb-3 font-display text-3xl">{category.title}</h2>
            <ul className="mt-6 space-y-7">
              {category.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="flex-1 border-b border-dotted border-ink/30" />
                    <span className="font-semibold text-ember">${item.price}</span>
                  </div>
                  <p className="mt-1 text-ink-soft">{item.description}</p>
                  {item.tags && (
                    <div className="mt-2 flex gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-sand px-3 py-0.5 text-xs font-medium text-ink-soft">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
