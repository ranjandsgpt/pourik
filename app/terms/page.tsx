import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use — Pourik",
  description: "The terms that apply when you use the Pourik website.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        These Terms of Use apply to your use of {site.url} (the
        &quot;Website&quot;), operated by {site.legalName}, {site.address}{" "}
        (&quot;Pourik&quot;, &quot;we&quot;, &quot;us&quot;). By using the
        Website, you agree to these terms. If you do not agree, please do not
        use the Website.
      </p>

      <h2>1. About the Website</h2>
      <p>
        The Website gives general information about Pourik&apos;s marketplace
        growth consulting services and upcoming Pourik-owned brands. Nothing on
        the Website is an offer to provide services or sell goods. Any
        engagement is governed only by a separate written agreement between you
        and Pourik.
      </p>

      <h2>2. Free audit</h2>
      <p>
        We may offer a free, no-obligation audit of your marketplace presence.
        We may accept or decline audit requests at our discretion. Audits are
        based on information available to us at the time and are
        recommendations only. They are not a promise or guarantee of any sales,
        ranking, advertising or financial outcome.
      </p>

      <h2>3. No guarantee of results</h2>
      <p>
        Marketplace performance depends on many factors outside our control,
        including marketplace policies and algorithms, competition, demand,
        pricing and stock. We do not guarantee any specific result. Figures on
        the Website that describe our people&apos;s experience relate to their
        individual careers and are not results delivered by Pourik.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        The Pourik name, logo, text, design and other content on the Website
        belong to Pourik or its licensors and are protected by law. You may view
        and share pages for your own, non-commercial reference, but you may not
        copy, modify or reuse our content for commercial purposes without our
        written permission. Amazon, Walmart, TikTok, Shopee, Lazada, Tokopedia
        and other marketplace names are trademarks of their respective owners.
        They are used only to describe where we offer services and do not imply
        any affiliation or endorsement.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Website for any unlawful purpose;</li>
        <li>send us false information or content that belongs to someone else without permission;</li>
        <li>try to disrupt, damage or gain unauthorised access to the Website; or</li>
        <li>scrape or copy the Website in bulk by automated means.</li>
      </ul>

      <h2>6. Third-party links</h2>
      <p>
        The Website may link to other websites. We do not control them and are
        not responsible for their content or privacy practices.
      </p>

      <h2>7. Disclaimer and limitation of liability</h2>
      <p>
        The Website is provided &quot;as is&quot;. We try to keep it accurate
        and available, but we do not promise that it will be error-free or
        uninterrupted. To the extent permitted by law, Pourik is not liable for
        any indirect or consequential loss arising from your use of the
        Website. Nothing in these terms limits any right you have under the
        Consumer Protection Act, 2019 or other law that cannot be excluded.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we handle
        personal data.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Courts at Bengaluru,
        Karnataka will have jurisdiction over any dispute arising from them,
        subject to any rights you have under consumer protection law.
      </p>

      <h2>10. Changes and contact</h2>
      <p>
        We may update these terms from time to time. The &quot;Last
        updated&quot; date above shows when they last changed. For questions or
        grievances, email{" "}
        <a href={`mailto:${site.grievanceEmail}`}>{site.grievanceEmail}</a>.
      </p>
    </LegalPage>
  );
}
