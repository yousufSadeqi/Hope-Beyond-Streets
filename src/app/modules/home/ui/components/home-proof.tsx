import React from "react";
import { Container } from "@/components/ui/container";
import { HOME_PROOF } from "@/app/modules/home/data/content";

export function HomeProof() {
  return (
    <section className="border-y border-brand-border bg-brand-white py-12 md:py-14">
      <Container>
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
            {HOME_PROOF.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text tracking-tight">
            {HOME_PROOF.title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-brand-muted leading-relaxed">
            {HOME_PROOF.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {HOME_PROOF.items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-brand-border bg-brand-bg px-4 py-5 md:px-6 md:py-6"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-brand-text tracking-tight">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-bold text-brand-text">{item.label}</p>
              <p className="mt-1 text-xs text-brand-muted leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
