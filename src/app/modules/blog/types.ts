export type BlogTopic =
  | "all"
  | "child-protection"
  | "education"
  | "family-guidance";

export interface BlogPost {
  slug: string;
  topic: Exclude<BlogTopic, "all">;
  category: string;
  title: string;
  excerpt: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  body?: string[];
}

export interface BlogTopicOption {
  id: BlogTopic;
  label: string;
}
