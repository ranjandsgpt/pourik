import type { MetadataRoute } from "next";

const paths = [
  "",
  "/services",
  "/people",
  "/brands",
  "/about",
  "/audit",
  "/stories",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `https://www.pourik.com${p}` }));
}
