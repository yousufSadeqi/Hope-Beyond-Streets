import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BRAND } from "@/lib/constants";

interface BlogCtaBannerProps {
  compact?: boolean;
}

export function BlogCtaBanner({ compact = false }: BlogCtaBannerProps) {
  if (compact) {
    return (
      <div className="px-5 pb-5 md:px-8">
        <div className="flex flex-col gap-3 rounded-xl bg-zinc-950 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="text-sm font-bold text-white leading-snug">{BRAND.tagline}</p>
            <p className="mt-1 text-xs text-zinc-400 leading-relaxed line-clamp-2">
              Every gift funds meals, school access, and family guidance in Lyon.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-lg bg-brand-red px-4 py-2 text-xs font-semibold text-white hover:bg-brand-red-dark transition-colors"
            >
              Donate
            </Link>
            <a
              href={`mailto:${BRAND.contactEmail}?subject=Volunteer%20inquiry`}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Volunteer
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-10 md:py-14">
      <Container>
        <div className="rounded-2xl bg-zinc-950 px-8 py-10 md:px-12 md:py-12 text-center md:flex md:items-center md:justify-between md:text-left md:gap-10">
          <div className="md:max-w-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              {BRAND.tagline}
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Help children reclaim a future beyond survival. Every gift funds direct
              field action, meals, school access, and family guidance in Lyon.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors"
            >
              Get Started
            </Link>
            <a
              href={`mailto:${BRAND.contactEmail}?subject=Volunteer%20inquiry`}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Volunteer
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
