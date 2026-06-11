"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { DONATE_CONTRIBUTION_NAV, type DonateContributionSectionId } from "@/app/modules/donate/data/content";

interface DonateSectionNavProps {
  activeSection: DonateContributionSectionId;
  onSectionChange: (id: DonateContributionSectionId) => void;
}

export function DonateSectionNav({ activeSection, onSectionChange }: DonateSectionNavProps) {
  return (
    <nav
      aria-label="Contribution types"
      className="flex gap-2 overflow-x-auto pb-1 scrollbar-none"
    >
      {DONATE_CONTRIBUTION_NAV.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              onSectionChange(item.id);
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={cn(
              "shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer",
              isActive
                ? "bg-brand-red text-white"
                : "bg-brand-white text-brand-text border border-brand-border hover:border-brand-red/30 hover:text-brand-red"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
