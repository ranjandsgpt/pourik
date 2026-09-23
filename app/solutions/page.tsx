import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Eyebrow, GhostButton, PrimaryButton } from "@/components/Blocks";
import { SolutionIcon, SolutionRow, StageIcon, solutions } from "@/components/Solutions";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions" },
  title: "Solutions — Pourik",
  description:
    "Marketplace growth solutions for Amazon, Walmart and TikTok Shop: retail media, catalog and listings, inventory and pricing, and marketplace expansion. Southeast Asia marketplaces coming soon.",
};

const marketplaceCards = [
  {
    badge: "A",
    title: "Grow on Amazon",
    copy: "Ads, listings and inventory planned together, so every rupee, pound and dollar of spend has a clear job.",
  },
  {
    badge: "W",
    title: "Scale on Walmart",
    copy: "Walmart Connect campaigns and listing quality work to help you win share as the marketplace grows.",
  },
  {
    badge: "T",
    title: "Build on TikTok Shop",
    copy: "Shop ads and product listings shaped for discovery-led shopping.",
  },
  {
    badge: "SEA",
    title: "Southeast Asia",
    copy: "Shopee, Lazada, Tokopedia and other regional marketplaces.",
    soon: true,
  },
];

const stages = [
  {
    level: 1 as const,
    title: "Emerging sellers",
    question: "Just getting started on a marketplace?",
    copy: "Get the basics right first: clean listings, sensible ads and a simple plan for stock and pricing.",
    cta: { label: "Get a free audit", href: "/audit" },
  },
  {
    level: 2 as const,
    title: "Growing multi-channel brands",
    question: "Selling on more than one marketplace?",
    copy: "Connect your ads, listings and inventory across channels, with senior help and without adding headcount.",
    cta: { label: "Talk to us", href: "/contact" },
  },
  {
    level: 3 as const,
    title: "Established brands",
    question: "Need more from a large catalog and budget?",
    copy: "Margin-led media, catalog governance and expansion planning, run by experienced specialists.",
    cta: { label: "Talk to us", href: "/contact" },
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line/80">
        <div className="container-px mx-auto max-w-4xl py-20 text-center md:py-28">
          <Eyebrow>Solutions</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Marketplace growth, from listing to profit.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Senior marketplace, retail media and ad-tech experts, backed by
            AI-driven tools and insights. You get experienced judgement
            without building a large in-house team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/audit">Get a free audit</PrimaryButton>
            <GhostButton href="/contact">Talk to us</GhostButton>
          </div>
        </div>
      </section>

      {/* Four solutions */}
      <section className="container-px mx-auto max-w-6xl py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Four solutions. One playbook.
          </h2>
          <p className="mt-4 text-muted">
            Every solution pairs experienced people with AI-driven tools, and
            they work best together.
          </p>
        </div>
        <div className="mt-14">
          <SolutionRow />
        </div>
      </section>

      {/* Marketplaces */}
      <section className="border-t border-line/80">
        <div className="container-px mx-auto grid max-w-6xl gap-10 py-20 md:grid-cols-[1fr_1.3fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow tone="accent">Marketplaces</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Tailored to every marketplace.
            </h2>
            <p className="mt-4 text-muted">
              Each marketplace has its own rules, ad products and shoppers. We
              adapt the playbook to fit, instead of copying one channel onto
              another.
            </p>
          </div>
          <ul className="space-y-4">
            {marketplaceCards.map((m) => (
              <li
                key={m.title}
                className={`rounded-2xl border p-6 ${
                  m.soon ? "border-dashed border-line" : "border-line bg-paper"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-background font-display text-sm font-semibold text-brand">
                    {m.badge}
                  </span>
                  <h3 className="font-display text-lg font-semibold">{m.title}</h3>
                  {m.soon && (
                    <span className="ml-auto rounded-full bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted">{m.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stages */}
      <section className="border-t border-line/80 bg-paper">
        <div className="container-px mx-auto max-w-6xl py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Solutions for every stage.
            </h2>
            <p className="mt-4 text-muted">
              Wherever you are today, we start with what will move the needle
              next.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stages.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-2xl border border-line bg-background p-8 text-center"
              >
                <div className="flex justify-center">
                  <StageIcon level={s.level} />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                <hr className="my-5 border-line" />
                <p className="font-semibold">{s.question}</p>
                <p className="mt-3 flex-1 text-sm text-muted">{s.copy}</p>
                <Link
                  href={s.cta.href}
                  className="mt-6 block rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
                >
                  {s.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="container-px mx-auto max-w-6xl py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          What&apos;s included
        </h2>
        <div className="mt-10 space-y-14">
          {solutions.map((g) => (
            <div key={g.id} id={g.id} className="scroll-mt-24 border-t border-line pt-10">
              <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                <div>
                  <SolutionIcon id={g.id} />
                  <h3 className="mt-4 font-display text-2xl font-semibold">{g.title}</h3>
                  <p className="mt-3 text-sm text-muted">{g.copy}</p>
                </div>
                <ul className="grid gap-3 self-start sm:grid-cols-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-2 rounded-xl border border-line px-4 py-3 text-sm">
                      <span className="text-brand">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <CtaBand
            title="Not sure where to start?"
            copy="Tell us about your marketplace accounts and we'll come back with a free audit and a prioritised list of what to fix first."
          />
        </div>
      </section>
    </>
  );
}
