import type { Metadata } from "next";
import { CtaBand, Eyebrow, UpcomingCard } from "@/components/Blocks";

export const metadata: Metadata = {
  alternates: { canonical: "/stories" },
  title: "Success Stories — Pourik",
  description:
    "Case studies and testimonials from Pourik's experts and the brands they work with. Coming soon.",
};

export default function StoriesPage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-20">
      <Eyebrow>Success stories</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
        Real stories, told with permission.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Every Pourik expert brings a career of work with brands of all sizes.
        We are collecting those stories and will publish them here once the
        details are verified and the right permissions are in place.
      </p>

      <h2 className="mt-16 font-display text-2xl font-semibold">Case studies</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <UpcomingCard title="Retail media" copy="How our experts have rebuilt ad programmes around margin." />
        <UpcomingCard title="Catalog and listings" copy="Listing turnarounds that changed how shoppers found a brand." />
        <UpcomingCard title="Marketplace launches" copy="Taking brands into new marketplaces and regions." />
      </div>

      <h2 className="mt-16 font-display text-2xl font-semibold">Testimonials</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <UpcomingCard title="Brand owners" copy="In their own words, shared with their consent." />
        <UpcomingCard title="Marketplace teams" copy="From the teams we work alongside." />
        <UpcomingCard title="Our experts" copy="Why they chose to build with Pourik." />
      </div>

      <p className="mt-10 max-w-3xl text-xs text-muted">
        Case studies will describe work done by individual experts, including
        work done before they joined the Pourik network, and will say so
        clearly. Results differ from brand to brand and past results do not
        guarantee future outcomes.
      </p>

      <div className="mt-20">
        <CtaBand
          title="Want to be one of our first stories?"
          copy="Start with a free audit and see where the growth is sitting."
        />
      </div>
    </div>
  );
}
