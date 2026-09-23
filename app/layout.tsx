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
  title: "Pourik — People. Ideas. Businesses. Beyond.",
  description:
    "Pourik is a marketplace growth partner for brands on Amazon, Walmart, TikTok Shop and Southeast Asia marketplaces, powered by senior experts and AI-driven tools and insights.",
  metadataBase: new URL("https://pourik.com"),
  openGraph: {
    title: "Pourik — People. Ideas. Businesses. Beyond.",
    description:
      "Pour into what grows. Marketplace growth consulting from senior experts, backed by AI-driven tools and insights.",
    url: "https://pourik.com",
    siteName: "Pourik",
    type: "website",
    locale: "en_IN",
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
