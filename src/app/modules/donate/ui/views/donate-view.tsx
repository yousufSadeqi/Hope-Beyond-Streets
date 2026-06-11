"use client";

import React, { Suspense, useState } from "react";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { DonateForm } from "@/app/modules/donate/ui/components/donate-form";
import { DonateSectionNav } from "@/app/modules/donate/ui/components/donate-section-nav";
import {
  DonateInKindSection,
  DonateVolunteerSection,
  DonateHousingSection,
} from "@/app/modules/donate/ui/components/donate-other-ways";
import {
  DONATE_HERO,
  DONATE_MONEY,
  DONATE_IMPACT_BREAKDOWN,
  type DonateContributionSectionId,
} from "@/app/modules/donate/data/content";

export function DonateView() {
  const [activeSection, setActiveSection] = useState<DonateContributionSectionId>("give-money");

  return (
    <div className="flex flex-col w-full bg-brand-bg">
      {/* Hero with photo */}
      <section className="py-14 md:py-20 bg-brand-white border-b border-brand-border">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-4">
                {DONATE_HERO.eyebrow}
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-text mb-6 leading-tight">
                {DONATE_HERO.title}{" "}
                <span className="text-brand-red">{DONATE_HERO.highlight}</span>
              </h1>
              <p className="text-lg text-brand-muted leading-relaxed">
                {DONATE_HERO.description}
              </p>
            </div>
            <PlaceholderImage
              src={DONATE_HERO.image}
              alt={DONATE_HERO.imageAlt}
              className="aspect-[4/3] w-full rounded-2xl shadow-lg"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      <Container className="max-w-4xl py-14 md:py-16">
        <div className="mb-12">
          <DonateSectionNav activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>

        <div className="space-y-16">
          {/* Financial */}
          <div id="give-money" className="scroll-mt-32">
            <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-white shadow-xs mb-8">
              <PlaceholderImage
                src={DONATE_MONEY.image}
                alt={DONATE_MONEY.imageAlt}
                className="aspect-[21/9] w-full"
                sizes="(max-width: 768px) 100vw, 896px"
              />
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-brand-text mb-2">{DONATE_MONEY.title}</h2>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {DONATE_MONEY.description}
                </p>
              </div>
            </div>
            <Suspense fallback={<div className="py-12 text-center text-brand-muted text-sm">Loading donation form…</div>}>
              <DonateForm />
            </Suspense>
          </div>

          <div id="give-items" className="scroll-mt-32">
            <DonateInKindSection />
          </div>

          <div id="give-time" className="scroll-mt-32">
            <DonateVolunteerSection />
          </div>

          <div id="give-housing" className="scroll-mt-32">
            <DonateHousingSection />
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-brand-border bg-brand-white p-6 md:p-8">
          <h2 className="text-xl font-bold text-brand-text mb-2">Where financial gifts go</h2>
          <p className="text-sm text-brand-muted mb-6 leading-relaxed">
            Monetary donations are mapped to concrete field needs through our Sponsor a Child&apos;s
            Month model. In-kind items and volunteer time are coordinated directly with our field
            team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DONATE_IMPACT_BREAKDOWN.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-brand-border bg-brand-bg p-4"
              >
                <h3 className="text-sm font-bold text-brand-text mb-1">{item.label}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
