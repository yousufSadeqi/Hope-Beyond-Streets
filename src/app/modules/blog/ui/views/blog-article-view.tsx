import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { BlogPost } from "@/app/modules/blog/types";
import { BlogImage } from "@/app/modules/blog/ui/components/blog-image";
import { BlogCtaBanner } from "@/app/modules/blog/ui/components/blog-cta-banner";

interface BlogArticleViewProps {
  post: BlogPost;
}

export function BlogArticleView({ post }: BlogArticleViewProps) {
  return (
    <article className="flex flex-col w-full bg-brand-bg">
      <Container className="max-w-3xl py-10 md:py-14">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-semibold text-brand-red hover:text-brand-red-dark transition-colors mb-8"
        >
          <svg
            className="mr-1.5 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to blog
        </Link>

        <div className="mb-5 text-xs font-semibold uppercase tracking-wider text-brand-red">
          {post.category}
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-text mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-lg text-brand-muted leading-relaxed mb-8">
          {post.excerpt}
        </p>
      </Container>

      {post.image && post.imageAlt && (
        <div className="w-full">
          <BlogImage
            src={post.image}
            alt={post.imageAlt}
            className="aspect-[21/9] w-full max-h-[480px]"
            priority
            sizes="100vw"
          />
        </div>
      )}

      <Container className="max-w-3xl py-10 md:py-14">
        <div className="rounded-2xl border border-brand-border bg-brand-white p-6 md:p-10 space-y-6 text-brand-muted leading-relaxed">
          {post.body
            ? post.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)
            : (
              <>
                <p>
                  This article is part of our mission to protect children&apos;s dignity,
                  prevent street begging, and help undocumented families access education, food,
                  and administrative guidance before they fall into extreme poverty.
                </p>
                <p>
                  We collaborate with existing NGOs rather than duplicating emergency aid.
                  Our focus is the gap between crisis response and long-term reintegration:
                  family stability, schooling, legal orientation, and pathways off the streets.
                </p>
                <p>
                  Full long-form content for this story is coming soon. In the meantime, you can
                  support our field work directly or reach out if you would like to volunteer
                  in Lyon.
                </p>
              </>
            )}
        </div>
      </Container>

      <BlogCtaBanner />
    </article>
  );
}
