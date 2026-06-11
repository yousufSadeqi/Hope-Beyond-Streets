import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ABOUT_EXPLORE } from "@/app/modules/about/data/content";
import { BRAND } from "@/lib/constants";

export function AboutExplore() {
  return (
    <>
      <section className="py-16 md:py-24 bg-brand-bg">
        <Container className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-12 text-center">
            {ABOUT_EXPLORE.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_EXPLORE.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-brand-border bg-brand-white p-6 md:p-8 hover:border-brand-red/30 hover:shadow-md transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red mb-3 block">
                  {link.label}
                </span>
                <h3 className="text-lg font-bold text-brand-text mb-2 group-hover:text-brand-red transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">{link.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-zinc-950">
        <Container className="max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Together we can impact how families find dignity across France
          </h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            You give. We show up. Join volunteers, donors, and partners building dignity in Lyon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" href="/donate" className="px-8 py-3.5">
              Give today
            </Button>
            <Button
              variant="secondary"
              href={`mailto:${BRAND.contactEmail}?subject=Volunteer%20inquiry`}
              className="px-8 py-3.5 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
            >
              Join our team
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
