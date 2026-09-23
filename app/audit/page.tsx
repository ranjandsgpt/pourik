import type { Metadata } from "next";
import AuditForm from "@/components/AuditForm";
import { Eyebrow, FaqList } from "@/components/Blocks";

export const metadata: Metadata = {
  alternates: { canonical: "/audit" },
  title: "Free Marketplace Audit — Pourik",
  description:
    "Request a free, no-obligation audit of your Amazon, Walmart or TikTok Shop presence from Pourik's experts.",
};

const checks = [
  ["Listing conversion gaps", "Titles, bullet points, images, video and rich content."],
  ["Search visibility", "Keywords you rank for, keywords you are missing, and why."],
  ["Competitor positioning", "Who is winning your shoppers, on price, content or ads."],
  ["Advertising efficiency", "Where spend is working, where it is leaking, and what to change."],
  ["Inventory and pricing risks", "Stock-outs, pricing conflicts and margin pressure."],
];

const steps = [
  ["Share the basics", "Tell us your brand, where you sell and a link to your store."],
  ["We review", "An expert matched to your marketplace reviews what's publicly visible, with help from our AI tools."],
  ["You get a short report", "A prioritised list of fixes, whether or not you work with us."],
];

export default function AuditPage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-20">
      <Eyebrow>Free marketplace audit</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
        Find out where your marketplace spend should be pouring.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        A free, no-obligation health check of your marketplace presence,
        prepared by an experienced expert from the Pourik network.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-2xl font-semibold">What we look at</h2>
          <ul className="mt-6 space-y-4">
            {checks.map(([t, c]) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1 font-semibold text-brand">✓</span>
                <div>
                  <div className="font-semibold">{t}</div>
                  <p className="text-sm text-muted">{c}</p>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-2xl font-semibold">How it works</h2>
          <ol className="mt-6 space-y-4">
            {steps.map(([t, c], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper font-display font-semibold text-brand">
                  {i + 1}
                </span>
                <div>
                  <div className="font-semibold">{t}</div>
                  <p className="text-sm text-muted">{c}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-xs text-muted">
            The audit is free and carries no obligation. We take on a limited
            number at a time and may decline requests outside our scope. Audit
            findings are recommendations, not a guarantee of any outcome.
          </p>
        </div>

        <div className="rounded-3xl border border-line p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold">Request your audit</h2>
          <div className="mt-6">
            <AuditForm />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-8 font-display text-2xl font-semibold">Questions about the audit</h2>
        <FaqList limit={5} />
      </div>
    </div>
  );
}
