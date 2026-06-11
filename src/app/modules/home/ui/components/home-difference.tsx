import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { HOME_DIFFERENCE } from "@/app/modules/home/data/content";

export function HomeDifference() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red mb-3 block">
              Beyond emergency aid
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand-text mb-4 leading-tight">
              {HOME_DIFFERENCE.title}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8">{HOME_DIFFERENCE.subtitle}</p>

            <div className="space-y-5">
              {HOME_DIFFERENCE.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-brand-border bg-brand-white p-5 md:p-6"
                >
                  <h3 className="text-base font-bold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" href="/blog">
                Read our blog
              </Button>
              <Button variant="secondary" href="/posters">
                Download posters
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-4">
            <PlaceholderImage
              src={HOME_DIFFERENCE.image}
              alt={HOME_DIFFERENCE.imageAlt}
              className="aspect-[4/5] w-full rounded-2xl shadow-lg sticky top-28"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <p className="text-xs text-center text-brand-muted">
              We collaborate with organisations like UNICEF France, Utopia 56, EVA, and TIMMY —
              filling the gap toward{" "}
              <Link href="/about" className="text-brand-red font-medium hover:underline">
                long-term reintegration
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
