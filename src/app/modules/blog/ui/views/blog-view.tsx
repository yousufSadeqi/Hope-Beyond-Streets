"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/container";
import type { BlogPost, BlogTopic } from "@/app/modules/blog/types";
import {
  BLOG_POSTS,
  BLOG_SECTION_LABELS,
  getFeaturedPosts,
  getPostBySlug,
  getPostsByTopic,
  getSectionTopics,
} from "@/app/modules/blog/data/posts";
import { BlogTopicNav } from "@/app/modules/blog/ui/components/blog-topic-nav";
import { BlogFeaturedHero } from "@/app/modules/blog/ui/components/blog-featured-hero";
import { BlogPostCard } from "@/app/modules/blog/ui/components/blog-post-card";
import { BlogBentoPanel } from "@/app/modules/blog/ui/components/blog-bento-panel";
import { BlogCtaBanner } from "@/app/modules/blog/ui/components/blog-cta-banner";
import { BRAND } from "@/lib/constants";

export function BlogView() {
  const searchParams = useSearchParams();
  const [activeTopic, setActiveTopic] = useState<BlogTopic>("all");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const featuredPosts = getFeaturedPosts();
  const heroPost = featuredPosts[0];
  const secondaryFeatured = featuredPosts.slice(1, 4);

  const filteredPosts = useMemo(() => {
    if (activeTopic === "all") return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.topic === activeTopic);
  }, [activeTopic]);

  const sectionTopics = useMemo(() => {
    if (activeTopic !== "all") return [activeTopic];
    return getSectionTopics();
  }, [activeTopic]);

  const openPost = useCallback((post: BlogPost) => {
    setSelectedPost(post);
    setPanelOpen(true);

    const url = new URL(window.location.href);
    url.searchParams.set("open", post.slug);
    window.history.replaceState(null, "", url);
  }, []);

  const closePanel = useCallback(() => {
    setPanelOpen(false);

    const url = new URL(window.location.href);
    url.searchParams.delete("open");
    window.history.replaceState(null, "", url);
  }, []);

  useEffect(() => {
    const slug = searchParams.get("open");
    if (!slug) return;

    const post = getPostBySlug(slug);
    if (post) {
      setSelectedPost(post);
      setPanelOpen(true);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col w-full bg-brand-bg">
      <section className="border-b border-brand-border bg-brand-white">
        <Container className="py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-text mb-4">
            Blog
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-brand-muted leading-relaxed mb-8">
            Child protection insights, education, and stories from our mission with
            undocumented families across France, dignity, inclusion, and direct action.
          </p>
          <BlogTopicNav activeTopic={activeTopic} onTopicChange={setActiveTopic} />
        </Container>
      </section>

      {activeTopic === "all" && heroPost && (
        <section className="py-10 md:py-14">
          <Container className="space-y-8">
            <BlogFeaturedHero post={heroPost} onSelect={openPost} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {secondaryFeatured.map((post) => (
                <BlogPostCard key={post.slug} post={post} variant="featured" onSelect={openPost} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {sectionTopics.map((topic, index) => {
        const posts =
          activeTopic === "all" ? getPostsByTopic(topic) : filteredPosts;

        if (posts.length === 0) return null;

        const visiblePosts =
          activeTopic === "all"
            ? posts.filter((post) => !post.featured)
            : posts;

        if (visiblePosts.length === 0) return null;

        return (
          <section
            key={topic}
            className={index % 2 === 0 ? "bg-brand-white py-12 md:py-16" : "py-12 md:py-16"}
          >
            <Container>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-8 md:mb-10">
                {BLOG_SECTION_LABELS[topic]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {visiblePosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} onSelect={openPost} />
                ))}
              </div>
            </Container>

            {index === 1 && activeTopic === "all" && <BlogCtaBanner />}
          </section>
        );
      })}

      {activeTopic !== "all" && filteredPosts.length === 0 && (
        <Container className="py-20 text-center">
          <p className="text-brand-muted">No articles in this topic yet. Check back soon.</p>
        </Container>
      )}

      <section className="border-t border-brand-border bg-brand-white py-12 md:py-16">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-text mb-3">
            Explore more
          </h2>
          <p className="text-brand-muted mb-6 leading-relaxed">
            Download campaign posters or get in touch to volunteer in Lyon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="/posters"
              className="inline-flex items-center justify-center rounded-lg border border-brand-border bg-brand-white px-5 py-2.5 text-sm font-semibold text-brand-text hover:border-brand-red/30 transition-colors"
            >
              Campaign posters
            </a>
            <a
              href={`mailto:${BRAND.contactEmail}?subject=Blog%20updates`}
              className="inline-flex items-center justify-center rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors"
            >
              Get updates by email
            </a>
          </div>
        </Container>
      </section>

      <BlogBentoPanel post={selectedPost} open={panelOpen} onClose={closePanel} />
    </div>
  );
}
