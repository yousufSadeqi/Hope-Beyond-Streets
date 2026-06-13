import React from "react";
import { Container } from "@/components/ui/container";
import { HOME_VIDEO } from "@/app/modules/home/data/content";

export function HomeVideo() {
  return (
    <section className="border-t border-brand-border bg-brand-white py-16 md:py-24">
      <Container className="max-w-5xl">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-muted">
            {HOME_VIDEO.eyebrow}
          </p>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-brand-text md:text-4xl">
            {HOME_VIDEO.title}
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-brand-muted md:text-base">
            {HOME_VIDEO.description}
          </p>
        </div>

        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-brand-border bg-brand-bg shadow-lg">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={HOME_VIDEO.youtubeEmbedUrl}
              title="Hope Beyond Streets - YouTube video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
