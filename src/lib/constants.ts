/** Full blog guide PDF (source: docs/Blog anglais.pdf) */
export const BLOG_GUIDE_PDF = {
  href: "/docs/blog-anglais.pdf",
  label: "Learn more",
  title: "Blog guide (PDF)",
  description:
    "In-depth guide on child poverty, education, rights, and how we help families in Lyon.",
};

export const BRAND = {
  name: "Hope Beyond Streets",
  logo: "/websiteLogos/MainLogo.png",
  logoAlt: "Hope logo",
  tagline: "Donating is loving, caring and helping",
  mission:
    "Meals, school access, and family guidance for undocumented children and families in Lyon.",
  location: "Lyon, France",
  domain: "hopebeyondstreets.org",
  contactEmail: "contact@hopebeyondstreets.org",
  partnerEmail: "partners@hopebeyondstreets.org",
  social: {
    instagram: "https://www.instagram.com/hope.beyond.streets?igsh=ZTc3cjFwamdzbHpr&utm_source=qr",
    youtube: "https://www.youtube.com/@HopeBeyondtheStreets",
  },
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Donate", href: "/donate" },
];

export interface FooterLink {
  name: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Organization",
    links: [
      { name: "About Our Mission", href: "/about" },
      { name: "Contact Us", href: `mailto:${BRAND.contactEmail}`, external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog & Updates",
        href: "/blog",
        description: "Field stories and impact reports from Lyon",
      },
      {
        name: BLOG_GUIDE_PDF.label,
        href: BLOG_GUIDE_PDF.href,
        description: BLOG_GUIDE_PDF.description,
        external: true,
      },
      {
        name: "Campaign Posters",
        href: "/posters",
        description: "Printable materials for schools and communities",
      },
      {
        name: "Transparency Ledger",
        href: "/about#transparency",
        description: "Where every euro goes",
      },
    ],
  },
  {
    title: "Get Involved",
    links: [{ name: "Make a Donation", href: "/donate" }],
  },
];

export interface DonationTier {
  amount: number;
  label: string;
  impact: string;
}

export const DONATION_TIERS: DonationTier[] = [
  {
    amount: 15,
    label: "Essential Meals",
    impact: "Provides 3 nutritious, warm meals for a child through community kitchen programmes.",
  },
  {
    amount: 35,
    label: "School First Kit",
    impact: "School materials, notebooks, and French learning resources for one child.",
  },
  {
    amount: 75,
    label: "Emergency Support Kit",
    impact: "Food, hygiene essentials, and winter items for a family reached through street outreach.",
  },
  {
    amount: 150,
    label: "Sponsor a Month",
    impact: "One full month: school kit, meals, transport, and hygiene for a child in our programme.",
  },
];
