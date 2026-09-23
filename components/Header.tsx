import Link from "next/link";
import Logomark from "./Logomark";

const nav = [
  { href: "/services", label: "Consulting" },
  { href: "/people", label: "Our People" },
  { href: "/brands", label: "Our Brands" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/90 backdrop-blur">
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
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
        <Link
          href="/audit"
          className="rounded-full bg-brand px-3 py-1.5 text-sm font-semibold text-ink md:hidden"
        >
          Free audit
        </Link>
      </div>
    </header>
  );
}
