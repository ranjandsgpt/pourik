import type { Metadata } from "next";
import { CtaBand, Eyebrow } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "About — Pourik",
  description:
    "The story behind Pourik: pour, from the Sanskrit root pūr (to fill), and ik, one. A marketplace growth partner built on experienced people and AI-driven insights.",
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
    copy: "Consulting for marketplace brands today, and Pourik-owned brands in the making.",
  },
  {
    letter: "+",
    title: "Beyond",
    copy: "From the US to Southeast Asia, and new marketplaces as they matter to our clients.",
  },
];

const principles = [
  {
    title: "Pour where it grows",
    copy: "Every rupee and dollar of spend should have a reason. We look for the places it will work hardest, and cut the places it leaks.",
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
        Pour + Ik. Filling businesses with growth, together as one.
      </h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-line bg-paper p-8">
          <div className="font-display text-5xl font-semibold text-brand">Pour</div>
          <p className="mt-4 text-muted">
            Inspired by the Sanskrit root <em>pūr</em> (पूर्), to fill, the same
            root behind <em>pūrṇa</em>, meaning full or complete. In English, to
            pour is to let something flow in generously. For us, it is about
            putting money, effort and ideas into the places that make a
            business whole.
          </p>
        </div>
        <div className="rounded-3xl border border-line bg-paper p-8">
          <div className="font-display text-5xl font-semibold text-accent">Ik</div>
          <p className="mt-4 text-muted">
            Inspired by <em>ikk</em> (ਇੱਕ), the Punjabi word for one. One team
            of experienced people. One shared playbook. One business at a time,
            given our full attention.
          </p>
        </div>
      </div>

      <p className="mt-10 max-w-3xl text-lg text-muted">
        Put together, Pourik is a simple idea. Good growth is not about spending
        more. It is about pouring into the right places, with people who have
        done it many times before. We are a marketplace growth partner that
        pairs senior human expertise with AI-driven tools and insights, and we
        are building our own brands on the same playbook.
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
