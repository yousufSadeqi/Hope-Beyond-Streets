import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BlogImage } from "@/app/modules/blog/ui/components/blog-image";
import { getFeaturedPosts } from "@/app/modules/blog/data/posts";
import { HOME_BLOG_TEASER } from "@/app/modules/home/data/content";
import { BLOG_GUIDE_PDF } from "@/lib/constants";

export function HomeBlogTeaser() {
  const post = getFeaturedPosts()[0];
  if (!post) return null;

  return (
    <section className="py-14 md:py-16 bg-brand-white border-t border-brand-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
              {HOME_BLOG_TEASER.eyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text tracking-tight mb-4">
              {HOME_BLOG_TEASER.title}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-6">{HOME_BLOG_TEASER.description}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href={BLOG_GUIDE_PDF.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm font-semibold text-brand-red hover:underline"
              >
                {HOME_BLOG_TEASER.learnMoreLabel} →
              </a>
              <Link
                href="/blog"
                className="inline-flex text-sm font-semibold text-brand-text hover:text-brand-red hover:underline transition-colors"
              >
                {HOME_BLOG_TEASER.linkLabel} →
              </Link>
            </div>
          </div>

          <Link
            href={`/blog?open=${post.slug}`}
            className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-bg hover:border-brand-red/25 transition-colors"
          >
            {post.image && post.imageAlt && (
              <BlogImage
                src={post.image}
                alt={post.imageAlt}
                className="aspect-[16/9] w-full"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            )}
            <div className="p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">
                {post.category}
              </p>
              <h3 className="text-lg font-bold text-brand-text leading-snug group-hover:text-brand-red transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
