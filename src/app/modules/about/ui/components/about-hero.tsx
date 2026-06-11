import React from "react";
import { Container } from "@/components/ui/container";
import { ABOUT_HERO } from "@/app/modules/about/data/content";

export function AboutHero() {
  return (
    <section className="py-16 md:py-24 bg-brand-white border-b border-brand-border">
      <Container className="max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-brand-red-soft px-3.5 py-1 text-xs font-semibold text-brand-red mb-6 border border-brand-red/10">
          {ABOUT_HERO.badge}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-text leading-[1.1] mb-8">
          {ABOUT_HERO.titleLine1}{" "}
          <span className="text-brand-red">{ABOUT_HERO.titleHighlight}</span>
          <br />
          {ABOUT_HERO.titleLine2}
        </h1>
        <p className="text-lg md:text-xl text-brand-muted leading-relaxed mb-6">
          {ABOUT_HERO.description}
        </p>
        <p className="text-base md:text-lg font-medium text-brand-text leading-relaxed">
          {ABOUT_HERO.closing}
        </p>
      </Container>
    </section>
  );
}
