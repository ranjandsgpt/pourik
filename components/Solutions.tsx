import Link from "next/link";

export type Solution = {
  id: string;
  title: string;
  short: string;
  copy: string;
  items: string[];
};

export const solutions: Solution[] = [
  {
    id: "advertising",
    title: "Retail Media & Advertising",
    short: "Sponsored ads, DSP and marketplace ad programmes run around contribution margin, so spend goes where it earns.",
    copy: "We plan, run and optimise paid media across the marketplaces that matter, built around contribution margin rather than vanity ROAS.",
    items: [
      "Amazon Sponsored Products, Brands & Display",
      "Amazon DSP",
      "Walmart Connect",
      "TikTok Shop ads",
      "Shopee, Lazada and Tokopedia ads (coming soon)",
      "Bid strategy and budget pacing tied to margin, not just ACOS",
      "Regular performance reporting with clear next actions",
    ],
  },
  {
    id: "catalog",
    title: "Catalog & Listing Optimisation",
    short: "Search-led titles, rich content, images and video that help shoppers find you and choose you.",
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
    short: "Forecasting, reorder planning and pricing logic that protect availability, margin and cash flow together.",
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
    short: "Launch plans for new marketplaces, regions and categories, built step by step.",
    copy: "Ready for a new marketplace, region or category? We plan the launch step by step, using what our experts have learned across many brands.",
    items: [
      "New marketplace launch planning",
      "Cross-border entry and localisation",
      "New category and product launch strategy",
      "Competitive and category analysis",
    ],
  },
];

const paths: Record<string, React.ReactNode> = {
  // Megaphone
  advertising: (
    <>
      <path d="M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1Z" />
      <path d="M16 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 6a8.5 8.5 0 0 1 0 12" />
    </>
  ),
  // Listing card
  catalog: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </>
  ),
  // Box
  operations: (
    <>
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
    </>
  ),
  // Globe
  expansion: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5Z" />
    </>
  ),
};

export function SolutionIcon({ id }: { id: string }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-background text-brand">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[id]}
      </svg>
    </span>
  );
}

// Four-column row: icon, title, short copy, link.
export function SolutionRow({ linkBase = "/solutions" }: { linkBase?: string }) {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {solutions.map((s) => (
        <div key={s.id}>
          <SolutionIcon id={s.id} />
          <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-muted">{s.short}</p>
          <Link
            href={`${linkBase}#${s.id}`}
            className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Learn more →
          </Link>
        </div>
      ))}
    </div>
  );
}

// Growth-stage icon: 1, 2 or 3 filled bars.
export function StageIcon({ level }: { level: 1 | 2 | 3 }) {
  return (
    <svg width="44" height="40" viewBox="0 0 44 40" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={4 + i * 13}
          y={26 - i * 10}
          width="10"
          height={12 + i * 10}
          rx="2"
          fill={i < level ? "var(--brand)" : "var(--line)"}
        />
      ))}
    </svg>
  );
}
