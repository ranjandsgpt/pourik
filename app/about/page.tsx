import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Pourik",
  description:
    "Pourik is a marketplace growth consultancy that also owns and operates its own branded products, so every recommendation is tested before it's sold.",
};

const principles = [
  {
    title: "We operate, not just advise",
    copy: "Pourik owns branded products sold on the same marketplaces our clients grow on. Tactics get tested on our own catalog first.",
  },
  {
    title: "Margin over vanity metrics",
    copy: "ACOS and ROAS mean nothing if they don't translate to contribution margin. We optimize for the number that actually matters.",
  },
  {
    title: "Full-funnel, not just ads",
    copy: "Advertising can't fix a bad listing or an out-of-stock SKU. We work catalog, inventory, pricing, and media together.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        About Pourik
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
        A growth partner with skin in the game.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Most marketplace agencies sell advice they&apos;ve never had to live with.
        Pourik is built differently: we run our own branded products on
        Amazon and Walmart alongside our consulting clients, which means
        every strategy we recommend has already been paid for out of our own
        pocket before it reaches yours.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {principles.map((p) => (
          <div key={p.title} className="rounded-2xl border border-line p-6">
            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold">
          Two businesses, one playbook
        </h2>
        <p className="mt-4 text-muted">
          Pourik runs on two sides that feed each other. The consulting side
          works with marketplace brands on advertising, catalog, and
          operations. The brands side builds and sells Pourik-owned products
          on those same channels. Insights flow both ways — client work
          sharpens what we do with our own products, and our own products
          keep our advice honest.
        </p>
      </div>
    </div>
  );
}
