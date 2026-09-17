import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands — Pourik",
  description:
    "Pourik-owned branded products, sold on Amazon, Walmart, and direct — the same channels our consulting clients grow on.",
};

export default function BrandsPage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Our Brands
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
        We don&apos;t just advise sellers. We are one.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Pourik owns and operates a portfolio of branded consumer products,
        sold on Amazon, Walmart, and direct through this site. Every
        marketplace tactic we recommend to clients has already run against
        our own catalog, our own ad spend, and our own margin.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-2xl border border-dashed border-line p-6"
          >
            <div>
              <div className="h-32 rounded-xl bg-paper" />
              <h3 className="mt-4 font-display text-lg font-semibold text-muted">
                Brand {i} — coming soon
              </h3>
              <p className="mt-2 text-sm text-muted">
                Details on this product line will go live at launch.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-line bg-paper px-8 py-12 text-center">
        <h2 className="font-display text-2xl font-semibold">
          Want early access when we launch?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Leave your email and we&apos;ll let you know the moment our first
          branded product line goes live.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-dark"
        >
          Get notified
        </Link>
      </div>
    </div>
  );
}
