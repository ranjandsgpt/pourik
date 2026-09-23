"use client";

import Link from "next/link";
import { useState } from "react";
import { submitForm, type SubmitState } from "@/lib/submit";
import { FormError, FormSent, Honeypot } from "./FormStatus";

const reasons = [
  "Consulting inquiry",
  "Free marketplace audit",
  "Notify me about Pourik brands",
  "Joining the Pourik expert network",
  "Something else",
];

const field =
  "mt-1.5 w-full rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none focus:border-brand";

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (String(f.get("_honey") ?? "")) return;
    const get = (k: string) => String(f.get(k) ?? "").trim();
    setState("sending");
    const ok = await submitForm(`Pourik inquiry: ${get("reason")}`, {
      Name: get("name"),
      email: get("email"),
      Reason: get("reason"),
      Message: get("message") || "-",
      Consent: "Agreed to Pourik using these details to respond (Privacy Policy).",
    });
    setState(ok ? "sent" : "error");
  }

  if (state === "sent") {
    return (
      <FormSent
        title="Thanks, your message is in."
        copy="A real person will reply by email, usually within a few working days."
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
          <label htmlFor="email" className="text-sm font-medium">Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="reason" className="text-sm font-medium">
          What are you reaching out about?
        </label>
        <select id="reason" name="reason" defaultValue={reasons[0]} className={field}>
          {reasons.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={5} className={field} />
      </div>
      <label className="flex items-start gap-2 text-sm text-muted">
        <input type="checkbox" required className="mt-1 accent-[var(--brand)]" />
        <span>
          I agree that Pourik may use these details to respond to my message,
          as described in the{" "}
          <Link href="/privacy" className="text-brand underline">Privacy Policy</Link>.
        </span>
      </label>
      <FormError state={state} />
      <button
        type="submit"
        disabled={state === "sending"}
        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
