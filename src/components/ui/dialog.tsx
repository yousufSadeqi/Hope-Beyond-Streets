"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
}: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTarget = panelRef.current?.querySelector<HTMLElement>(
      "button, a, input, [tabindex]:not([tabindex='-1'])"
    );
    focusTarget?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-brand-text/40 backdrop-blur-[2px]"
        aria-label="Close dialog"
        onClick={() => onOpenChange(false)}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby={description ? "dialog-description" : undefined}
        className={cn(
          "relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-brand-border bg-brand-white shadow-lg",
          className
        )}
      >
        <div className="border-b border-brand-border bg-brand-bg px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="dialog-title" className="text-lg font-bold text-brand-text">
                {title}
              </h2>
              {description && (
                <p id="dialog-description" className="mt-1 text-sm text-brand-muted leading-relaxed">
                  {description}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="shrink-0 rounded-lg border border-brand-border bg-brand-white px-2.5 py-1.5 text-sm font-semibold text-brand-muted transition-colors hover:bg-brand-red-soft hover:text-brand-red"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}
