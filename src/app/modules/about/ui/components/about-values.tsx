import React from "react";
import { Container } from "@/components/ui/container";
import { ABOUT_VALUES_EXPANDED } from "@/app/modules/about/data/content";

export function AboutValues() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <Container className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-12 text-center">
          Our culture and values
        </h2>
        <div className="space-y-10">
          {ABOUT_VALUES_EXPANDED.map((value) => (
            <article
              key={value.label}
              className="border-b border-brand-border pb-10 last:border-0 last:pb-0"
            >
              <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-4">
                {value.label}
              </h3>
              <p className="text-brand-muted leading-relaxed text-sm md:text-base">
                {value.longDescription}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
