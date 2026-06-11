import React from "react";
import { AboutHero } from "@/app/modules/about/ui/components/about-hero";
import { AboutNarrative } from "@/app/modules/about/ui/components/about-narrative";
import { AboutValues } from "@/app/modules/about/ui/components/about-values";
import { AboutPartners } from "@/app/modules/about/ui/components/about-partners";
import { AboutTransparency } from "@/app/modules/about/ui/components/about-transparency";
import { AboutExplore } from "@/app/modules/about/ui/components/about-explore";

export function AboutView() {
  return (
    <div className="flex flex-col w-full bg-brand-bg">
      <AboutHero />
      <AboutNarrative />
      <AboutValues />
      <AboutPartners />
      <AboutTransparency />
      <AboutExplore />
    </div>
  );
}
