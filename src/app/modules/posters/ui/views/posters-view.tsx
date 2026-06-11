"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { POSTERS } from "@/app/modules/posters/data/content";
import { BRAND } from "@/lib/constants";

export function PostersView() {
  return (
    <div className="flex flex-col w-full py-16 md:py-24 bg-brand-bg">
      <Container className="max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-flex items-center rounded-full bg-brand-red-soft px-3.5 py-1 text-xs font-semibold text-brand-red mb-4 border border-brand-red/10">
            Campaign Materials
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-text sm:text-5xl mb-6">
            Share our mission in <span className="text-brand-red">your community</span>
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Download professionally designed posters to raise awareness. Print at home, at school,
            or at your local copy shop, all files are free to use for advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {POSTERS.map((poster, index) => (
            <article
              key={poster.id}
              className="flex flex-col rounded-2xl border border-brand-border bg-brand-white overflow-hidden shadow-xs"
            >
              <div className="relative aspect-[3/4] w-full bg-zinc-100 flex items-center justify-center p-2">
                <Image
                  key={poster.image}
                  src={poster.image}
                  alt={poster.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-1"
                  unoptimized
                />
              </div>

              <div className="flex flex-col flex-grow p-5 md:p-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                  {poster.accent}
                </span>
                <h2 className="text-lg font-bold text-brand-text leading-snug">{poster.title}</h2>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  {poster.format}
                </p>
                <p className="text-sm text-brand-muted leading-relaxed flex-grow">
                  {poster.description}
                </p>
                <a
                  href={poster.downloadHref}
                  download={poster.downloadFilename}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-brand-border bg-brand-white px-6 py-3 text-xs font-semibold tracking-wide text-brand-red transition-all hover:bg-brand-red-soft hover:border-brand-red/30"
                >
                  Download poster
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-border bg-brand-white p-6 md:p-8 text-center">
          <h2 className="text-lg font-bold text-brand-text mb-2">Need a custom format?</h2>
          <p className="text-sm text-brand-muted mb-5 max-w-lg mx-auto">
            Schools, municipalities, and partner organisations can request branded versions with
            logos, QR codes, or event details.
          </p>
          <Button variant="primary" href={`mailto:${BRAND.contactEmail}?subject=Custom%20poster%20request`}>
            Request Custom Posters
          </Button>
        </div>
      </Container>
    </div>
  );
}
