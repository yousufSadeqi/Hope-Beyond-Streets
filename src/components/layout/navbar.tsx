"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/layout/brand-logo";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-white/95 backdrop-blur-xs">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <BrandLogo variant="nav" showName className="min-w-0" />

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-red py-2 px-1 relative",
                    isActive ? "text-brand-red font-semibold" : "text-brand-text/85"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-brand-red rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-2 text-brand-text md:hidden cursor-pointer rounded-md hover:bg-brand-bg transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden border-b border-brand-border bg-brand-white px-4 py-6">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors py-2 border-b border-brand-bg",
                    isActive ? "text-brand-red font-semibold" : "text-brand-text"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
