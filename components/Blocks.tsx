import Link from "next/link";
import { faqs, marketplaces, stats, statsFootnote, upcomingMarketplaces } from "@/lib/site";

export function Eyebrow({
  children,
  tone = "brand",
}: {
  children: React.ReactNode;
  tone?: "brand" | "accent";
}) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-widest ${
        tone === "brand" ? "text-brand" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-dark"
    >
      {children}
    </Link>
  );
}

export function GhostButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
    >
      {children}
    </Link>
  );
}

export function StatsStrip() {
  return (
    <section className="border-b border-line/80 bg-paper">
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-semibold text-brand">
                {s.value}
              </div>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted">{statsFootnote}</p>
      </div>
    </section>
  );
}

export function MarketplaceStrip() {
  return (
    <section className="border-b border-line/80">
      <div className="container-px mx-auto max-w-6xl py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent">
          Marketplaces we work on
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {marketplaces.map((m) => (
            <li
              key={m}
              className="rounded-full border border-line px-4 py-2 font-display text-base font-semibold text-foreground/80"
            >
              {m}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs font-semibold uppercase tracking-widest text-accent">
          Coming soon
        </p>
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-3">
          {[...upcomingMarketplaces, "and more"].map((m) => (
            <li
              key={m}
              className="rounded-full border border-dashed border-line px-4 py-1.5 text-sm text-muted"
            >
              {m}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-5 max-w-2xl text-center text-xs text-muted">
          Marketplace names are trademarks of their respective owners and are
          used only to describe where we offer services. Pourik is not
          affiliated with, endorsed by or sponsored by any of them.
        </p>
      </div>
    </section>
  );
}

export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold">
            {f.q}
            <span className="text-brand transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function UpcomingCard({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-line p-6">
      <span className="inline-block rounded-full bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
        Upcoming
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-muted">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted">{copy}</p>
    </div>
  );
}

export function CtaBand({
  title,
  copy,
  href = "/audit",
  label = "Get a free marketplace audit",
}: {
  title: string;
  copy: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className="rounded-3xl bg-foreground px-8 py-16 text-center text-background">
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-background/80">{copy}</p>
      <Link
        href={href}
        className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-dark"
      >
        {label}
      </Link>
    </div>
  );
}
