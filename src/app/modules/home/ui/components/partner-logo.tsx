"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PartnerLogoProps {
  src: string;
  name: string;
}

export function PartnerLogo({ src, name }: PartnerLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-14 w-full items-center justify-center rounded-lg border border-dashed border-brand-border bg-brand-bg px-3">
        <span className="text-center text-[10px] font-semibold uppercase tracking-wider text-brand-muted leading-snug">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-14 w-full items-center justify-center">
      <Image
        src={src}
        alt={name}
        width={160}
        height={56}
        className="max-h-12 w-auto object-contain"
        unoptimized
        onError={() => setFailed(true)}
      />
    </div>
  );
}
