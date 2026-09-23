"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    const subject = encodeURIComponent("Subscribe to Pourik Notes");
    const body = encodeURIComponent(
      `Please add ${email} to Pourik Notes. I consent to receive occasional emails from Pourik and understand I can unsubscribe at any time.`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setDone(true);
  }

  if (done) {
    return (
      <p className="rounded-2xl border border-line bg-background p-6 text-sm text-muted">
        Your email app should now be open with a subscribe request. Send it and
        you&apos;re in.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="nl-email" className="sr-only">
          Email
        </label>
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
          className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-dark"
        >
          Subscribe
        </button>
      </div>
      <label className="flex items-start gap-2 text-xs text-muted">
        <input type="checkbox" required className="mt-0.5 accent-[var(--brand)]" />
        <span>
          I agree to receive occasional emails from Pourik. I can unsubscribe
          at any time. See our{" "}
          <Link href="/privacy" className="text-brand underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
    </form>
  );
}
