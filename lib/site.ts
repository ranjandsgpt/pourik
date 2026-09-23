// Central site facts. Update these in one place.
export const site = {
  name: "Pourik",
  legalName: "POURIK",
  address: "Bangalore, India",
  locations: ["Bangalore, India", "London, UK"],
  upcomingLocations: ["USA"],
  email: "hello@pourik.com",
  grievanceEmail: "hello@pourik.com",
  url: "https://www.pourik.com",
  lastUpdated: "23 September 2026",
  // Form submissions are delivered by FormSubmit (formsubmit.co) to this
  // endpoint. After activation, FormSubmit issues a random alias you can
  // swap in here to keep the email address out of the page source.
  formEndpoint: "https://formsubmit.co/ajax/hello@pourik.com",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/pourik" },
  ] as { label: string; href: string }[],
};

// Marketplaces Pourik offers services on today. Only list ones actually served.
export const marketplaces = ["Amazon", "Walmart", "TikTok Shop"];

// Marketplaces planned next. Always shown as "coming soon".
export const upcomingMarketplaces = ["Shopee", "Lazada", "Tokopedia"];

// Every figure here must stay true. They describe the individual career
// experience of people in the Pourik network, not company results.
export const stats = [
  {
    value: "100+",
    label: "brands our people have worked on across their careers",
  },
  {
    value: "10+ yrs",
    label: "typical hands-on experience of each Pourik expert",
  },
  {
    value: `${marketplaces.length}`,
    label: "marketplaces we work on today, with Southeast Asia coming next",
  },
];

export const statsFootnote =
  "Figures reflect the combined individual career experience of experts in the Pourik network. They are not results delivered by Pourik as a company.";

export const faqs = [
  {
    q: "Which marketplaces do you work on?",
    a: `Today we work on ${marketplaces.slice(0, -1).join(", ")} and ${marketplaces.at(-1)}. ${upcomingMarketplaces.join(", ")} and other Southeast Asian marketplaces are coming soon. If you sell somewhere else, ask us. We will tell you honestly whether it is a fit.`,
  },
  {
    q: "Who will actually work on my account?",
    a: "A small team matched to your category and marketplace, drawn from our network of experts with 10+ years of hands-on experience each. Their work is supported by AI-driven tools for search-term, pricing and performance analysis.",
  },
  {
    q: "Is the audit really free?",
    a: "Yes. The audit costs nothing and you are under no obligation to hire us afterwards. We take on a limited number of audits at a time, so we may decline requests that fall outside our scope.",
  },
  {
    q: "What does the audit cover?",
    a: "Listing quality and conversion gaps, keyword and search visibility, competitor positioning, advertising efficiency, and inventory or pricing risks. You get a short, prioritised list of what to fix first.",
  },
  {
    q: "Do you guarantee results?",
    a: "No. Marketplace performance depends on many things outside anyone's control, including platform policy, competition, demand and your own pricing and stock. We do not promise specific sales, rankings or returns. We promise clear reasoning and honest reporting.",
  },
  {
    q: "Will you need my Seller Central or seller account password?",
    a: "Never. If we work together, we ask for limited user access through the marketplace's own permission tools, which you control and can remove at any time.",
  },
  {
    q: "Do you work with small brands?",
    a: "Yes. We work with brands getting ready to launch as well as established sellers. The scope and pricing depend on your stage and what you need.",
  },
  {
    q: "Where are you based?",
    a: `We work from ${site.locations.join(" and ")}, with the USA coming soon. Our experts work remotely across time zones.`,
  },
  {
    q: "Are you affiliated with Amazon, Walmart or TikTok?",
    a: "No. Pourik is an independent business. We are not affiliated with, endorsed by or sponsored by any marketplace we mention.",
  },
];
