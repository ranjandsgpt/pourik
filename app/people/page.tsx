import type { Metadata } from "next";
import { CtaBand, Eyebrow, GhostButton } from "@/components/Blocks";

export const metadata: Metadata = {
  alternates: { canonical: "/people" },
  title: "Our People — Pourik",
  description:
    "Pourik is powered by a community of senior marketplace, retail media, ad-tech and agency professionals, supported by AI-driven tools and insights.",
};

const backgrounds = [
  {
    title: "Global marketplaces",
    copy: "People who have run categories, seller programmes, catalog quality and marketplace operations from the inside.",
  },
  {
    title: "Leading retailers",
    copy: "Merchandising, pricing and e-commerce experience from large omnichannel retail businesses.",
  },
  {
    title: "Big-tech ad platforms",
    copy: "Product, sales and solutions experience from platforms that power a large share of digital advertising.",
  },
  {
    title: "Ad-tech and bid-tech",
    copy: "Builders of programmatic buying, auctions, measurement and data systems.",
  },
  {
    title: "Global agency networks",
    copy: "Media planners, performance marketers and brand strategists who have managed multi-market accounts.",
  },
  {
    title: "Founders and operators",
    copy: "People who have launched and scaled their own products, and know what a P&L feels like.",
  },
];

const culture = [
  {
    title: "The work speaks, not the faces",
    copy: "We don't lead with personal brands. Clients get the right expert for the job, and the credit goes to the result.",
  },
  {
    title: "Here by choice",
    copy: "Our experts collaborate with Pourik because they love building. That passion shows in the care they bring to every account.",
  },
  {
    title: "Human judgement, AI speed",
    copy: "Our AI-driven tools handle the heavy analysis. Our people decide what matters and why.",
  },
  {
    title: "One team, one playbook",
    copy: "That's the ik in Pourik. What one of us learns, all of us use.",
  },
];

export default function PeoplePage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-20">
      <Eyebrow>Our people</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
        Our people are the culture that drives Pourik.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Pourik is a no-face, AI-driven tools and insights partner. Behind it is
        a community of professionals, most with 10 to 12+ years of hands-on
        experience, who have built their careers across the marketplace and
        advertising industry.
      </p>

      <h2 className="mt-16 font-display text-2xl font-semibold">
        Where our people come from
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {backgrounds.map((b) => (
          <div key={b.title} className="rounded-2xl border border-line p-6">
            <h3 className="font-display text-lg font-semibold">{b.title}</h3>
            <p className="mt-2 text-sm text-muted">{b.copy}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-xs text-muted">
        Our experts work with Pourik in their individual capacity. Their
        current or former employers are not affiliated with Pourik and do not
        endorse it, and nothing on this website represents their views.
      </p>

      <h2 className="mt-20 font-display text-2xl font-semibold">What holds us together</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {culture.map((c) => (
          <div key={c.title} className="rounded-2xl border border-line bg-paper p-6">
            <h3 className="font-display text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted">{c.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-8 rounded-3xl border border-line p-8 md:grid-cols-[2fr_1fr] md:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold">
            Experienced in marketplaces or ad-tech?
          </h2>
          <p className="mt-2 text-muted">
            We are always glad to meet people who love building. Tell us a
            little about your background.
          </p>
        </div>
        <div className="md:text-right">
          <GhostButton href="/contact">Join the network</GhostButton>
        </div>
      </div>

      <div className="mt-20">
        <CtaBand
          title="Put our people on your marketplace."
          copy="Start with a free audit from an expert matched to your category and marketplace."
        />
      </div>
    </div>
  );
}
