import React from "react";
import type { BlogPost } from "@/app/modules/blog/types";
import { BlogImage } from "@/app/modules/blog/ui/components/blog-image";
import { getPostBody } from "@/app/modules/blog/data/posts";

interface BlogArticleContentProps {
  post: BlogPost;
  showImage?: boolean;
}

export function BlogArticleContent({ post, showImage = true }: BlogArticleContentProps) {
  const body = getPostBody(post);

  return (
    <div className="space-y-6">
      {showImage && post.image && post.imageAlt && (
        <div className="overflow-hidden rounded-2xl border border-brand-border">
          <BlogImage
            src={post.image}
            alt={post.imageAlt}
            className="aspect-[21/9] w-full max-h-[320px]"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      )}

      <div className="space-y-5 text-brand-muted leading-relaxed">
        {body.map((paragraph, index) => (
          <p key={index} className="text-sm md:text-base">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
