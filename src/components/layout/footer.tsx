import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/layout/brand-logo";
import { BRAND, FOOTER_SECTIONS } from "@/lib/constants";

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-brand-muted transition-colors hover:border-brand-red/30 hover:text-brand-red hover:bg-brand-red-soft/40"
    >
      {children}
    </a>
  );
}

function FooterLinkItem({
  name,
  href,
  external,
}: {
  name: string;
  href: string;
  external?: boolean;
}) {
  const className =
    "text-sm text-brand-muted hover:text-brand-red transition-colors duration-200 leading-snug";

  if (external || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {name}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {name}
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto border-t border-brand-border bg-brand-white text-brand-text">
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <BrandLogo variant="footer" showName />
            <p className="max-w-sm text-sm leading-relaxed text-brand-muted">
              {BRAND.mission}
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <FooterLinkItem
                        name={link.name}
                        href={link.href}
                        external={link.external}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter / updates */}
        <div className="mt-14 rounded-2xl border border-brand-border bg-brand-bg p-6 md:p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div className="mb-5 md:mb-0 md:max-w-md">
            <h3 className="text-base font-semibold text-brand-text">Stay close to the work</h3>
            <p className="mt-1.5 text-sm text-brand-muted leading-relaxed">
              Read field updates on our blog or download campaign posters to share our
              mission in your school, workplace, or community.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-brand-border bg-brand-white px-5 py-2.5 text-sm font-semibold text-brand-text transition-colors hover:border-brand-red/30 hover:text-brand-red"
            >
              Read the Blog
            </Link>
            <Link
              href="/posters"
              className="inline-flex items-center justify-center rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Download Posters
            </Link>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <Container>
          <div className="flex flex-col gap-4 py-6 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {currentYear} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <div className="flex items-center gap-2">
                <SocialIconLink href={BRAND.social.instagram} label="Instagram">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.122v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.122.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </SocialIconLink>
                <SocialIconLink href={BRAND.social.youtube} label="YouTube">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.419ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </SocialIconLink>
              </div>
              <span className="hidden sm:inline text-brand-border" aria-hidden="true">|</span>
              <span>{BRAND.location}</span>
              <span className="hidden sm:inline text-brand-border" aria-hidden="true">|</span>
              <a
                href={`mailto:${BRAND.contactEmail}`}
                className="hover:text-brand-red transition-colors"
              >
                {BRAND.contactEmail}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
