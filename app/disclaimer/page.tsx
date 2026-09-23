import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer — Pourik",
  description:
    "Important notes on results, trademarks, our experts' affiliations and AI-assisted content.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer">
      <h2>Results</h2>
      <p>
        Pourik does not guarantee any sales, ranking, advertising or financial
        result. Outcomes differ from brand to brand and depend on factors
        outside our control. Past results, including any case study published
        on this Website, do not guarantee future outcomes.
      </p>

      <h2>Figures about our people</h2>
      <p>
        Figures such as the number of brands our people have worked on, or
        their years of experience, describe the combined individual careers of
        experts in the Pourik network. They are not results delivered by
        Pourik as a company.
      </p>

      <h2>Our experts&apos; affiliations</h2>
      <p>
        Experts in the Pourik network collaborate with us in their individual
        capacity. Their current or former employers are not affiliated with
        Pourik, have not endorsed Pourik, and are not responsible for our
        services. Nothing on this Website represents the views of those
        employers.
      </p>

      <h2>Marketplaces and trademarks</h2>
      <p>
        Pourik is an independent business. We are not affiliated with,
        endorsed by or sponsored by Amazon, Walmart, TikTok, Shopee, Lazada,
        Tokopedia or any other marketplace we mention. All trademarks belong to
        their respective owners and are used only to describe where we offer
        services.
      </p>

      <h2>AI-assisted work</h2>
      <p>
        We use AI-driven tools to support research and analysis. Our people
        review the output, and recommendations are made by them, not by the
        tools alone.
      </p>

      <h2>Not legal, tax or financial advice</h2>
      <p>
        Content on this Website is general information about marketplace
        growth. It is not legal, tax, accounting or investment advice. Please
        consult a qualified professional for those matters.
      </p>

      <h2>Questions</h2>
      <p>
        Write to <a href={`mailto:${site.email}`}>{site.email}</a>. See also our{" "}
        <Link href="/terms">Terms of Use</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
