import React from "react";
import { Container } from "@/components/ui/container";
import { HOME_VALUES } from "@/app/modules/home/data/content";

export function HomeValues() {
  return (
    <section className="py-16 md:py-20 bg-brand-white border-b border-brand-border">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-red mb-3 block">
            Our values
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-4">
            Built on dignity, not charity
          </h2>
          <p className="text-brand-muted leading-relaxed">
            We protect children&apos;s dignity through direct field action, family reintegration,
            and radical transparency, partnering with existing NGOs across France.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {HOME_VALUES.map((value) => (
            <div
              key={value.label}
              className="rounded-xl border border-brand-border bg-brand-bg p-5 text-center hover:border-brand-red/25 transition-colors"
            >
              <h3 className="text-sm font-bold text-brand-text mb-2">{value.label}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
