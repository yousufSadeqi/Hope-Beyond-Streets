import { HOME_VALUES } from "@/app/modules/home/data/content";

export const ABOUT_HERO = {
  badge: "Why we exist",
  titleLine1: "A gap between",
  titleHighlight: "crisis",
  titleLine2: "and stability",
  description:
    "In France, undocumented families often face a brutal cycle: emergency aid can cover a night, but administrative barriers, missing school access, and thin referral networks leave many with no clear path off the streets.",
  closing:
    "Hope Beyond Streets was founded in Lyon in 2026 to work on that reintegration gap, with dignity, direct action, and open books.",
};

export const ABOUT_NARRATIVE = {
  title: "Children at the centre",
  body: [
    "Every child deserves more than survival. That principle shapes how we design programmes not as one-off charity, but as a coordinated path from emergency help toward school, shelter, and stability.",
    "Our model combines emergency support, child protection, family guidance, and street outreach. Each pillar answers a real barrier families face; together they aim to close the gap after crisis response ends.",
  ],
  highlight: "No child should grow up on the streets because of paperwork.",
  image: "/about/about-children-dignity-field.jpeg",
  imageAlt: "Field outreach",
};

export const ABOUT_VALUES_EXPANDED = HOME_VALUES.map((value) => {
  const expanded: Record<string, string> = {
    Dignity:
      "Every child deserves respect, never exploitation. We will not film or photograph vulnerable people without consent, and we protect identities in public communications.",
    Protection:
      "Safe spaces, shelter referrals, and immediate care are the foundation. Our Child Protection pillar is designed to connect families to emergency lodging and child-friendly environments.",
    Inclusion:
      "Stability in French society takes more than charity, it takes access. Family Guidance is built to help navigate schooling, administrative steps, and social services.",
    Education:
      "School access is the strongest anti-poverty tool we know. Our education pillar focuses on materials, tutoring, French support, and digital access for children who missed school.",
    Humanity:
      "Compassion in action, meeting families with warmth, patience, and zero judgement, whether on the street, in a safe space, or in a community hall.",
    Transparency:
      "Donors deserve to see where money goes. Gifts map to concrete purchases; we are building a public ledger and keep administration lean.",
  };
  return {
    ...value,
    longDescription: expanded[value.label] ?? value.description,
  };
});

export const ABOUT_OBJECTIVES = [
  "Address root causes of street begging, not only symptoms",
  "Protect children's dignity in every interaction and story we share",
  "Design individualized pathways toward family reintegration",
  "Connect urgent needs to food, shelter referrals, and school access",
  "Help families reach education and administrative guidance before extreme poverty",
  "Build trust through honest storytelling and transparent finances",
] as const;

export const ABOUT_TRANSPARENCY = {
  image: "/about/about-transparency-ledger.png",
  imageAlt: "Donation ledger",
};

export const ABOUT_PARTNERS = {
  eyebrow: "Collaboration",
  title: "Why we need to work together",
  description:
    "Child poverty and street vulnerability are not solved by one team alone. Families need schools, shelters, legal aid, and social services to move in sync, that only happens when organisations collaborate.",
  whyHeading: "Why partnerships matter",
  whyPoints: [
    "Emergency aid saves nights but reintegration needs schools, shelters, and legal pathways working together.",
    "Established NGOs already protect children; we aim to fill the gap after crisis response, not duplicate their work.",
    "Warm referrals between teams help families move faster without falling through administrative cracks.",
    "Institutional partnerships open doors to housing, classrooms, and dignified pathways off the streets.",
  ],
  image: "/about/about-ngo-partnership.png",
  imageAlt: "NGO partners",
  futureHeading: "Organisations we hope to collaborate with",
  futureNote: "Goals, not endorsements.",
  cta: "Propose a collaboration",
};

export const ABOUT_DIFFERENCE = {
  title: "What sets our approach apart",
  subtitle:
    "We aim to complement existing NGOs, not compete. Our focus is the reintegration gap after emergency aid.",
  items: [
    {
      title: "Street Exit pathway",
      description:
        "Individualized plans to connect families toward shelters, schools, legal aid, and healthcare, moving beyond one-off emergency help.",
    },
    {
      title: "School First focus",
      description:
        "Materials, tutoring, French lessons, and digital access, because education is the strongest path out of poverty.",
    },
    {
      title: "Help request channel",
      description:
        "A safe way for families to request guidance on food, shelter contacts, and emergency resources, in development.",
    },
    {
      title: "Sponsor a Child's Month",
      description:
        "Transparent gifts mapped to concrete needs: school kit, meals, transport, and hygiene for one full month.",
    },
  ],
};

export const ABOUT_EXPLORE = {
  title: "Get to know us better",
  links: [
    {
      label: "Read",
      title: "Blog & updates",
      description: "Mission notes, ethics, and honest progress as programmes take shape.",
      href: "/blog",
    },
    {
      label: "Download",
      title: "Campaign posters",
      description: "Printable materials with QR codes for schools, communities, and outreach events.",
      href: "/posters",
    },
    {
      label: "Give",
      title: "Donate time, goods, or funds",
      description: "Money, clothes, teaching, childcare, housing, every form of help moves families forward.",
      href: "/donate",
    },
  ],
};
