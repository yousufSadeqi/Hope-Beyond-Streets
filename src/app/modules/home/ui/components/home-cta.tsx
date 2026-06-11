import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HOME_CTA } from "@/app/modules/home/data/content";
import { BRAND } from "@/lib/constants";

export function HomeCta() {
  return (
    <section className="py-16 md:py-20 bg-zinc-950">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
            {HOME_CTA.eyebrow}
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
            {HOME_CTA.title}
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">{HOME_CTA.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="primary" href="/donate" className="px-8 py-3.5">
              {HOME_CTA.primaryCta}
            </Button>
            <Button
              variant="secondary"
              href={`mailto:${BRAND.contactEmail}?subject=Contact%20inquiry`}
              className="px-8 py-3.5 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
            >
              {HOME_CTA.secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
