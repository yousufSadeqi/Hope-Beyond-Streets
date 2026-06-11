export const HOME_HERO = {
  eyebrow: "Humanitarian platform",
  locationLabel: "Lyon, France",
  title: "Donating is loving,",
  highlight: "caring and helping",
  subhead:
    "Meals, school access, and family guidance for undocumented children and families in Lyon.",
  image: "/home/hero-lyon-tram-station.png",
  imageMobile: "/home/hero-lyon-tram-station-mobile.png",
  imageAlt: "Lyon tram",
  imageMobileAlt: "Tram hero",
};

export const HOME_DONATION = {
  title: "Donate now",
  subtitle: "Choose your gift, meals, school kit, transport & hygiene",
  cta: "Donate now",
  checkoutNote: "Secure checkout powered by Stripe. Card details are never stored on our site.",
};

export const HOME_VALUES = [
  { label: "Dignity", description: "Every child deserves respect, never exploitation." },
  { label: "Protection", description: "Safe spaces, shelter, and immediate care." },
  { label: "Inclusion", description: "Pathways toward stability in French society." },
  { label: "Education", description: "School access as the strongest anti-poverty tool." },
  { label: "Humanity", description: "Direct field action with compassion." },
  { label: "Transparency", description: "Donors see exactly where every euro goes." },
] as const;

export const HOME_PROBLEM = {
  eyebrow: "The challenge",
  title: "Built for families who can't wait",
  lead: "Help in context before paperwork becomes poverty.",
  body:
    "Undocumented children in France often miss housing, healthcare, and school. Emergency aid saves nights but rarely builds a path forward. We exist to close that gap with direct field action in Lyon.",
  image: "/home/problem-street-vulnerability-france.png",
  imageAlt: "Empty bench",
};

export const HOME_PROGRAMS = {
  eyebrow: "One platform for every need",
  title: "Get more done with donors and volunteers working side by side",
  subtitle: "Scale impact across four programmes from tonight's emergency to long-term dignity.",
  items: [
    {
      id: "emergency",
      step: "01",
      title: "Emergency Support",
      tagline: "Execution that doesn't wait until morning",
      description:
        "When a family has nothing left tonight, volunteers deliver food, hygiene essentials, warm clothing, and school materials, often within 48 hours of an urgent referral.",
      image: "/home/program-emergency-supplies.png",
      imageAlt: "Food kits",
    },
    {
      id: "protection",
      step: "02",
      title: "Child Protection",
      tagline: "School access running with care",
      description:
        "Tutoring, French language support, safe study spaces, and digital access, so children who missed school can catch up without shame.",
      image: "/home/program-child-education.jpeg",
      imageAlt: "Child tutoring",
    },
    {
      id: "guidance",
      step: "03",
      title: "Family Guidance",
      tagline: "Navigate the system, together",
      description:
        "Legal orientation, administrative steps, shelter referrals, and introductions to partners who can actually move a family's case forward.",
      image: "/home/program-family-guidance1.png",
      imageAlt: "Family guidance",
    },
    {
      id: "outreach",
      step: "04",
      title: "Street Outreach",
      tagline: "Meet families where they are",
      description:
        "Evening teams in Lyon identify urgent cases, distribute essentials on the spot, and build follow-up plans that don't end when the night does.",
      image: "/home/program-street-outreach.png",
      imageAlt: "Street outreach",
    },
  ],
} as const;

export const HOME_PROOF = {
  eyebrow: "Gain full transparency",
  title: "Where we are today",
  subtitle:
    "We're new, so we show facts and commitments, not impact numbers we haven't earned yet.",
  items: [
    {
      value: "2026",
      label: "Founded",
      detail: "Based in Lyon, France",
    },
    {
      value: "4",
      label: "Programme pillars",
      detail: "Emergency support through street outreach",
    },  
    {
      value: "Soon",
      label: "Public impact data",
      detail: "Published as field programmes produce verifiable results",
    },
  ],
} as const;

export const HOME_PARTNERS = {
  eyebrow: "Collaboration",
  title: "Building bridges for faster progress",
  lead: "One confirmed partner. A clear map of where we want to grow next.",
  confirmedHeading: "Confirmed partner",
  confirmedStatusLabel: "Active partnership",
  futureHeading: "Where we hope to collaborate",
  futureStatusLabel: "Future goal",
  futureNote: "Goals, not endorsements.",
  cta: "Propose a collaboration",
} as const;

export const HOME_BLOG_TEASER = {
  eyebrow: "Learn",
  title: "Notes from the field",
  description:
    "Stories, ethics, and honest updates as we grow, not polished annual reports.",
  linkLabel: "Read the blog",
  learnMoreLabel: "Learn more",
} as const;

/** Used on the About page, not shown on the home landing page */
export const HOME_DIFFERENCE = {
  title: "What makes us different",
  subtitle:
    "We aim to complement existing NGOs, not compete. Our focus is the reintegration gap after emergency aid.",
  items: [
    {
      title: "Street Exit Program",
      description:
        "Individualized plans connecting families to shelters, schools, legal aid, and healthcare, so they can leave street begging permanently.",
    },
    {
      title: "School First Campaign",
      description:
        "School materials, tutoring, French lessons, and digital access, because education is the strongest path out of poverty.",
    },
    {
      title: "Help request channel",
      description:
        "Families will be able to request guidance without fear, a safe way to find food, shelter contacts, and emergency resources. In development.",
    },
    {
      title: "Sponsor a Child's Month",
      description:
        "Transparent donations mapped to concrete impact: school kit, meals, transport, and hygiene for one full month.",
    },
  ],
  image: "/home/difference-community-hope.png",
  imageAlt: "Community event",
};

export const HOME_CTA = {
  eyebrow: "Built for people who care",
  title: "Consider yourself limitless",
  description:
    "One platform in Lyon for giving, volunteering, and showing up, get started today.",
  primaryCta: "Get Started",
  secondaryCta: "Contact us",
};
