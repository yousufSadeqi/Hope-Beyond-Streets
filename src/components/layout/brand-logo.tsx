import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "nav" | "footer";
  showName?: boolean;
  linked?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = "nav",
  showName = true,
  linked = true,
  className,
}: BrandLogoProps) {
  const isNav = variant === "nav";
  const imageSize = isNav ? 44 : 52;

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        linked && "focus-visible:outline-none",
        className
      )}
    >
      <Image
        src={BRAND.logo}
        alt={BRAND.logoAlt}
        width={imageSize}
        height={imageSize}
        className={cn(
          "object-contain shrink-0",
          isNav ? "h-11 w-11" : "h-[52px] w-[52px]"
        )}
        priority={isNav}
        unoptimized
      />
      {showName && (
        <span
          className={cn(
            "font-bold tracking-tight text-brand-text",
            isNav ? "text-xl sm:text-2xl" : "text-2xl"
          )}
        >
          {BRAND.name}
        </span>
      )}
    </span>
  );

  if (!linked) {
    return content;
  }

  return (
    <Link href="/" className={cn("inline-flex focus-visible:outline-none", className)}>
      {content}
    </Link>
  );
}
