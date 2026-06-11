import React from "react";
import { Container } from "@/components/ui/container";

interface LegalPageViewProps {
  title: string;
  description: string;
  sections: { heading: string; body: string }[];
}

export function LegalPageView({ title, description, sections }: LegalPageViewProps) {
  return (
    <div className="flex flex-col w-full py-16 md:py-24 bg-brand-bg">
      <Container className="max-w-3xl">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-text mb-4">
            {title}
          </h1>
          <p className="text-brand-muted leading-relaxed">{description}</p>
        </div>

        <div className="space-y-8 rounded-2xl border border-brand-border bg-brand-white p-6 md:p-10 shadow-xs">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-brand-text mb-3">{section.heading}</h2>
              <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
