import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services — Pourik",
  description:
    "Marketplace growth consulting: advertising, catalog optimization, inventory and pricing strategy, and marketplace expansion for Amazon, Walmart, and beyond.",
};

const groups = [
  {
    id: "advertising",
    title: "Retail Media & Advertising",
    copy: "We manage and optimize paid media across the marketplaces that matter — built around contribution margin, not vanity ROAS.",
    items: [
      "Amazon Sponsored Products, Brands & Display",
      "Amazon DSP",
      "Walmart Connect",
      "Bid strategy & budget pacing tied to margin, not just ACOS",
      "Weekly performance reporting with clear next actions",
    ],
  },
  {
    id: "catalog",
    title: "Catalog & Listing Optimization",
    copy: "Your listings are your storefront. We rebuild them to convert, and to rank.",
    items: [
      "Keyword research & SEO-driven titles/bullets",
      "A+ Content and Brand Store design",
      "Image and video strategy for conversion rate",
      "Review and ratings strategy within platform rules",
      "Variation and catalog structure cleanup",
    ],
  },
  {
    id: "operations",
    title: "Inventory & Pricing Strategy",
    copy: "Growth stalls fast when you're out of stock or priced wrong. We keep both in check.",
    items: [
      "Demand forecasting & reorder planning",
      "FBA/FBM and multi-warehouse strategy",
      "Repricing logic that protects Buy Box and margin",
      "Promotions, coupons, and Lightning Deal planning",
    ],
  },
  {
    id: "expansion",
    title: "Marketplace Expansion",
    copy: "Ready for a new marketplace or category? We've already tested the playbook on our own brands.",
    items: [
      "New marketplace launch (Walmart, Target Plus, and more)",
      "International marketplace entry",
      "New category and ASIN launch strategy",
      "Competitive and category analysis",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        Consulting
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
        A full-funnel marketplace growth team, without the full-time hires.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Every recommendation we give a client, we&apos;ve already tried on a
        Pourik-owned brand. That&apos;s the difference between an agency that
        theorizes and one that operates.
      </p>

      <div className="mt-16 space-y-16">
        {groups.map((g) => (
          <div key={g.id} id={g.id} className="scroll-mt-24 border-t border-line pt-10">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="font-display text-2xl font-semibold">
                  {g.title}
                </h2>
                <p className="mt-3 text-sm text-muted">{g.copy}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-line px-4 py-3 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl bg-foreground px-8 py-14 text-center text-background">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">
          Not sure where to start?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-background/80">
          Tell us about your marketplace accounts and we&apos;ll come back with a
          free audit and a prioritized list of what to fix first.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Get a free audit
        </Link>
      </div>
    </div>
  );
}
