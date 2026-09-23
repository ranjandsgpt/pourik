import { Eyebrow } from "@/components/Blocks";
import { site } from "@/lib/site";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container-px mx-auto max-w-3xl py-20">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: {site.lastUpdated}</p>
      <div className="legal mt-8">{children}</div>
    </div>
  );
}
