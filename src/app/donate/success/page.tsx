import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Thank you, ${BRAND.name}`,
  description: "Your donation helps support children and families in Lyon.",
};

export default function DonateSuccessPage() {
  return (
    <div className="flex flex-col w-full bg-brand-bg min-h-[60vh]">
      <Container className="py-16 md:py-24 max-w-2xl text-center">
        <div className="rounded-2xl border border-brand-border bg-brand-white p-8 md:p-12 shadow-xs">
          <h1 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-4">
            Thank you for your gift
          </h1>
          <p className="text-brand-muted leading-relaxed mb-6">
            Your payment was processed securely by Stripe. A receipt will be sent to the email you
            provided at checkout. Every euro supports direct field action in Lyon, meals, school
            access, outreach, and family guidance.
          </p>
          <p className="text-sm text-brand-muted mb-8">
            Questions about your donation?{" "}
            <a href={`mailto:${BRAND.contactEmail}`} className="text-brand-red font-medium hover:underline">
              {BRAND.contactEmail}
            </a>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="primary" href="/">
              Back to home
            </Button>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-brand-border bg-brand-white px-6 py-3 text-sm font-semibold text-brand-text hover:border-brand-red/30 transition-colors"
            >
              Read our updates
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
