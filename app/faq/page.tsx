import type { Metadata } from "next";
import { CtaBand, Eyebrow, FaqList } from "@/components/Blocks";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ — Pourik",
  description:
    "Answers to common questions about Pourik's marketplace consulting, free audit, marketplaces covered and how we work.",
};

export default function FaqPage() {
  return (
    <div className="container-px mx-auto max-w-4xl py-20">
      <Eyebrow>FAQ</Eyebrow>
      <h1 className="mt-3 mb-12 font-display text-4xl font-semibold tracking-tight md:text-5xl">
        Common questions.
      </h1>
      <FaqList />
      <div className="mt-20">
        <CtaBand
          title="Still have a question?"
          copy="Write to us and a real person will reply."
          href="/contact"
          label="Contact us"
        />
      </div>
    </div>
  );
}
