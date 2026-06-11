import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  overlay?: boolean;
}

export function PlaceholderImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  overlay = false,
}: PlaceholderImageProps) {
  const isPlaceholder = src.startsWith("#");

  if (isPlaceholder) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-linear-to-br from-zinc-300 via-zinc-200 to-brand-red-soft",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-end p-4",
            overlay
              ? "bg-linear-to-t from-black/70 via-black/25 to-black/10"
              : "bg-linear-to-t from-black/55 via-black/10 to-transparent"
          )}
        >
          <span className="inline-flex self-start rounded bg-black/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-2">
            Photo needed
          </span>
          <p className="text-xs leading-snug text-white/95 line-clamp-4">{alt}</p>
          <p className="mt-2 text-[10px] font-mono text-white/60 truncate">{src}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-zinc-100", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
