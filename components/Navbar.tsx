"use client"; // runs in the browser because it has a clickable mobile menu

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-cream backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-2xl font-semibold tracking-wide" onClick={() => setOpen(false)}>
          Saffron <span className="text-saffron">Table</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest transition hover:text-saffron ${
                pathname === link.href ? "text-saffron" : "text-cream/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservations"
            className="rounded-full bg-saffron px-5 py-2 text-sm font-semibold text-ink transition hover:bg-cream"
          >
            Book a table
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <div className="flex flex-col gap-1 border-t border-white/10 px-5 pb-5 md:hidden">
          {[...links, { href: "/reservations", label: "Book a table" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-lg ${pathname === link.href ? "text-saffron" : "text-cream"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
