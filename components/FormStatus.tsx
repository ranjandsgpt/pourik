import { site } from "@/lib/site";
import type { SubmitState } from "@/lib/submit";

export function FormSent({ title, copy }: { title: string; copy: string }) {
  return (
    <div role="status" className="rounded-2xl border border-line bg-paper p-8 text-center">
      <p className="font-display text-xl font-semibold">{title}</p>
      <p className="mt-2 text-sm text-muted">{copy}</p>
    </div>
  );
}

export function FormError({ state }: { state: SubmitState }) {
  if (state !== "error") return null;
  return (
    <p role="alert" className="text-sm text-red-600">
      Sorry, that didn&apos;t go through. Please try again, or email us at{" "}
      <a href={`mailto:${site.email}`} className="underline">
        {site.email}
      </a>
      .
    </p>
  );
}

// Hidden field that bots fill in and people don't.
export function Honeypot() {
  return (
    <input
      type="text"
      name="_honey"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="hidden"
    />
  );
}
