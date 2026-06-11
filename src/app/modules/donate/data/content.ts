import { BRAND } from "@/lib/constants";

export const DONATE_HERO = {
  badge: "Get involved",
  eyebrow: "One platform for every way to help",
  title: "Get started",
  highlight: "your way",
  description:
    "Financial gifts, supplies, time, or housing, choose how you show up for families in Lyon.",
  image: "/donate/hero-give-in-every-way.jpg",
  imageAlt: "Ways to help",
};

export const DONATE_MONEY = {
  title: "Financial gift",
  description:
    "Sponsor a child's month or give a one-time gift. Every euro is mapped to a concrete field need.",
  cta: "Donate now",
  image: "/donate/financial-gift-impact.png",
  imageAlt: "Donation box",
};

export const DONATE_CONTRIBUTION_NAV = [
  { id: "give-money", label: "Financial gift" },
  { id: "give-items", label: "Clothes & supplies" },
  { id: "give-time", label: "Time & skills" },
  { id: "give-housing", label: "Housing & shelter" },
] as const;

export type DonateContributionSectionId = (typeof DONATE_CONTRIBUTION_NAV)[number]["id"];

export const DONATE_IN_KIND = {
  title: "Donate clothes & school supplies",
  description:
    "In-kind donations go directly to families reached through our street outreach and School First programmes. We accept new or gently used items in good condition.",
  items: [
    {
      id: "clothing",
      title: "Clothing & shoes",
      description: "Warm coats, shoes, school uniforms, and age-appropriate clothing for children and teens.",
      examples: ["Winter jackets", "Shoes & trainers", "School uniforms", "Baby clothing"],
      image: "/donate/in-kind-clothing-shoes.jpg",
      imageAlt: "Donated clothes",
    },
    {
      id: "school",
      title: "School supplies",
      description: "Materials that help children return to or stay in school through our School First campaign.",
      examples: ["Backpacks", "Notebooks & pens", "Calculators", "French workbooks"],
      image: "/donate/in-kind-school-supplies.jpg",
      imageAlt: "School supplies",
    },
  ],
  ctaLabel: "Send your donation pack",
  ctaEmail: `mailto:${BRAND.contactEmail}?subject=In-kind%20donation%20inquiry`,
  sendDialog: {
    title: "How to send your pack",
    description: "Bring or post clothes and school supplies to our collection point in Lyon.",
    addressLine: "3 Avenue Albert Einstein",
    addressCity: "69100 Lyon",
    largePackageNote:
      "If your package is large or you need help with delivery, email us first and we will arrange the best option with you.",
    emailLabel: "Email us",
  },
};

export const DONATE_VOLUNTEER = {
  title: "Give your time, teach, mentor & care",
  description:
    "Volunteers are the backbone of our field work. Whether you have two hours a week or can commit regularly, your time changes outcomes for children and families.",
  image: "/donate/volunteer-teaching-mentoring.avif",
  imageAlt: "Volunteer tutor",
  items: [
    {
      id: "teaching",
      title: "Teach & tutor children",
      description: "French lessons, homework help, literacy support, and exam preparation for children who missed school.",
      commitment: "2–4 hours per week",
    },
    {
      id: "childcare",
      title: "Childcare & safe spaces",
      description: "Supervise child-friendly sessions, accompany children to appointments, or support activity workshops.",
      commitment: "Flexible or weekly",
    },
    {
      id: "outreach",
      title: "Street outreach volunteer",
      description: "Join field teams distributing food kits, hygiene supplies, and connecting families to urgent services.",
      commitment: "Evening & weekend shifts",
    },
    {
      id: "mentoring",
      title: "Family mentoring & guidance",
      description: "Help parents navigate administrative processes, accompany them to appointments, or provide translation support.",
      commitment: "Ongoing pairing",
    },
    {
      id: "skills",
      title: "Professional skills",
      description: "Lawyers, social workers, teachers, healthcare workers, and translators, your expertise accelerates reintegration.",
      commitment: "Project-based or pro bono",
    },
    {
      id: "digital",
      title: "Communications & digital",
      description: "Support social media storytelling, poster design, website content, or our anonymous help platform.",
      commitment: "Remote-friendly",
    },
  ],
  ctaEmail: `mailto:${BRAND.contactEmail}?subject=Volunteer%20application`,
  ctaLabel: "Apply to volunteer",
};

export const DONATE_HOUSING = {
  title: "Offer housing or shelter connections",
  description:
    "Stable housing is one of the biggest barriers for undocumented families. If you can host, refer a property, or connect us with shelter partners, you help break the cycle of street vulnerability.",
  image: "/donate/housing-safe-home-keys.png",
  imageAlt: "House keys",
  items: [
    {
      id: "host",
      title: "Host a family or child",
      description: "Temporary hosting through vetted programmes, spare rooms, short-term stays, or emergency placements coordinated with our team.",
    },
    {
      id: "property",
      title: "Property & rental connections",
      description: "Landlords, property managers, or hosts willing to offer affordable or solidarity-based accommodation in Lyon and surrounding areas.",
    },
    {
      id: "shelter",
      title: "Shelter & NGO partnerships",
      description: "Connect us with shelters, hotels, or organisations that can provide emergency lodging for families in crisis.",
    },
    {
      id: "corporate",
      title: "Corporate housing support",
      description: "Companies with unused accommodation, relocation services, or CSR budgets for housing assistance.",
    },
  ],
  ctaEmail: `mailto:${BRAND.partnerEmail}?subject=Housing%20or%20shelter%20offer`,
  ctaLabel: "Offer housing support",
};

export const DONATE_IMPACT_BREAKDOWN = [
  {
    label: "School kit & materials",
    description: "Notebooks, supplies, and French learning resources through our School First campaign.",
  },
  {
    label: "Nutritious meals",
    description: "Warm meals sourced through local community kitchen partners.",
  },
  {
    label: "Transport & access",
    description: "Transit support so children can reach school and safe spaces.",
  },
  {
    label: "Hygiene & winter essentials",
    description: "Hygiene kits, clothing, and emergency items distributed through street outreach.",
  },
] as const;
