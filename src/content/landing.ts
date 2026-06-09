export const navItems = [
  { label: "Pricing", href: "#pricing" },
  { label: "Trust", href: "#trust" },
  { label: "Request Demo", href: "#demo" },
];

export const heroContent = {
  eyebrow: "AI Sales Agent for Real Estate",
  title: "Oly helps developers qualify leads, accelerate deals, and keep sales moving.",
  description:
    "Build an intelligent agent that engages prospects instantly, scores every lead precisely, and frees your team to focus on closing bigger projects.",
  primaryCta: { label: "Request Demo", href: "#demo" },
  secondaryCta: { label: "Trusted By", href: "#trust" },
};

export const pricingPlans = [
  {
    title: "Custom",
    price: "Custom",
    features: [
      "Up 24/7",
      "Multichannel",
      "Bilingual Arabic & English",
      "Live data sync",
      "Lead qualification",
      "AI audit for conversations",
      "Full conversation history",
      "Analytics dashboard",
      "Custom workflows",
    ],
  },
];

export const trustedCompanies = [
  { name: "RealEstate Corp", leads: "500+ leads qualified", logo: "🏢" },
  { name: "Property Masters", leads: "1,200+ leads qualified", logo: "🏠" },
  { name: "Urban Developers", leads: "800+ leads qualified", logo: "🌆" },
  { name: "Home Builders Inc", leads: "950+ leads qualified", logo: "🔨" },
  { name: "Estate Solutions", leads: "600+ leads qualified", logo: "🏡" },
];

export const demoSection = {
  eyebrow: "Request a Demo",
  title: "Stay first in line for Oly's demo.",
  description: "Tell us about your team and we'll reach out with a tailored walkthrough.",
};

export const whyOlySection = {
  headline: "Managing sales inquiries is harder than it should be",
  paragraph:
    "Real estate sales teams receive a high volume of inquiries every day — across multiple channels, at all hours. Without the right tools, responses are delayed, follow-ups are missed, and sales teams spend most of their time on leads that were never serious. Opportunities are lost not because of lack of interest, but because of lack of capacity.",
  problems: [
    {
      title: "Slow responses cost you serious buyers",
      description:
        "When a potential buyer does not receive a prompt reply, they move on. Most teams cannot respond fast enough across all channels, especially outside business hours.",
    },
    {
      title: "Sales teams spend time on buyers who are not ready",
      description:
        "Without a way to screen inquiries upfront, your team gives equal attention to every lead — including those who are months away from making a decision or not serious at all.",
    },
    {
      title: "Buyers receive different answers from different agents",
      description:
        "When multiple agents handle the same project, clients are often given conflicting details on pricing, availability, or specifications — damaging trust before a relationship is formed.",
    },
    {
      title: "What buyers say is never captured or used",
      description:
        "The questions buyers ask and the concerns they raise are valuable signals. Without a system to record and analyse these conversations, that insight is lost entirely.",
    },
  ],
};

export const whatOlyDoesSection = {
  headline: "Everything your sales team needs, running automatically.",
  paragraph: "A set of core capabilities designed to keep your sales operation running without gaps",
  features: [
    {
      title: "Available 24/7",
      description:
        "Oly responds to every inquiry at any hour — so serious buyers always get an immediate reply, even outside business hours.",
    },
    {
      title: "Lead qualification",
      description:
        "Oly asks the right questions to assess each buyer's intent and readiness, so your team only follows up with serious prospects.",
    },
    {
      title: "Bilingual Arabic and English",
      description: "Serve customers in their preferred language, expanding your market reach.",
    },
    {
      title: "Multichannel",
      description: "Handle inquiries from email, chat, WhatsApp, and more from a single platform.",
    },
    {
      title: "Live data sync",
      description: "Always access the latest listings, prices, and availability information.",
    },
    {
      title: "Conversation history",
      description: "Every conversation is saved and searchable. Your team always has full context before picking up the phone.",
    },
    {
      title: "Custom workflows",
      description: "Every step — from the first message to handing a lead to your team — is built around how your sales process actually works.",
    },
    {
      title: "AI audit for conversations",
      description: "Automatically review conversations for quality, compliance, and insights.",
    },
    {
      title: "Analytics dashboard",
      description: "Track performance, conversion rates, and optimize your sales process with real-time data.",
    },
  ],
};

export const demoFormFields = [
  { name: "name", label: "Name", type: "text" },
  { name: "occupation", label: "Occupation", type: "text" },
  { name: "companyName", label: "Company name", type: "text" },
  { name: "mobileNumber", label: "Mobile number", type: "tel" },
  { name: "emailAddress", label: "Email Address", type: "email" },
] as const;

export const demoFormSubmitLabel = "Request Demo";

export const footerContent = {
  companyName: "Oly",
  description:
    "AI sales agent designed for real estate developers who want smarter lead qualification and faster deal momentum.",
  socialLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  addressLines: ["123 Oly Avenue", "Dubai, UAE", "hello@oly.ai"],
};
