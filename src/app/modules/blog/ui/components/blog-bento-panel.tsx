"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/app/modules/blog/types";
import { BlogImage } from "@/app/modules/blog/ui/components/blog-image";
import { BlogArticleContent } from "@/app/modules/blog/ui/components/blog-article-content";
import { BlogCtaBanner } from "@/app/modules/blog/ui/components/blog-cta-banner";

interface BlogBentoPanelProps {
  post: BlogPost | null;
  open: boolean;
  onClose: () => void;
}

export function BlogBentoPanel({ post, open, onClose }: BlogBentoPanelProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open && post) {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
      return;
    }

    setVisible(false);
    const timeout = setTimeout(() => setMounted(false), 320);
    document.body.style.overflow = "";

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [open, post]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!mounted || !post) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      role="presentation"
      onClick={onClose}
    >
      <div
        className={cn(
          "absolute inset-0 bg-brand-text/45 backdrop-blur-[2px] transition-opacity duration-300",
          visible ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 px-0 sm:px-4 pointer-events-none"
        onClick={onClose}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-bento-title"
          className={cn(
            "relative mx-auto flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-t-2xl border border-brand-border bg-brand-white shadow-2xl transition-transform duration-300 ease-out pointer-events-auto",
            visible ? "translate-y-0" : "translate-y-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-h-[92vh] overflow-y-auto overscroll-contain">
            <div className="sticky top-0 z-30 flex justify-end border-b border-brand-border/60 bg-brand-white/95 px-4 py-3 backdrop-blur-sm md:px-6">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border bg-brand-white text-brand-muted transition-colors hover:bg-brand-red-soft hover:text-brand-red"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-5 md:p-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                {post.image && post.imageAlt ? (
                  <div className="overflow-hidden rounded-2xl border border-brand-border lg:col-span-7">
                    <BlogImage
                      src={post.image}
                      alt={post.imageAlt}
                      className="aspect-[16/10] w-full lg:min-h-[280px] lg:aspect-auto"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                ) : null}

                <div
                  className={cn(
                    post.image && post.imageAlt ? "lg:col-span-5" : "lg:col-span-12"
                  )}
                >
                  <div className="rounded-2xl border border-brand-border bg-brand-white p-4 md:p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                      {post.category}
                    </span>
                    <h2
                      id="blog-bento-title"
                      className="mt-2 text-lg md:text-xl font-extrabold leading-tight text-brand-text"
                    >
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-brand-border bg-brand-bg p-5 md:p-8">
                <BlogArticleContent post={post} showImage={false} />
              </div>
            </div>

            <BlogCtaBanner compact />
          </div>
        </div>
      </div>
    </div>
  );
}
