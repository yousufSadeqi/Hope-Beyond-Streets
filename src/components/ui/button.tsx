import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
}

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 px-6 py-3 cursor-pointer select-none active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-brand-red text-brand-white hover:bg-brand-red-dark focus-visible:outline-brand-red border border-transparent shadow-sm",
    secondary:
      "bg-brand-white text-brand-red border border-brand-border hover:bg-brand-red-soft hover:border-brand-red/30 focus-visible:outline-brand-red shadow-xs",
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
