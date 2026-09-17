"use client";

import { useState } from "react";

const reasons = [
  "Free marketplace audit",
  "Consulting inquiry",
  "Notify me about Pourik brands",
  "Something else",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const reason = String(form.get("reason") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Pourik inquiry: ${reason}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nReason: ${reason}\n\n${message}`
    );
    window.location.href = `mailto:hello@pourik.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-paper p-8 text-center">
        <p className="font-display text-xl font-semibold">
          Your email client should be open.
        </p>
        <p className="mt-2 text-sm text-muted">
          If it didn&apos;t open, email us directly at{" "}
          <a href="mailto:hello@pourik.com" className="text-brand">
            hello@pourik.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1.5 w-full rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none focus:border-brand"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none focus:border-brand"
          />
        </div>
      </div>
      <div>
        <label htmlFor="reason" className="text-sm font-medium">
          What are you reaching out about?
        </label>
        <select
          id="reason"
          name="reason"
          defaultValue={reasons[0]}
          className="mt-1.5 w-full rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none focus:border-brand"
        >
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none focus:border-brand"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-dark"
      >
        Send
      </button>
    </form>
  );
}
