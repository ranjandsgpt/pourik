import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Pourik — People. Ideas. Businesses. Beyond.",
  description:
    "Pourik is a marketplace growth partner for brands on Amazon, Walmart and TikTok Shop, powered by senior experts and AI-driven tools and insights. Based in Bangalore and London.",
  metadataBase: new URL("https://www.pourik.com"),
  openGraph: {
    title: "Pourik — People. Ideas. Businesses. Beyond.",
    description:
      "Pour into what grows. Marketplace growth consulting from senior experts, backed by AI-driven tools and insights.",
    url: "https://www.pourik.com",
    siteName: "Pourik",
    type: "website",
    locale: "en_IN",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/icon`,
  email: site.email,
  description:
    "Marketplace growth partner for brands on Amazon, Walmart and TikTok Shop.",
  address: [
    { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
    { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  ],
  sameAs: site.social.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
