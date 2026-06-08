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
  { title: "Starter", price: "$99/mo", features: ["100 leads", "AI qualification", "Email support"] },
  { title: "Professional", price: "$299/mo", features: ["500 leads", "Advanced AI", "Phone support"] },
  { title: "Enterprise", price: "Custom", features: ["Unlimited leads", "White-label", "Dedicated support"] },
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
  description: "Tell us about your team and we’ll reach out with a tailored walkthrough.",
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
