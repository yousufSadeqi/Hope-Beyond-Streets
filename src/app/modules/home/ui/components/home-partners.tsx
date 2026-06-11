import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HOME_PARTNERS } from "@/app/modules/home/data/content";
import { FUTURE_COLLABORATION_TARGETS } from "@/lib/partners";
import { BRAND } from "@/lib/constants";
import { PartnerLogo } from "@/app/modules/home/ui/components/partner-logo";

function PartnerCard({
  partner,
  statusLabel,
  statusClassName,
}: {
  partner: {
    id: string;
    name: string;
    logo: string;
    description: string;
    website: string;
  };
  statusLabel: string;
  statusClassName: string;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-brand-border bg-brand-white p-5 shadow-xs">
      <span
        className={`self-start rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${statusClassName}`}
      >
        {statusLabel}
      </span>

      <div className="my-5">
        <PartnerLogo src={partner.logo} name={partner.name} />
      </div>

      <h3 className="text-base font-bold text-brand-text leading-snug">{partner.name}</h3>
      <p className="mt-2 grow text-sm text-brand-muted leading-relaxed">{partner.description}</p>

      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-xs font-semibold text-brand-red hover:underline"
      >
        {partner.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} ↗
      </a>
    </article>
  );
}

export function HomePartners() {
  return (
    <section className="py-16 md:py-20 bg-brand-bg">
      <Container>
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
            {HOME_PARTNERS.eyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text tracking-tight">
            {HOME_PARTNERS.title}
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed">{HOME_PARTNERS.lead}</p>
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-brand-text mb-2 tracking-tight">
            {HOME_PARTNERS.futureHeading}
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed mb-6 max-w-2xl">
            {HOME_PARTNERS.futureNote}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FUTURE_COLLABORATION_TARGETS.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
                statusLabel={HOME_PARTNERS.futureStatusLabel}
                statusClassName="bg-brand-bg text-brand-muted border-brand-border"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            variant="primary"
            href={`mailto:${BRAND.partnerEmail}?subject=Partnership%20inquiry`}
            className="px-6 py-3"
          >
            {HOME_PARTNERS.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
