import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, UpcomingCard } from "@/components/Blocks";

export const metadata: Metadata = {
  alternates: { canonical: "/brands" },
  title: "Our Brands — Pourik",
  description:
    "Pourik is building its own branded products, to be sold on the same marketplaces we advise on. Get notified at launch.",
};

export default function BrandsPage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-20">
      <Eyebrow tone="accent">Our Brands</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
        We advise sellers. Soon, we&apos;ll be one too.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Pourik is building its own branded products, to be sold on the same
        marketplaces we work on for clients. They will be our proving ground:
        a place to test ideas with our own catalog, our own ad spend and our
        own margin.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <UpcomingCard
            key={i}
            title={`Brand ${i}`}
            copy="Details on this product line will be published at launch."
          />
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-xs text-muted">
        No products are on sale through this website yet. Product details,
        prices, seller information, and return, refund and grievance policies
        will be published here before any sale, as required under the Consumer
        Protection (E-Commerce) Rules, 2020.
      </p>

      <div className="mt-16 rounded-3xl border border-line bg-paper px-8 py-12 text-center">
        <h2 className="font-display text-2xl font-semibold">
          Want to hear when we launch?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Leave your email and we&apos;ll let you know when our first product
          line goes live.
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
