import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line/80">
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-lg font-semibold">Pourik</div>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Marketplace growth consulting and a portfolio of Pourik-owned
              brands, built on the same playbook.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Consulting</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><Link href="/services#advertising" className="hover:text-brand">Retail Media & Ads</Link></li>
              <li><Link href="/services#catalog" className="hover:text-brand">Catalog & Listings</Link></li>
              <li><Link href="/services#operations" className="hover:text-brand">Inventory & Pricing</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-brand">About</Link></li>
              <li><Link href="/brands" className="hover:text-brand">Our Brands</Link></li>
              <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Get in touch</div>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a href="mailto:hello@pourik.com" className="hover:text-brand">
                  hello@pourik.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line/80 pt-6 text-xs text-muted md:flex-row">
          <span>© {new Date().getFullYear()} Pourik. All rights reserved.</span>
          <span>Amazon, Walmart, and other marketplace names are trademarks of their respective owners.</span>
        </div>
      </div>
    </footer>
  );
}
