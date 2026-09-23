import type { Metadata } from "next";
import { CtaBand, Eyebrow } from "@/components/Blocks";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About — Pourik",
  description:
    "What Pourik means: Pūr, Sanskrit for to fill completely, and Ik, the first unit of value. Together, the overflow of wealth. A marketplace growth partner built on experienced people and AI-driven insights.",
};

const pillars = [
  {
    letter: "P",
    title: "People",
    copy: "Experts with 10+ years of hands-on marketplace, retail media and ad-tech experience.",
  },
  {
    letter: "I",
    title: "Ideas",
    copy: "Strategy shaped by experience and sharpened by AI-driven tools and insights.",
  },
  {
    letter: "B",
    title: "Businesses",
    copy: "Solutions for marketplace brands today, and Pourik-owned brands in the making.",
  },
  {
    letter: "+",
    title: "Beyond",
    copy: "Bangalore and London today, the USA next. Southeast Asian marketplaces coming soon.",
  },
];

const principles = [
  {
    title: "Pour where it grows",
    copy: "Every rupee, pound and dollar of spend should have a reason. We look for the places it will work hardest, and cut the places it leaks.",
  },
  {
    title: "Margin over vanity metrics",
    copy: "ACOS and ROAS only matter if they show up in contribution margin. We work toward the number that pays the bills.",
  },
  {
    title: "Full-funnel, not just ads",
    copy: "Ads cannot fix a weak listing or an empty shelf. We look at catalog, inventory, pricing and media together.",
  },
  {
    title: "Honest by default",
    copy: "No guaranteed rankings, no inflated claims. Clear reasoning, plain reporting and advice you can check.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-20">
      <Eyebrow>About Pourik</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
        What does Pourik mean?
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        We built our name from two old roots. Put together, they make one idea:
        the overflow of wealth.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-line bg-paper p-8">
          <div className="font-display text-5xl font-semibold text-brand">Pour</div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Sanskrit abundance
          </p>
          <p className="mt-4 text-muted">
            In Sanskrit, <em>pūr</em> (पूर्) or <em>pūra</em> (पूर) does not
            mean an empty spill. It means to fill completely: fullness,
            abundance, overflowing. Something that is <em>pūrita</em> has been
            made full, intensified, spread over. Like the English word pour, it
            is a steady, heavy stream that fills everything it reaches.
          </p>
        </div>
        <div className="rounded-3xl border border-line bg-paper p-8">
          <div className="font-display text-5xl font-semibold text-accent">Ik</div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-accent">
            The unit of value
          </p>
          <p className="mt-4 text-muted">
            In Punjabi and Hindi, <em>ik</em> (ਇੱਕ) means one: the first,
            foundational unit that every count and every trade begins with. In
            ancient Mayan, <em>Ik&apos;</em> is wind and breath, the flow that
            keeps life moving.
          </p>
        </div>
      </div>

      <h2 className="mt-16 font-display text-2xl font-semibold">Pūr + Ik</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-line p-6">
          <div className="font-display text-xl font-semibold text-brand">
            The overflow of wealth
          </div>
          <p className="mt-2 text-sm text-muted">
            A steady stream of value that keeps flowing, the way breath keeps
            life moving.
          </p>
        </div>
        <div className="rounded-2xl border border-line p-6">
          <div className="font-display text-xl font-semibold text-brand">
            To fill the unit
          </div>
          <p className="mt-2 text-sm text-muted">
            Take one unit of value and keep filling it until it overflows. In
            business terms, that is compounding.
          </p>
        </div>
      </div>

      <p className="mt-10 max-w-3xl text-lg text-muted">
        That is what we want growth to look like for the brands we work with:
        every rupee, pound and dollar poured into the right place, building on what
        came before. Pourik is a marketplace growth partner that pairs senior
        human expertise with AI-driven tools and insights, and we are building
        our own brands on the same playbook.
      </p>
      <p className="mt-4 max-w-3xl text-xs text-muted">
        The meaning of our name describes our ambition. It is not a promise of
        any financial return. Results always depend on the business, the
        marketplace and conditions outside anyone&apos;s control.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-2xl border border-line p-6">
            <div className="font-display text-2xl font-semibold text-brand">{p.letter}</div>
            <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.copy}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-20 font-display text-2xl font-semibold">How we work</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {principles.map((p) => (
          <div key={p.title} className="rounded-2xl border border-line p-6">
            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <CtaBand
          title="Let's find where your growth should pour."
          copy="Start with a free, no-obligation audit of your marketplace presence."
        />
      </div>
    </div>
  );
}
