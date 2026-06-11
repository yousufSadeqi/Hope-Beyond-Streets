import React, { Suspense } from "react";
import type { Metadata } from "next";
import { BlogView } from "@/app/modules/blog/ui/views/blog-view";

export const metadata: Metadata = {
  title: "Blog, Field Reports & Child Protection Insights",
  description:
    "Stories, field reports, and updates from our work protecting undocumented children and families across France.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-brand-muted text-sm">Loading blog…</div>}>
      <BlogView />
    </Suspense>
  );
}
