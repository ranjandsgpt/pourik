import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services — Pourik",
  description:
    "Marketplace growth consulting for Amazon, Walmart, TikTok Shop and Southeast Asia marketplaces: retail media, catalog optimisation, inventory and pricing, and expansion.",
};

const groups = [
  {
    id: "advertising",
    title: "Retail Media & Advertising",
    copy: "We plan, run and optimise paid media across the marketplaces that matter, built around contribution margin rather than vanity ROAS.",
    items: [
      "Amazon Sponsored Products, Brands & Display",
      "Amazon DSP",
      "Walmart Connect",
      "TikTok Shop ads",
      "Marketplace ads on Shopee, Lazada and Tokopedia",
      "Bid strategy and budget pacing tied to margin, not just ACOS",
      "Regular performance reporting with clear next actions",
    ],
  },
  {
    id: "catalog",
    title: "Catalog & Listing Optimisation",
    copy: "Your listings are your storefront. We rebuild them to convert, and to rank.",
    items: [
      "AI-assisted keyword research and search-led titles and bullets",
      "Rich content (such as A+ Content) and brand store design",
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
      "Demand forecasting and reorder planning",
      "Fulfilment model and multi-warehouse strategy",
      "Pricing logic that protects Buy Box and margin",
      "Promotions, coupons and deal planning",
    ],
  },
  {
    id: "expansion",
    title: "Marketplace Expansion",
    copy: "Ready for a new marketplace, region or category? We plan the launch step by step, using what our experts have learned across many brands.",
    items: [
      "New marketplace launch in the US and Southeast Asia",
      "Cross-border entry and localisation",
      "New category and product launch strategy",
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
        Senior experts from across the marketplace and advertising industry,
        supported by AI-driven tools and insights. You get experienced
        judgement without building a large in-house team.
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
          free audit and a prioritised list of what to fix first.
        </p>
        <Link
          href="/audit"
          className="mt-6 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-dark"
        >
          Get a free audit
        </Link>
      </div>
    </div>
  );
}
