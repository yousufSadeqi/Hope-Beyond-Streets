"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import {
  DONATE_IN_KIND,
  DONATE_VOLUNTEER,
  DONATE_HOUSING,
} from "@/app/modules/donate/data/content";

function ContributionCard({
  title,
  description,
  image,
  imageAlt,
  children,
  ctaHref,
  ctaLabel,
  ctaAction,
}: {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  ctaAction?: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-brand-border bg-brand-white shadow-xs">
      {image && imageAlt && (
        <PlaceholderImage
          src={image}
          alt={imageAlt}
          className="aspect-[21/9] w-full"
          sizes="(max-width: 768px) 100vw, 896px"
        />
      )}
      <div className="p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-2">{title}</h2>
        <p className="text-sm text-brand-muted leading-relaxed mb-6">{description}</p>
        {children}
        {(ctaAction || (ctaHref && ctaLabel)) && (
          <div className="mt-8">
            {ctaAction ?? (
              <Button variant="primary" href={ctaHref!} className="px-6 py-3">
                {ctaLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export function DonateInKindSection() {
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const { sendDialog } = DONATE_IN_KIND;

  return (
    <ContributionCard
      title={DONATE_IN_KIND.title}
      description={DONATE_IN_KIND.description}
      ctaAction={
        <>
          <Button
            type="button"
            variant="primary"
            className="px-6 py-3"
            onClick={() => setSendDialogOpen(true)}
          >
            {DONATE_IN_KIND.ctaLabel}
          </Button>
          <Dialog
            open={sendDialogOpen}
            onOpenChange={setSendDialogOpen}
            title={sendDialog.title}
            description={sendDialog.description}
          >
            <div className="space-y-5">
              <div className="rounded-xl border border-brand-border bg-brand-bg p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-muted mb-2">
                  Drop-off address
                </p>
                <p className="text-sm font-semibold text-brand-text">{sendDialog.addressLine}</p>
                <p className="text-sm text-brand-muted">{sendDialog.addressCity}</p>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">
                {sendDialog.largePackageNote}
              </p>
              <Button
                variant="secondary"
                href={DONATE_IN_KIND.ctaEmail}
                className="w-full sm:w-auto"
              >
                {sendDialog.emailLabel}
              </Button>
            </div>
          </Dialog>
        </>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DONATE_IN_KIND.items.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-xl border border-brand-border bg-brand-bg"
          >
            <PlaceholderImage
              src={item.image}
              alt={item.imageAlt}
              className="aspect-[16/10] w-full"
              sizes="(max-width: 640px) 100vw, 400px"
            />
            <div className="p-5">
              <h3 className="text-base font-bold text-brand-text mb-2">{item.title}</h3>
              <p className="text-xs text-brand-muted leading-relaxed mb-3">{item.description}</p>
              <ul className="flex flex-wrap gap-1.5">
                {item.examples.map((example) => (
                  <li
                    key={example}
                    className="rounded-full border border-brand-border bg-brand-white px-2.5 py-0.5 text-[11px] font-medium text-brand-text"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </ContributionCard>
  );
}

export function DonateVolunteerSection() {
  return (
    <ContributionCard
      title={DONATE_VOLUNTEER.title}
      description={DONATE_VOLUNTEER.description}
      image={DONATE_VOLUNTEER.image}
      imageAlt={DONATE_VOLUNTEER.imageAlt}
      ctaHref={DONATE_VOLUNTEER.ctaEmail}
      ctaLabel={DONATE_VOLUNTEER.ctaLabel}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DONATE_VOLUNTEER.items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-brand-border bg-brand-bg p-5"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-base font-bold text-brand-text">{item.title}</h3>
              <span className="shrink-0 rounded-full bg-brand-red-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-red">
                {item.commitment}
              </span>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </ContributionCard>
  );
}

export function DonateHousingSection() {
  return (
    <ContributionCard
      title={DONATE_HOUSING.title}
      description={DONATE_HOUSING.description}
      image={DONATE_HOUSING.image}
      imageAlt={DONATE_HOUSING.imageAlt}
      ctaHref={DONATE_HOUSING.ctaEmail}
      ctaLabel={DONATE_HOUSING.ctaLabel}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DONATE_HOUSING.items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-brand-border bg-brand-bg p-5"
          >
            <h3 className="text-base font-bold text-brand-text mb-2">{item.title}</h3>
            <p className="text-xs text-brand-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-brand-muted leading-relaxed rounded-lg border border-brand-border bg-brand-bg p-4">
        All housing offers are reviewed confidentially. We work with vetted partners and never
        publish family details without consent. Emergency placements are coordinated case by case.
      </p>
    </ContributionCard>
  );
}
