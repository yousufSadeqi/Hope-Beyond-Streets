"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { BlogTopic } from "@/app/modules/blog/types";
import { BLOG_TOPICS } from "@/app/modules/blog/data/posts";

interface BlogTopicNavProps {
  activeTopic: BlogTopic;
  onTopicChange: (topic: BlogTopic) => void;
}

export function BlogTopicNav({ activeTopic, onTopicChange }: BlogTopicNavProps) {
  return (
    <nav
      aria-label="Blog topics"
      className="flex gap-2 overflow-x-auto pb-1 scrollbar-none"
    >
      {BLOG_TOPICS.map((topic) => {
        const isActive = activeTopic === topic.id;
        return (
          <button
            key={topic.id}
            type="button"
            onClick={() => onTopicChange(topic.id)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors cursor-pointer",
              isActive
                ? "bg-brand-text text-white"
                : "bg-brand-white text-brand-text border border-brand-border hover:border-brand-red/30 hover:text-brand-red"
            )}
          >
            {topic.label}
          </button>
        );
      })}
    </nav>
  );
}
