import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Pourik",
  description: "How Pourik collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains how {site.legalName} (&quot;Pourik&quot;,
        &quot;we&quot;, &quot;us&quot;), based in {site.address}, handles
        personal data collected through {site.url} (the &quot;Website&quot;).
        We follow the Digital Personal Data Protection Act, 2023 and the rules
        made under it, the Information Technology Act, 2000, and other
        applicable Indian law.
      </p>

      <h2>1. What we collect</h2>
      <ul>
        <li>
          <strong>Details you choose to send us</strong> through our forms or by
          email: your name, work email, phone number (optional), brand or
          company name, marketplace storefront or listing links, and your
          message.
        </li>
        <li>
          <strong>Basic technical data</strong> that our hosting provider may
          log automatically for security and reliability, such as IP address,
          browser type and pages requested.
        </li>
      </ul>
      <p>
        Our forms do not store anything on the Website. Submitting a form opens
        your own email app with a pre-filled message, and we receive your
        details only when you send that email. We do not currently use
        advertising or analytics cookies. We do not ask for, and you should not
        send us, passwords, bank details or other sensitive data.
      </p>

      <h2>2. Why we use it</h2>
      <ul>
        <li>To respond to your enquiry and prepare any audit you request.</li>
        <li>To discuss, provide and manage our services if we work together.</li>
        <li>To send Pourik Notes, only if you have subscribed.</li>
        <li>To keep the Website secure and meet our legal obligations.</li>
      </ul>
      <p>
        We process your personal data on the basis of the consent you give when
        you contact us, or for legitimate uses permitted by law, such as
        responding to a request you have made. We use your data only for the
        purpose for which you gave it.
      </p>

      <h2>3. Who we share it with</h2>
      <p>
        We do not sell your personal data. We share it only with service
        providers who help us run the business, such as our email and website
        hosting providers, and only as needed for the purposes above. We may
        also disclose data where required by law or by a lawful order of a
        court or government authority. Some providers may store data on
        servers outside India, which we do only where permitted by Indian law.
      </p>

      <h2>4. How long we keep it</h2>
      <p>
        We keep personal data only as long as it is needed for the purpose it
        was collected for, or as required by law. Enquiries that do not lead to
        an engagement are generally deleted within 24 months of our last
        contact.
      </p>

      <h2>5. How we protect it</h2>
      <p>
        We use reasonable security safeguards, including encrypted connections
        (HTTPS) and access controls on our accounts, to protect personal data
        against unauthorised access, loss or misuse. If a personal data breach
        occurs, we will notify affected people and the authorities as required
        by law.
      </p>

      <h2>6. Your rights</h2>
      <p>Under Indian data protection law, you have the right to:</p>
      <ul>
        <li>ask for a summary of the personal data we hold about you and how we use it;</li>
        <li>ask us to correct, complete, update or erase your personal data;</li>
        <li>withdraw your consent at any time, as easily as you gave it;</li>
        <li>nominate another person to exercise your rights if you die or become unable to; and</li>
        <li>have your grievances addressed.</li>
      </ul>
      <p>
        To use any of these rights, or to unsubscribe from Pourik Notes, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Withdrawing consent
        does not affect processing that took place before you withdrew it.
      </p>

      <h2>7. Children</h2>
      <p>
        The Website and our services are meant for businesses and are not
        directed at anyone under 18. We do not knowingly collect personal data
        from children. If you believe a child has sent us personal data, please
        contact us and we will delete it.
      </p>

      <h2>8. Grievance Officer</h2>
      <p>
        For any concern or complaint about how we handle your personal data,
        contact our Grievance Officer at{" "}
        <a href={`mailto:${site.grievanceEmail}`}>{site.grievanceEmail}</a>{" "}
        with the subject line &quot;Grievance&quot;. We will acknowledge your
        complaint and resolve it within the time limits set by applicable law.
        If you are not satisfied with our response, you may complain to the
        Data Protection Board of India.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &quot;Last
        updated&quot; date above shows when it last changed. See also our{" "}
        <Link href="/terms">Terms of Use</Link> and{" "}
        <Link href="/disclaimer">Disclaimer</Link>.
      </p>
    </LegalPage>
  );
}
