import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Pourik — Marketplace Growth & Branded Products",
  description:
    "Pourik grows Amazon, Walmart, and marketplace sellers through advertising, listing, and catalog strategy — and builds its own branded products on the same channels, so our advice is proven, not theoretical.",
  metadataBase: new URL("https://pourik.com"),
  openGraph: {
    title: "Pourik — Marketplace Growth & Branded Products",
    description:
      "Marketplace growth consulting, plus a portfolio of Pourik-owned brands sold on the same channels we optimize.",
    url: "https://pourik.com",
    siteName: "Pourik",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
