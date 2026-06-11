import React from "react";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";
import { ABOUT_PARTNERS, ABOUT_DIFFERENCE } from "@/app/modules/about/data/content";
import { FUTURE_COLLABORATION_TARGETS } from "@/lib/partners";
import { BRAND } from "@/lib/constants";
import { PartnerLogo } from "@/app/modules/home/ui/components/partner-logo";

export function AboutPartners() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <Container className="max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
              {ABOUT_PARTNERS.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-4 tracking-tight">
              {ABOUT_PARTNERS.title}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-6">{ABOUT_PARTNERS.description}</p>

            <div className="rounded-2xl border border-brand-red/20 bg-brand-red-soft/30 p-5 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-red mb-4">
                {ABOUT_PARTNERS.whyHeading}
              </p>
              <ul className="space-y-3">
                {ABOUT_PARTNERS.whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-brand-text leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="primary"
              href={`mailto:${BRAND.partnerEmail}?subject=Partnership%20inquiry`}
              className="px-6 py-3"
            >
              {ABOUT_PARTNERS.cta}
            </Button>
          </div>
          <PlaceholderImage
            src={ABOUT_PARTNERS.image}
            alt={ABOUT_PARTNERS.imageAlt}
            className="aspect-4/3 w-full rounded-2xl shadow-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-extrabold text-brand-text mb-2 tracking-tight">
            {ABOUT_PARTNERS.futureHeading}
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed mb-6 max-w-2xl">
            {ABOUT_PARTNERS.futureNote}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {FUTURE_COLLABORATION_TARGETS.map((partner) => (
              <div
                key={partner.id}
                className="rounded-xl border border-brand-border bg-brand-white p-4 text-center"
              >
                <PartnerLogo src={partner.logo} name={partner.name} />
                <p className="mt-3 text-xs font-bold text-brand-text leading-snug">{partner.name}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
                  Future goal
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-extrabold text-brand-text mb-2 text-center tracking-tight">
            {ABOUT_DIFFERENCE.title}
          </h3>
          <p className="text-brand-muted text-center mb-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {ABOUT_DIFFERENCE.subtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ABOUT_DIFFERENCE.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-brand-border bg-brand-white p-6"
              >
                <h4 className="text-base font-bold text-brand-text mb-2">{item.title}</h4>
                <p className="text-sm text-brand-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
