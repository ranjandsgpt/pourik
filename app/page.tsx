import Link from "next/link";
import type { Metadata } from "next";
import {
  CtaBand,
  Eyebrow,
  FaqList,
  GhostButton,
  MarketplaceStrip,
  PrimaryButton,
  StatsStrip,
  UpcomingCard,
} from "@/components/Blocks";
import NewsletterForm from "@/components/NewsletterForm";
import { SolutionRow } from "@/components/Solutions";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line/80">
        <div className="container-px mx-auto grid max-w-6xl gap-10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <Eyebrow>People &middot; Ideas &middot; Businesses &middot; Beyond</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Pour into what grows.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              Pourik is a marketplace growth partner for brands on Amazon,
              Walmart and TikTok Shop, with Southeast Asia&apos;s leading
              marketplaces coming soon. Our network of senior marketplace,
              retail media and ad-tech experts, backed by AI-driven tools and
              insights, helps you put every rupee, pound and dollar of spend
              where it works hardest.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/audit">Get a free marketplace audit</PrimaryButton>
              <GhostButton href="/people">Meet our people</GhostButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 self-start md:mt-4">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <div className="font-display text-2xl font-semibold text-brand">
                Pour
              </div>
              <p className="mt-2 text-sm text-muted">
                From the Sanskrit <em>pūr</em> (पूर्): to fill completely, to
                overflow. Abundance, poured where it counts.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-6">
              <div className="font-display text-2xl font-semibold text-accent">
                Ik
              </div>
              <p className="mt-2 text-sm text-muted">
                <em>Ik</em> (ਇੱਕ), one: the first unit of value. In Mayan,{" "}
                <em>Ik&apos;</em> is breath, the flow of life.
              </p>
            </div>
            <div className="col-span-2 rounded-2xl border border-dashed border-line p-6 text-sm text-muted">
              Pourik: the overflow of wealth. Take one unit of value and fill
              it until it overflows. That is how we think about growth.{" "}
              <Link href="/about" className="font-semibold text-brand hover:text-brand-dark">
                Our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />
      <MarketplaceStrip />

      {/* Solutions */}
      <section className="container-px mx-auto max-w-6xl py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Solutions</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Everything a marketplace brand needs to grow, with less guesswork.
          </h2>
        </div>
        <div className="mt-14">
          <SolutionRow />
        </div>
        <div className="mt-12 text-center">
          <Link href="/solutions" className="text-sm font-semibold text-brand hover:text-brand-dark">
            Explore our solutions →
          </Link>
        </div>
      </section>

      {/* People */}
      <section className="border-t border-line/80 bg-paper">
        <div className="container-px mx-auto grid max-w-6xl gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow tone="accent">Our people</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              No faces on the billboard. Decades of combined experience behind the work.
            </h2>
            <p className="mt-4 text-muted">
              Pourik is a community of professionals who have built careers at
              global marketplaces, big-tech ad platforms, leading retailers
              and global agency networks. They bring their craft to Pourik out
              of passion for building, and our AI-driven tools help them move
              faster.
            </p>
            <div className="mt-6">
              <PrimaryButton href="/people">How our people work</PrimaryButton>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              ["Marketplace operators", "People who have run catalogs, categories and seller programmes."],
              ["Retail media specialists", "Ad buyers and strategists who have managed large, multi-market budgets."],
              ["Ad-tech builders", "Product and engineering minds from programmatic and bid-tech platforms."],
              ["Brand & agency strategists", "Planners and creatives from global agency networks."],
            ].map(([t, c]) => (
              <li key={t} className="rounded-2xl border border-line bg-background p-5">
                <div className="font-display font-semibold">{t}</div>
                <p className="mt-1 text-sm text-muted">{c}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stories */}
      <section className="container-px mx-auto max-w-6xl py-20">
        <div className="max-w-2xl">
          <Eyebrow>Success stories</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Stories from our people, in their own words.
          </h2>
          <p className="mt-4 text-muted">
            Our experts have each shaped growth for many brands across their
            careers. We are writing those stories up with care, and with the
            permissions they need.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <UpcomingCard title="Case studies" copy="Individual success stories from our experts, published soon." />
          <UpcomingCard title="Client testimonials" copy="Words from the brands we work with, shared with their consent." />
          <UpcomingCard title="Pourik brands" copy="Our own product lines, built on the same playbook." />
        </div>
        <div className="mt-8">
          <Link href="/stories" className="text-sm font-semibold text-brand hover:text-brand-dark">
            Visit the stories page →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line/80">
        <div className="container-px mx-auto max-w-6xl py-20">
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="mt-3 mb-10 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Straight answers.
          </h2>
          <FaqList limit={5} />
          <div className="mt-8">
            <Link href="/faq" className="text-sm font-semibold text-brand hover:text-brand-dark">
              All questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-line/80 bg-paper">
        <div className="container-px mx-auto grid max-w-6xl gap-8 py-16 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Pourik Notes</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Marketplace insights, occasionally, in your inbox.
            </h2>
            <p className="mt-3 text-sm text-muted">
              Practical notes on ads, listings and marketplace changes. No
              spam, and you can unsubscribe at any time.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl py-20">
        <CtaBand
          title="Ready to see where your marketplace spend is leaking?"
          copy="We'll review your listings, ads and inventory and send you a short, prioritised list of what to fix first. Free, with no obligation."
        />
      </section>
    </>
  );
}
