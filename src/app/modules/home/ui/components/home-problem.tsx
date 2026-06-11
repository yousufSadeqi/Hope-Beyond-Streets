import React from "react";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { HOME_PROBLEM } from "@/app/modules/home/data/content";

export function HomeProblem() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-4">
              {HOME_PROBLEM.eyebrow}
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand-text mb-4 leading-tight tracking-tight">
              {HOME_PROBLEM.title}
            </h2>
            <p className="text-lg font-semibold text-brand-text mb-4 leading-relaxed">
              {HOME_PROBLEM.lead}
            </p>
            <p className="text-brand-muted text-sm md:text-base leading-relaxed">
              {HOME_PROBLEM.body}
            </p>
          </div>

          <PlaceholderImage
            src={HOME_PROBLEM.image}
            alt={HOME_PROBLEM.imageAlt}
            className="aspect-[4/5] w-full rounded-2xl shadow-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Container>
    </section>
  );
}
