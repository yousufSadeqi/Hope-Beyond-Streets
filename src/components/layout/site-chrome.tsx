"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

function isBlogArticlePath(pathname: string) {
  return pathname.startsWith("/blog/") && pathname.length > "/blog/".length;
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNav = isBlogArticlePath(pathname);

  return (
    <>
      {!hideNav && <Navbar />}
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
