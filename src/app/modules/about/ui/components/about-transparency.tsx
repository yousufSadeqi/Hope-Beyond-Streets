import React from "react";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { ABOUT_OBJECTIVES, ABOUT_TRANSPARENCY } from "@/app/modules/about/data/content";

export function AboutTransparency() {
  return (
    <section className="py-16 md:py-24 bg-brand-white border-y border-brand-border">
      <Container className="max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div id="transparency" className="scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-6">
              Radical transparency
            </h2>
            <div className="space-y-4 text-brand-muted leading-relaxed text-sm md:text-base mb-10">
              <p>
                Donations map to specific needs, a school kit, a week of meals, an outreach
                supply bundle, or a month of support through Sponsor a Child&apos;s Month, not
                an opaque general fund.
              </p>
              <p>
                We are building a public transparency ledger so donors can see where every euro
                goes once programmes are running. Lean administration, no hidden fees, and no
                exploitation of the families we stand with.
              </p>
            </div>

            <h3 className="text-xl font-bold text-brand-text mb-4">Our objectives</h3>
            <ul className="space-y-3">
              {ABOUT_OBJECTIVES.map((objective) => (
                <li
                  key={objective}
                  className="flex items-start gap-3 text-sm text-brand-text"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-brand-red mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          <PlaceholderImage
            src={ABOUT_TRANSPARENCY.image}
            alt={ABOUT_TRANSPARENCY.imageAlt}
            className="aspect-[4/5] w-full rounded-2xl shadow-lg sticky top-28"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </Container>
    </section>
  );
}
