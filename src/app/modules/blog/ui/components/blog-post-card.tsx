import React from "react";
import type { BlogPost } from "@/app/modules/blog/types";
import { BlogImage } from "@/app/modules/blog/ui/components/blog-image";

interface BlogPostCardProps {
  post: BlogPost;
  variant?: "default" | "featured";
  onSelect: (post: BlogPost) => void;
}

export function BlogPostCard({ post, variant = "default", onSelect }: BlogPostCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article className="group flex h-full flex-col">
      <button
        type="button"
        onClick={() => onSelect(post)}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-brand-border bg-brand-white text-left transition-all duration-200 hover:border-brand-red/25 hover:shadow-md cursor-pointer"
      >
        {post.image && post.imageAlt && (
          <BlogImage
            src={post.image}
            alt={post.imageAlt}
            className="aspect-[16/10] w-full"
            sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        )}

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <span className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-red">
            {post.category}
          </span>

          <h3
            className={
              isFeatured
                ? "mb-3 text-xl md:text-2xl font-bold leading-snug text-brand-text group-hover:text-brand-red transition-colors"
                : "mb-3 text-lg font-bold leading-snug text-brand-text group-hover:text-brand-red transition-colors"
            }
          >
            {post.title}
          </h3>

          <p className="flex-1 text-sm leading-relaxed text-brand-muted line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </button>
    </article>
  );
}
