import React from "react";
import type { BlogPost } from "@/app/modules/blog/types";
import { BlogImage } from "@/app/modules/blog/ui/components/blog-image";

interface BlogFeaturedHeroProps {
  post: BlogPost;
  onSelect: (post: BlogPost) => void;
}

export function BlogFeaturedHero({ post, onSelect }: BlogFeaturedHeroProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-white shadow-sm transition-all hover:shadow-md">
      <button
        type="button"
        onClick={() => onSelect(post)}
        className={
          post.image && post.imageAlt
            ? "grid w-full grid-cols-1 text-left lg:grid-cols-2 cursor-pointer"
            : "block w-full text-left cursor-pointer"
        }
      >
        {post.image && post.imageAlt && (
          <BlogImage
            src={post.image}
            alt={post.imageAlt}
            className="aspect-[16/10] lg:aspect-auto lg:min-h-[320px]"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        )}
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <span className="mb-4 text-xs font-bold uppercase tracking-wider text-brand-red">
            {post.category}
          </span>
          <h2 className="mb-4 text-2xl md:text-3xl font-extrabold leading-tight text-brand-text group-hover:text-brand-red transition-colors">
            {post.title}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-brand-muted line-clamp-4">
            {post.excerpt}
          </p>
          <span className="inline-flex items-center text-sm font-semibold text-brand-red">
            Read more
            <svg
              className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </button>
    </article>
  );
}
