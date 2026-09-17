import Link from "next/link";

const services = [
  {
    title: "Retail Media & Advertising",
    copy: "Amazon Ads, Walmart Connect, and retail DSP campaigns built around margin and true ROAS, not just spend.",
  },
  {
    title: "Catalog & Listing Optimization",
    copy: "SEO-driven titles, A+ content, and image/video strategy that lifts conversion rate, not just traffic.",
  },
  {
    title: "Inventory & Pricing Strategy",
    copy: "Demand forecasting, reorder planning, and repricing logic that protect Buy Box and cash flow together.",
  },
  {
    title: "Marketplace Expansion",
    copy: "Launch playbooks for new marketplaces and categories, backed by data from brands we already operate.",
  },
];

const stats = [
  { value: "2", label: "sides of the business — we consult, and we sell" },
  { value: "1", label: "playbook, tested on our own brands before yours" },
  { value: "0", label: "theoretical advice — everything is run on live catalogs" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line/80">
        <div className="container-px mx-auto grid max-w-6xl gap-10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Marketplace growth, proven on our own brands
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              We grow marketplace sellers — and we run our own.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              Pourik is a marketplace growth partner for Amazon, Walmart, and
              beyond: advertising, catalog, and inventory strategy. We also
              build and sell our own branded products on those same
              channels, so every recommendation we make has already been
              tested with our own money.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Get a free marketplace audit
              </Link>
              <Link
                href="/brands"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
              >
                See our brands
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 self-start md:mt-4">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <div className="font-display text-2xl font-semibold text-brand">
                Consulting
              </div>
              <p className="mt-2 text-sm text-muted">
                Full-funnel marketplace growth for brands that sell on
                Amazon, Walmart, and other retail marketplaces.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-6">
              <div className="font-display text-2xl font-semibold text-brand">
                Our Brands
              </div>
              <p className="mt-2 text-sm text-muted">
                A growing portfolio of Pourik-owned products, built with the
                same playbook we sell.
              </p>
            </div>
            <div className="col-span-2 rounded-2xl border border-dashed border-line p-6 text-sm text-muted">
              Why both? Most agencies only theorize. We operate live listings
              ourselves, so our advice is battle-tested before it reaches
              you.
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-line/80 bg-paper">
        <div className="container-px mx-auto grid max-w-6xl gap-8 py-12 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-semibold text-brand">
                {s.value}
              </div>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-px mx-auto max-w-6xl py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Consulting
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Everything a marketplace brand needs to grow, minus the guesswork.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-line p-6 transition-colors hover:border-brand"
            >
              <h3 className="font-display text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{s.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/services"
            className="text-sm font-semibold text-brand hover:text-brand-dark"
          >
            See the full consulting offer →
          </Link>
        </div>
      </section>

      {/* Brands teaser */}
      <section className="border-t border-line/80 bg-paper">
        <div className="container-px mx-auto max-w-6xl py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                Our Brands
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                We sell products too — on the exact channels we advise on.
              </h2>
              <p className="mt-4 text-muted">
                Pourik owns and operates a portfolio of branded products sold
                directly on Amazon, Walmart, and our own store. It&apos;s our
                proving ground: nothing goes into a client strategy until
                we&apos;ve tried it on our own catalog first.
              </p>
              <Link
                href="/brands"
                className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Explore our brands
              </Link>
            </div>
            <div className="rounded-2xl border border-dashed border-line p-8 text-center text-muted">
              First Pourik-owned product line launching soon.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-6xl py-20">
        <div className="rounded-3xl bg-foreground px-8 py-16 text-center text-background">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to see what&apos;s leaking in your marketplace performance?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-background/80">
            We&apos;ll audit your Amazon or Walmart account — ads, listings, and
            inventory — and tell you exactly where the growth is sitting.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get a free marketplace audit
          </Link>
        </div>
      </section>
    </>
  );
}
