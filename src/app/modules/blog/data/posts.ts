import type { BlogPost, BlogTopicOption } from "@/app/modules/blog/types";

export const BLOG_TOPICS: BlogTopicOption[] = [
  { id: "all", label: "All topics" },
  { id: "child-protection", label: "Child protection" },
  { id: "education", label: "Education & inclusion" },
  { id: "family-guidance", label: "Family guidance" },
];

export const BLOG_SECTION_LABELS: Record<Exclude<BlogPost["topic"], never>, string> = {
  "child-protection": "Child protection",
  education: "Education & inclusion",
  "family-guidance": "Family guidance",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gap-between-emergency-aid-and-reintegration",
    topic: "child-protection",
    category: "Child protection",
    title:
      "The gap between emergency aid and long-term reintegration and how we fill it",
    excerpt:
      "UNICEF France, Utopia 56, EVA, and TIMMY already protect migrant children. We focus on what comes next: dignity, family reintegration, and direct field action before families fall into extreme poverty.",
    featured: true,
    image: "/blog/featured-undocumented-family-france.png",
    imageAlt:
      "Wide documentary photo of an undocumented family walking together in a French city at dusk, dignified, not exploitative; warm tones, no visible faces of minors",
    body: [
      "Most people imagine help as one moment: a warm meal, a shelter bed, a bag of essentials. That moment matters. But for many undocumented families in France, the hardest part starts the next day, when there is still no school place, no clear admin path, and no stable roof. That is the gap we were founded to work on in Lyon.",
      "Teams like UNICEF France, Utopia 56, EVA, and TIMMY already do critical crisis work. We respect that work deeply. Our role is to stay with families after the emergency, so they are not pushed back into survival mode again and again.",
      "In practice, we work across four connected pillars. Emergency Support covers urgent basics quickly. Child Protection helps children return to learning through tutoring, French support, safe study spaces, and digital access. Family Guidance helps parents navigate paperwork, referrals, and services with less fear and confusion. Street Outreach meets families where they are and keeps follow-up going after first contact.",
      "The Street Exit Program turns that approach into a concrete path: not one-off aid, but individualized next steps toward shelter, school, legal aid, and healthcare. Alongside it, School First focuses on what changes a child's trajectory long term: supplies, tutoring, language support, and continuity in education.",
      "We are also building an anonymous help request channel for families who are afraid to ask openly. And through Sponsor a Child's Month, each gift is tied to clear needs, meals, school materials, transport, and hygiene, so support is practical and transparent.",
      "None of this works in isolation. Reintegration only happens when schools, shelters, legal actors, and field teams move together. That is why we prioritize warm referrals and collaboration over competition.",
      "If you want to help close this gap, you can donate, send clothes and school supplies, volunteer your time, or share housing connections. Each action gives a family more than relief for tonight, it gives them a real step toward stability.",
    ],
  },
  {
    slug: "street-exit-program",
    topic: "child-protection",
    category: "Child protection",
    title: "Inside our Street Exit Program: individualized plans beyond street begging",
    excerpt:
      "Instead of only distributing aid, we build tailored pathways, shelters, schools, legal help, healthcare, so families can leave street begging permanently.",
    featured: true,
    body: [
      "Street begging is rarely a choice. For many undocumented families, it becomes a last option when paperwork, housing, and school access are blocked at the same time. Our Street Exit Program starts from that reality, not from judgment.",
      "Instead of repeating one-off distributions, we build individualized plans with each family. The goal is practical: connect people to shelter options, school pathways, legal orientation, and healthcare contacts that can actually move their situation forward.",
      "Each plan is built step by step with field volunteers and guidance support. Some families need urgent basics first. Others need help enrolling children in school or preparing admin documents. We stay with them through those next steps.",
      "This is how we try to close the gap between emergency aid and long-term stability. Not by promising instant change, but by giving families a clear route off the streets and support to keep moving.",
      "If you want to help, you can volunteer in outreach, mentoring, or family guidance. Your time can turn one difficult night into a real next step.",
    ],
  },
  {
    slug: "school-first-campaign",
    topic: "education",
    category: "Education & inclusion",
    title: "School First: why education is the strongest anti-poverty tool we have",
    excerpt:
      "School materials, tutoring, French lessons, and digital access, our campaign focuses on getting undocumented children back into classrooms, not just surviving on the streets.",
    featured: true,
    image: "/blog/school-first-backpack-supplies.png",
    imageAlt:
      "Close-up of a child's hands opening a new school backpack filled with notebooks, pencils, and a French workbook, bright, hopeful, classroom-ready",
    body: [
      "A child who misses school does not just miss lessons. They miss routine, confidence, and the sense that their future is still open. That is why School First is one of our core programmes.",
      "We focus on what children need to return to class with dignity: backpacks, notebooks, pens, French workbooks, and basic digital access when possible. Small items, but they change how a child walks into school.",
      "Beyond materials, we support tutoring, homework help, and French language learning for children who fell behind. The aim is not pressure. It is continuity, so learning can restart without shame.",
      "Education is the strongest anti-poverty tool we know. When a child stays in school, the whole family gains hope and direction. That is the long-term impact we are trying to protect.",
      "You can support School First through donations, school supply packs, or volunteer tutoring in Lyon.",
    ],
  },
  {
    slug: "anonymous-help-platform",
    topic: "family-guidance",
    category: "Family guidance",
    title: "Building an anonymous help platform for families who fear exposure",
    excerpt:
      "Undocumented families often avoid asking for help. We are designing a safe digital entry point to locate food, shelter contacts, and administrative guidance without requiring identity disclosure.",
    featured: true,
    body: [
      "Many undocumented families avoid asking for help because they fear exposure. One wrong contact can feel like risking everything, so people stay silent even when children need food, shelter, or school support.",
      "We are building an anonymous help request channel so families can find practical guidance without disclosing identity upfront. The first step should feel safe, not threatening.",
      "The platform will point people toward food resources, shelter contacts, emergency numbers, and administrative guidance in a clear, simple format. No complicated forms, no public labels.",
      "This tool is still in development, but the principle is fixed: privacy first, dignity first, action second. Families should be able to ask for help tonight without fearing consequences tomorrow.",
      "If you have digital skills, you can help us build and test this channel so more families in Lyon can reach support safely.",
    ],
  },
  {
    slug: "understanding-child-poverty-france",
    topic: "child-protection",
    category: "Child protection",
    title: "Understanding child poverty among undocumented families in France",
    excerpt:
      "Many families cannot access stable housing, healthcare, or schooling. Administrative barriers push some toward street begging, a cycle that harms children psychologically and socially.",
    image: "/blog/empty-classroom-winter-france.png",
    imageAlt:
      "Empty French classroom with winter light through windows and a child's coat on a chair, quiet, symbolic image about missed school days",
    body: [
      "Child poverty among undocumented families in France is often hidden. From the outside, a family may look like they are managing. Inside, they may be juggling unstable housing, missed healthcare, and children out of school.",
      "Administrative barriers are a major driver. Without stable status pathways, families can lose access to services that other children rely on every day. Over time, that pressure pushes some toward street begging.",
      "Children feel this deeply. Missing school affects confidence, friendships, and mental health. Living with constant uncertainty shapes how they see themselves and their future.",
      "Our work starts by meeting families before collapse, with food, guidance, school support, and outreach that respects dignity. We are not here to label people. We are here to reduce harm and open pathways.",
      "Understanding this context helps donors and volunteers support with empathy, not assumptions.",
    ],
  },
  {
    slug: "legal-orientation-families",
    topic: "family-guidance",
    category: "Family guidance",
    title: "Legal orientation without fear: connecting families to the right associations",
    excerpt:
      "We do not replace lawyers, we guide families toward shelters, migrant support groups, food banks, and legal aid so they can navigate administrative barriers with clarity.",
    body: [
      "Legal systems are hard for anyone. For undocumented families, they can feel impossible. Many parents do not know which association to contact first, or fear that asking will make things worse.",
      "We do not replace lawyers. We guide families toward the right doors: shelters, migrant support groups, food banks, legal aid contacts, and social services that match their situation.",
      "Our Family Guidance volunteers help with practical steps: preparing documents, booking appointments, translating basic information, and staying present when families feel overwhelmed.",
      "Clear orientation reduces panic and prevents families from giving up after one failed attempt. One warm referral can save weeks of confusion.",
      "If you speak multiple languages or know local services in Lyon, your guidance can help a family move from fear to action.",
    ],
  },
  {
    slug: "partnering-not-competing",
    topic: "child-protection",
    category: "Child protection",
    title: "Why we partner with existing NGOs instead of competing with them",
    excerpt:
      "Collaboration with shelters, schools, migrant support groups, and municipalities makes our impact stronger. Here is how we fit into France's existing protection ecosystem.",
    body: [
      "France already has NGOs doing essential protection work. Shelters respond at night, field teams support migrant children, and local actors carry huge responsibility every day.",
      "Hope Beyond Streets was built to complement that ecosystem, not compete with it. We focus on what often comes after the first emergency: reintegration, schooling, and family stability.",
      "When organisations coordinate, families move faster. When they do not, people fall through administrative cracks and return to survival mode.",
      "We prioritize warm referrals with shelters, schools, migrant support groups, and municipalities so each family gets connected support instead of isolated help.",
      "Partnership is not a slogan for us. It is how children actually get off the streets and stay off.",
    ],
  },
  {
    slug: "reclaiming-a-future-beyond-survival",
    topic: "child-protection",
    category: "Child protection",
    title: "Helping children reclaim a future beyond survival",
    excerpt:
      "Our message is not 'we help poor children.' It is that no child should grow up on the streets because of administrative barriers, and every family deserves a path toward stability and inclusion.",
    image: "/blog/child-looking-toward-future.jpeg",
    imageAlt:
      "Symbolic rear-view photo of a child walking toward a sunlit school gate with a parent, hopeful, forward-looking, faces not shown, soft golden hour light",
    body: [
      "Survival is not a childhood. Yet too many children spend their days on streets because families are blocked by paperwork, housing instability, and lack of support.",
      "Our message is simple and firm: no child should grow up begging because of administrative barriers. Every family deserves a path toward stability and inclusion.",
      "That means more than meals and blankets. It means school continuity, safe spaces, legal orientation, and follow-up that does not disappear after one contact.",
      "When children can imagine a future beyond tonight, families regain strength to keep going. That is the change we work for in Lyon every week.",
      "You can be part of that change through giving, volunteering, or sharing practical connections that help families move forward.",
    ],
  },
  {
    slug: "hope-beyond-streets-mission",
    topic: "child-protection",
    category: "Child protection",
    title: "Donating is loving, caring, and helping",
    excerpt:
      "Our mission is to fight child poverty and street begging among undocumented families, through emergency support, educational access, legal orientation, and pathways toward dignity.",
    body: [
      "Hope Beyond Streets began with one conviction: donating is loving, caring, and helping. Not performative charity, but practical presence for families who are often left behind.",
      "We fight child poverty and street begging among undocumented families through emergency support, education access, family guidance, and pathways toward dignity.",
      "Our work in Lyon combines four pillars: urgent essentials, child protection, family guidance, and street outreach. Each pillar answers a real barrier families face after crisis aid ends.",
      "We are young, honest, and field-focused. We do not invent impact numbers. We show what we do, what we need, and how people can help today.",
      "If this mission speaks to you, join us with a donation, volunteer hours, in-kind support, or housing connections. Every contribution helps a family move from survival toward stability.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getPostBody(post: BlogPost): string[] {
  return post.body ?? [post.excerpt];
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.featured);
}

export function getPostsByTopic(topic: BlogPost["topic"]): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.topic === topic);
}

export function getSectionTopics(): BlogPost["topic"][] {
  return [
    "child-protection",
    "education",
    "family-guidance",
  ];
}
