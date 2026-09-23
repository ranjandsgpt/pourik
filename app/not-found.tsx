import type { Metadata } from "next";
import { Eyebrow, GhostButton, PrimaryButton } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Page not found — Pourik",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="container-px mx-auto max-w-3xl py-28 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
        The link may be old or mistyped. Here are a few good places to go
        instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <PrimaryButton href="/">Go to the home page</PrimaryButton>
        <GhostButton href="/services">See our services</GhostButton>
        <GhostButton href="/contact">Contact us</GhostButton>
      </div>
    </div>
  );
}
