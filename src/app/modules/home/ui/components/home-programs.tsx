import React from "react";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { HOME_PROGRAMS } from "@/app/modules/home/data/content";

export function HomePrograms() {
  return (
    <section className="py-16 md:py-24 bg-brand-white border-y border-brand-border">
      <Container>
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-4">
            {HOME_PROGRAMS.eyebrow}
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-text mb-4 tracking-tight leading-tight">
            {HOME_PROGRAMS.title}
          </h2>
          <p className="text-brand-muted text-sm md:text-base leading-relaxed">
            {HOME_PROGRAMS.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOME_PROGRAMS.items.map((program) => (
            <article
              key={program.id}
              className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-bg hover:border-brand-red/20 transition-colors"
            >
              <PlaceholderImage
                src={program.image}
                alt={program.imageAlt}
                className="aspect-[16/9] w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-extrabold text-brand-text tracking-tight mb-1">
                  {program.step} / {program.title}
                </h3>
                <p className="text-sm font-semibold text-brand-red mb-3">{program.tagline}</p>
                <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                  {program.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
