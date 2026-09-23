"use client";

import Link from "next/link";
import { useState } from "react";
import { submitForm, type SubmitState } from "@/lib/submit";
import { FormError, Honeypot } from "./FormStatus";

export default function NewsletterForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (String(f.get("_honey") ?? "")) return;
    setState("sending");
    const ok = await submitForm("Subscribe to Pourik Notes", {
      email: String(f.get("email") ?? "").trim(),
      Consent: "Agreed to receive occasional emails from Pourik; can unsubscribe at any time.",
    });
    setState(ok ? "sent" : "error");
  }

  if (state === "sent") {
    return (
      <p role="status" className="rounded-2xl border border-line bg-background p-6 text-sm text-muted">
        Thanks, you&apos;re subscribed. You can unsubscribe at any time by
        replying to any of our emails.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <Honeypot />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="nl-email" className="sr-only">Email</label>
        <input
          id="nl-email"
          name="email"
          type="email"
          required
          placeholder="you@brand.com"
          className="w-full rounded-full border border-line bg-background px-4 py-3 text-sm outline-none focus:border-brand"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-dark disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      <label className="flex items-start gap-2 text-xs text-muted">
        <input type="checkbox" required className="mt-0.5 accent-[var(--brand)]" />
        <span>
          I agree to receive occasional emails from Pourik. I can unsubscribe
          at any time. See our{" "}
          <Link href="/privacy" className="text-brand underline">Privacy Policy</Link>.
        </span>
      </label>
      <FormError state={state} />
    </form>
  );
}
