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
    imageAlt: "Family walking",
    body: [
      "Most people imagine help as one moment: a warm meal, a shelter bed, a bag of essentials. That moment matters. But for many undocumented families in France, the hardest part starts the next day, when there is still no school place, no clear admin path, and no stable roof. That is the gap we were founded to work on in Lyon.",
      "Our vision is simple: every child deserves safety, education, and hope for the future. Poverty should never prevent a child from going to school, accessing basic needs, or feeling included in society. Through education, social support, and community solidarity, we hope to help families move from survival to stability.",
      "Teams like UNICEF France, Utopia 56, EVA, and TIMMY already do critical crisis work. We respect that work deeply. Our role is to stay with families after the emergency, so they are not pushed back into survival mode again and again.",
      "In practice, we work across four connected pillars. Emergency Support meets immediate needs: food, hygiene essentials, warm clothing, and school materials. Child Protection helps children return to learning through tutoring, French support, safe study spaces, and digital access. Family Guidance helps parents navigate paperwork, referrals, and services with less fear and confusion. Street Outreach meets families where they are in Lyon, distributes essentials on the spot, and builds follow-up plans that do not end when the night does.",
      "The Street Exit Program turns that approach into a concrete path: not one-off aid, but individualized next steps toward shelter, school, legal aid, and healthcare. School First focuses on what changes a child's trajectory long term: supplies, tutoring, language support, and continuity in education.",
      "While immediate relief is critical, it does not address the structural causes of poverty on its own. Sustainable change requires housing stability, continuous education, and legal orientation working together. We prioritize warm referrals with schools, shelters, and partner NGOs so families move faster without falling through administrative cracks.",
      "We are also building an anonymous help request channel for families who are afraid to ask openly. Through Sponsor a Child's Month, each gift is tied to concrete needs: meals, school materials, transport, and hygiene, so support is practical and transparent.",
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
      "Many people see families asking for money in the street, but few know what their daily lives are really like. It is easy to judge a situation from the outside without understanding what led to it. For some families, begging becomes a way to cover immediate needs when other solutions are not available. What may seem like a simple request for money often reflects a much deeper struggle.",
      "Street begging is rarely a choice. For many undocumented families, it becomes a last option when paperwork, housing, and school access are blocked at the same time. Our Street Exit Program starts from that reality, not from judgment.",
      "For children, spending time in the street can be particularly difficult. While other children are playing, studying, or enjoying a stable routine, some are exposed to long hours outdoors and challenging living conditions. Every child deserves the opportunity to grow up in a safe environment where their needs, education, and well-being come first.",
      "Instead of repeating one-off distributions, we build individualized plans with each family. The goal is practical: connect people to shelter options, school pathways, legal orientation, and healthcare contacts that can actually move their situation forward.",
      "Our street outreach work in Lyon focuses on meeting families where they are, identifying urgent needs, and building trust over time. The objective is not only material distribution, but helping frightened families move toward safe support systems.",
      "Each plan is built step by step with field volunteers and guidance support. Some families need urgent basics first. Others need help enrolling children in school or preparing admin documents. We stay with them through those next steps.",
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
    imageAlt: "School backpack",
    body: [
      "Education is one of the most powerful tools for changing a child's future. School is not only a place to learn mathematics, science, or languages; it is also where children discover their abilities, develop their interests, and build important life skills. For many children facing difficult circumstances, education represents hope. It can open doors to new opportunities and help break the cycle of poverty from one generation to the next.",
      "A child who misses school does not just miss lessons. They miss routine, confidence, and the sense that their future is still open. That is why School First is one of our core programmes.",
      "Many people believe that children without legal residency papers cannot attend school. In reality, French law guarantees access to education for all children living in the country. Schools cannot refuse a child because of their nationality or immigration status. However, some families still need support when completing registration procedures or understanding the education system.",
      "Although children can attend school, their experience is not always easy. Some arrive in France without speaking French, making lessons and communication more difficult at first. Others may struggle to adapt to a new environment or feel isolated from their classmates. With support from teachers, families, and community organizations, many children are able to overcome these difficulties and succeed.",
      "Success at school also depends on having the necessary resources. Items such as notebooks, backpacks, pens, appropriate clothing, and transportation may seem simple, but they play an important role in a child's daily life. Access to technology is also increasingly important for homework, research, and communication with teachers.",
      "We focus on what children need to return to class with dignity: backpacks, notebooks, pens, French workbooks, and basic digital access when possible. Beyond materials, we support tutoring, homework help, and French language learning for children who fell behind. The aim is not pressure. It is continuity, so learning can restart without shame.",
      "Every child deserves the chance to learn, grow, and prepare for a better future. You can support School First through donations, school supply packs, or volunteer tutoring in Lyon.",
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
      "For families in difficult situations, finding support is not always simple. Help can exist through different organizations such as charities, social workers, or local support services. These services may offer food assistance, school support, housing help, or guidance with administrative steps. In urgent situations, emergency services can also provide temporary solutions, especially when children have no safe place to stay.",
      "Many undocumented families avoid asking for help because they fear exposure. One wrong contact can feel like risking everything, so people stay silent even when children need food, shelter, or school support. Many families feel unsure or afraid to ask for help, which is why access to clear and simple information is very important.",
      "Even when rights exist, accessing them can be difficult. Many families face complicated forms, long procedures, or documents that are hard to understand. Language barriers and unstable living conditions can make these difficulties even worse. In many cases, the main challenge is not the absence of help, but the difficulty in understanding how to reach it.",
      "We are building an anonymous help request channel so families can find practical guidance without disclosing identity upfront. The platform will point people toward food resources, shelter contacts, emergency numbers, and administrative guidance in a clear, simple format. No complicated forms, no public labels.",
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
    imageAlt: "Empty classroom",
    body: [
      "Child poverty refers to situations where children do not have access to the basic resources necessary for a safe and healthy life: stable housing, sufficient food, healthcare, education, and more. Poverty is not only about money. It can also affect a child's physical health, mental well-being, social life, and future opportunities.",
      "In France, many families struggle with rising living costs, housing difficulties, and unemployment. Vulnerable families, especially the undocumented, are often exposed to even greater challenges because they may have limited access to financial support and public services.",
      "Child poverty can sometimes remain invisible. While some children openly face homelessness or begging in the streets, others suffer silently in overcrowded housing, temporary shelters, or unstable environments.",
      "Many undocumented families face difficult living conditions every day. Without documents, it can be very hard for parents to find stable jobs, rent a home, or access certain services. Some families move frequently between temporary shelters, hotels, or emergency accommodation. For children, this often means growing up without a place they can truly call home.",
      "Getting enough food can also become a daily challenge. Some families rely on charities and food distributions to get by. In some cases, parents choose to eat less so their children can have enough to eat. Behind every child living in poverty, there is a story that is rarely seen by the public.",
      "Growing up in difficult circumstances can affect much more than a child's daily life. When children spend their early years worrying about problems that no child should face, they may miss important moments of learning, discovery, and personal development. Over time, these experiences can reduce confidence and make it harder for children to believe in their own potential.",
      "Our work in Lyon starts by meeting families before collapse, with food, guidance, school support, and outreach that respects dignity. We are not here to label people. We are here to reduce harm and open pathways. Understanding these realities is essential to build a more supportive and inclusive society.",
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
      "In France, even when families do not have legal residency papers, children still have important basic rights. All children have the right to education. Schools must accept children regardless of their administrative situation. Emergency healthcare can also be available in urgent situations. However, many families are not fully aware of these rights or do not understand how to access them.",
      "Legal systems are hard for anyone. For undocumented families, they can feel impossible. Many parents do not know which association to contact first, or fear that asking will make things worse.",
      "Help can exist through different organizations: charities, social workers, and local support services offering food assistance, school support, housing help, or guidance with administrative steps. Access to clear and reliable information can play an important role in helping families understand their options.",
      "We do not replace lawyers. We guide families toward the right doors: shelters, migrant support groups, food banks, legal aid contacts, and social services that match their situation.",
      "Our Family Guidance volunteers help with practical steps: preparing documents, booking appointments, translating basic information, and staying present when families feel overwhelmed. Even when rights exist, accessing them can be difficult because of complicated forms, long procedures, or language barriers.",
      "Clear orientation reduces panic and prevents families from giving up after one failed attempt. One warm referral can save weeks of confusion. This can make a real difference for children who need stability, safety, and support in their daily lives.",
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
      "No single association can solve child poverty in isolation. True, sustainable impact relies on schools, social workers, field teams, and partner NGOs working together.",
      "France already has NGOs doing essential protection work. Shelters respond at night, field teams support migrant children, and local actors carry huge responsibility every day.",
      "Hope Beyond Streets was built to complement that ecosystem, not compete with it. We focus on what often comes after the first emergency: reintegration, schooling, and family stability.",
      "Teachers and school staff are often the first to notice when a child is struggling, missing class, or showing signs of hardship. We work with schools to provide discreet support, such as school materials, tutoring, and help navigating enrollment.",
      "Our volunteers act as an agile ally on the ground, helping families with urgent logistics, appointments, and warm referrals when state processes move slowly.",
      "We do not reinvent the wheel. We connect families with shelters, migrant support groups, food banks, and legal aid so each family receives connected support instead of isolated help.",
      "When organisations coordinate, families move faster. When they do not, people fall through administrative cracks and return to survival mode. Partnership is not a slogan for us. It is how children actually get off the streets and stay off.",
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
    imageAlt: "School gate",
    body: [
      "Survival is not a childhood. Yet too many children spend their days on streets because families are blocked by paperwork, housing instability, and lack of support.",
      "Growing up in difficult circumstances can influence the way children see themselves, others, and their future. Instead of focusing on their dreams and ambitions, they are often forced to think about challenges beyond their age. Some may feel left behind while watching other children enjoy opportunities that seem out of reach.",
      "Our message is simple and firm: no child should grow up begging because of administrative barriers. Every family deserves a path toward stability and inclusion. Poverty is a circumstance, not an identity, and administrative boundaries should never override a child's right to safety and dignity.",
      "That means more than meals and blankets. It means school continuity, safe spaces, legal orientation, and follow-up that does not disappear after one contact. This is why early support is so important. Every child deserves the chance to grow, learn, and build a future without being limited by the circumstances they were born into.",
      "No child should grow up invisible. Together, we can look beyond the status, see the child, and build a future beyond survival. When children can imagine a future beyond tonight, families regain strength to keep going.",
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
      "This blog was created to raise awareness about child poverty, homelessness, and the daily struggles faced by undocumented families in France. Our goal is not only to inform people, but also to encourage compassion, understanding, and action. Many families face difficulties accessing stable housing, education, healthcare, and social support. We believe that awareness is the first step toward change.",
      "Hope Beyond Streets began with one conviction: donating is loving, caring, and helping. Not performative charity, but practical presence for families who are often left behind. A child is a child first. Every child deserves safety, education, and hope for the future.",
      "Our work in Lyon combines four pillars: emergency support, child protection, family guidance, and street outreach. Each pillar answers a real barrier families face after crisis aid ends.",
      "We refuse to accept a society where young children are forced to sleep without stability, miss school, or hide from help out of fear. Our commitment is to protect childhood, promote dignity, and build long-term solutions beyond one-off emergency aid.",
      "We are young, honest, and field-focused. We do not invent impact numbers. We show what we do, what we need, and how people can help today. Every child should have access to school, warmth, and support without being limited by paperwork.",
      "Financial gifts can provide meals, school kits, transport, and hygiene through our transparent donation tiers. You can also volunteer your time, send clothes and school supplies, or offer housing connections in Lyon.",
      "If this mission speaks to you, join us. Shifting from indifference to active solidarity starts with a single action, and every contribution helps a family move from survival toward stability.",
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
