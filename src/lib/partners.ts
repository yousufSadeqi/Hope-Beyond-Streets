/**
 * Organisations we hope to collaborate with, aspirations, not active dialogue.
 * Logo paths under public/logos/
 */
export type PartnerStatus = "future-goal";

export interface PartnerOrg {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  status: PartnerStatus;
}

/** Organisations we want to collaborate with, not in discussion yet */
export const FUTURE_COLLABORATION_TARGETS: PartnerOrg[] = [
  {
    id: "unicef",
    name: "UNICEF France",
    logo: "/logos/unicef.jpeg",
    description:
      "We aim to align field programmes with national child-protection standards and advocacy for vulnerable minors.",
    website: "https://www.unicef.fr",
    status: "future-goal",
  },
  {
    id: "eu",
    name: "European Union",
    logo: "/logos/european-union.jpg",
    description:
      "We hope to access European solidarity funds and cross-border best practices for family reintegration.",
    website: "https://european-union.europa.eu",
    status: "future-goal",
  },
  {
    id: "france-government",
    name: "République française",
    logo: "/logos/france-government.jpg",
    description:
      "We aim to work with public institutions on schooling, social services, and dignified pathways off the streets.",
    website: "https://www.gouvernement.fr",
    status: "future-goal",
  },
  {
    id: "utopia-56",
    name: "Utopia 56",
    logo: "/logos/utopia-56.png",
    description:
      "We want to coordinate with frontline migrant-support networks in Lyon to reach families faster without duplicating effort.",
    website: "https://www.utopia56.com",
    status: "future-goal",
  },
  {
    id: "eva",
    name: "EVA – Enfants Venus d'Ailleurs",
    logo: "/logos/eva.png",
    description:
      "We aim to share pathways on legal orientation and protection for children who arrived without stable status.",
    website: "https://www.eva-asso.org",
    status: "future-goal",
  },
  {
    id: "secours-populaire",
    name: "Secours Populaire Français",
    logo: "/logos/secours-populaire.webp",
    description:
      "We hope to build joint emergency supply chains and community outreach so no family waits alone between referrals.",
    website: "https://www.secours-populaire.fr",
    status: "future-goal",
  },
  {
    id: "ville-de-lyon",
    name: "Ville de Lyon",
    logo: "/logos/ville-de-lyon.jpg",
    description:
      "We aim to open channels with municipal social services, schools, and local safe spaces where families live.",
    website: "https://www.lyon.fr",
    status: "future-goal",
  },
];
