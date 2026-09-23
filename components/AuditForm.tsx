"use client";

import Link from "next/link";
import { useState } from "react";
import { marketplaces, upcomingMarketplaces } from "@/lib/site";
import { submitForm, type SubmitState } from "@/lib/submit";
import { FormError, FormSent, Honeypot } from "./FormStatus";

const field =
  "mt-1.5 w-full rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none focus:border-brand";

export default function AuditForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (String(f.get("_honey") ?? "")) return;
    const get = (k: string) => String(f.get(k) ?? "").trim();
    setState("sending");
    const ok = await submitForm(`Free audit request: ${get("company")}`, {
      Name: get("name"),
      "Brand or company": get("company"),
      email: get("email"),
      Phone: get("phone") || "Not provided",
      Marketplaces: f.getAll("marketplaces").map(String).join(", ") || "Not specified",
      "Storefront or listing URL": get("storefront"),
      Message: get("message") || "-",
      Consent: "Agreed to Pourik using these details to prepare the audit and contact them about it (Privacy Policy).",
    });
    setState(ok ? "sent" : "error");
  }

  if (state === "sent") {
    return (
      <FormSent
        title="Thanks, your audit request is in."
        copy="We'll review it and reply by email, usually within a few working days."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">Name *</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium">Brand or company *</label>
          <input id="company" name="company" required autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">Work email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-medium">Where do you sell?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {[...marketplaces, ...upcomingMarketplaces, "Other"].map((m) => (
            <label
              key={m}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm has-[:checked]:border-brand has-[:checked]:text-brand"
            >
              <input type="checkbox" name="marketplaces" value={m} className="accent-[var(--brand)]" />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="storefront" className="text-sm font-medium">
          Storefront or a key listing URL *
        </label>
        <input id="storefront" name="storefront" type="url" required placeholder="https://" className={field} />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          What would you like us to look at? (optional)
        </label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>

      <p className="text-xs text-muted">
        Please don&apos;t share passwords, bank details or other sensitive
        information in this form.
      </p>

      <label className="flex items-start gap-2 text-sm text-muted">
        <input type="checkbox" required className="mt-1 accent-[var(--brand)]" />
        <span>
          I agree that Pourik may use these details to prepare my audit and
          contact me about it, as described in the{" "}
          <Link href="/privacy" className="text-brand underline">Privacy Policy</Link>.
        </span>
      </label>

      <FormError state={state} />

      <button
        type="submit"
        disabled={state === "sending"}
        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Request my free audit"}
      </button>
    </form>
  );
}
