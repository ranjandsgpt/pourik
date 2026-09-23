import Link from "next/link";
import Logomark from "./Logomark";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Consulting",
    links: [
      ["/services#advertising", "Retail Media & Ads"],
      ["/services#catalog", "Catalog & Listings"],
      ["/services#operations", "Inventory & Pricing"],
      ["/services#expansion", "Marketplace Expansion"],
      ["/audit", "Free Audit"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About"],
      ["/people", "Our People"],
      ["/brands", "Our Brands"],
      ["/stories", "Success Stories"],
      ["/faq", "FAQ"],
      ["/contact", "Contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["/privacy", "Privacy Policy"],
      ["/terms", "Terms of Use"],
      ["/disclaimer", "Disclaimer"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line/80">
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Logomark size={28} />
              <span className="font-display text-lg font-semibold">POURIK</span>
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-accent">
              People &middot; Ideas &middot; Businesses &middot; Beyond
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Pour into what grows. Marketplace growth from experienced
              people, backed by AI-driven tools and insights.
            </p>
            <a href={`mailto:${site.email}`} className="mt-4 inline-block text-sm font-medium hover:text-brand">
              {site.email}
            </a>
            {site.social.length > 0 && (
              <ul className="mt-3 flex gap-4 text-sm text-muted">
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold">{col.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {col.links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-brand">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 space-y-3 border-t border-line/80 pt-6 text-xs text-muted">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>
            Amazon, Walmart, TikTok, Shopee, Lazada, Tokopedia and other
            marketplace names are trademarks of their respective owners. Pourik
            is an independent business and is not affiliated with, endorsed by
            or sponsored by any of them.
          </p>
        </div>
      </div>
    </footer>
  );
}
