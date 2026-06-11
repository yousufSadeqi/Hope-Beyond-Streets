import React from "react";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { ABOUT_NARRATIVE } from "@/app/modules/about/data/content";

export function AboutNarrative() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <Container className="max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-8 leading-tight">
              {ABOUT_NARRATIVE.title}
            </h2>
            {ABOUT_NARRATIVE.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-brand-muted leading-relaxed mb-5 text-base md:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <p className="text-lg md:text-xl font-bold text-brand-text leading-relaxed">
              {ABOUT_NARRATIVE.highlight}
            </p>
          </div>
          <PlaceholderImage
            src={ABOUT_NARRATIVE.image}
            alt={ABOUT_NARRATIVE.imageAlt}
            className="aspect-[4/5] w-full rounded-2xl shadow-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Container>
    </section>
  );
}
