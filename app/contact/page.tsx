import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Pourik",
  description:
    "Contact Pourik about marketplace consulting, joining our expert network, or updates on Pourik-owned brands.",
};

export default function ContactPage() {
  return (
    <div className="container-px mx-auto max-w-3xl py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
        Let&apos;s talk marketplace growth.
      </h1>
      <p className="mt-6 text-lg text-muted">
        Ask about consulting, join our expert network, or get notified when
        our first product line launches. For a free audit, use the{" "}
        <a href="/audit" className="font-medium text-brand">audit request form</a>.
      </p>

      <div className="mt-12">
        <ContactForm />
      </div>

      <div className="mt-12 border-t border-line pt-8 text-sm text-muted">
        Prefer email? Reach us directly at{" "}
        <a href="mailto:hello@pourik.com" className="font-medium text-brand">
          hello@pourik.com
        </a>
        .
      </div>
    </div>
  );
}
