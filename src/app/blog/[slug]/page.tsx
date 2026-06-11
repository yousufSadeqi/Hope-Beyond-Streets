import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/app/modules/blog/data/posts";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) redirect("/blog");

  redirect(`/blog?open=${slug}`);
}
