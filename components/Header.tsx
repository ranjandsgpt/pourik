"use client";

import Link from "next/link";
import { useState } from "react";
import Logomark from "./Logomark";

const nav = [
  { href: "/services", label: "Consulting" },
  { href: "/people", label: "Our People" },
  { href: "/brands", label: "Our Brands" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/90 backdrop-blur">
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link href="/" onClick={close} className="flex items-center gap-2.5">
          <Logomark size={30} />
          <span className="font-display text-xl font-semibold tracking-tight">
            POURIK
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/audit"
          className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand-dark md:inline-block"
        >
          Get a free audit
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {open ? (
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-line/80 bg-background md:hidden">
          <ul className="container-px mx-auto flex max-w-6xl flex-col py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block py-3 text-base font-medium hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                href="/audit"
                onClick={close}
                className="block rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-ink"
              >
                Get a free audit
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
