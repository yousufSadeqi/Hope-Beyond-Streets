"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/utils";
import { BRAND, DONATION_TIERS } from "@/lib/constants";
import { HOME_DONATION, HOME_HERO } from "@/app/modules/home/data/content";
import { useStripeDonation } from "@/hooks/use-stripe-donation";

const hasMobileHero = !HOME_HERO.imageMobile.startsWith("#");

function MobileHeroImage() {
  if (hasMobileHero) {
    return (
      <PlaceholderImage
        src={HOME_HERO.imageMobile}
        alt={HOME_HERO.imageMobileAlt}
        className="absolute inset-0 h-full w-full"
        imageClassName="object-[center_40%]"
        overlay
        priority
        sizes="(max-width: 1023px) 100vw, 0px"
      />
    );
  }

  return (
    <PlaceholderImage
      src={HOME_HERO.image}
      alt={HOME_HERO.imageAlt}
      className="absolute inset-0 h-full w-full"
      imageClassName="object-[center_35%]"
      overlay
      priority
      sizes="100vw"
    />
  );
}

interface DonationPanelProps {
  onSubmit: (e: React.FormEvent) => void;
  frequency: "one-time" | "monthly";
  setFrequency: (f: "one-time" | "monthly") => void;
  selectedAmount: number | null;
  handleTierSelect: (amount: number) => void;
  customAmount: string;
  handleCustomAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  impactText: string;
  currentAmount: number;
  compact?: boolean;
  isLoading?: boolean;
  error?: string | null;
}

function DonationPanel({
  onSubmit,
  frequency,
  setFrequency,
  selectedAmount,
  handleTierSelect,
  customAmount,
  handleCustomAmountChange,
  impactText,
  currentAmount,
  compact = false,
  isLoading = false,
  error = null,
}: DonationPanelProps) {
  return (
    <>
      <h2
        className={cn(
          "font-bold text-center tracking-wider uppercase text-brand-text",
          compact ? "text-sm mb-1" : "text-sm mb-1"
        )}
      >
        {HOME_DONATION.title}
      </h2>
      <p
        className={cn(
          "text-center text-brand-muted",
          compact ? "text-xs mb-5" : "text-xs mb-6"
        )}
      >
        {HOME_DONATION.subtitle}
      </p>

      <form onSubmit={onSubmit} className={cn(compact ? "space-y-4" : "space-y-5")}>
        <div className="grid grid-cols-2 p-1 bg-brand-bg rounded-lg border border-brand-border">
          <button
            type="button"
            onClick={() => setFrequency("one-time")}
            className={cn(
              "py-2.5 text-xs font-bold rounded-md transition-all cursor-pointer select-none",
              frequency === "one-time"
                ? "bg-brand-red text-brand-white shadow-xs"
                : "text-brand-muted hover:text-brand-text"
            )}
          >
            ONE-TIME
          </button>
          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={cn(
              "py-2.5 text-xs font-bold rounded-md transition-all cursor-pointer select-none",
              frequency === "monthly"
                ? "bg-brand-red text-brand-white shadow-xs"
                : "text-brand-muted hover:text-brand-text"
            )}
          >
            MONTHLY
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {DONATION_TIERS.map((tier) => {
            const isSelected = selectedAmount === tier.amount;
            return (
              <button
                key={tier.amount}
                type="button"
                onClick={() => handleTierSelect(tier.amount)}
                className={cn(
                  "py-3 text-sm font-bold rounded-lg border transition-all cursor-pointer select-none focus:outline-none",
                  isSelected
                    ? "border-brand-red bg-brand-red text-brand-white shadow-xs"
                    : "border-brand-border bg-brand-white text-brand-text hover:border-brand-red/30 hover:bg-brand-bg"
                )}
              >
                €{tier.amount}
              </button>
            );
          })}
        </div>

        <div className="bg-brand-red-soft/30 border border-brand-red/10 rounded-xl p-3 text-xs text-brand-text/90 leading-relaxed min-h-[44px] flex items-center">
          <p className="line-clamp-3 lg:line-clamp-none">{impactText}</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span className="text-brand-muted text-sm font-semibold">€</span>
          </div>
          <input
            type="text"
            value={customAmount}
            onChange={handleCustomAmountChange}
            placeholder="Enter other amount"
            className="block w-full rounded-lg border border-brand-border bg-brand-white py-3 pl-9 pr-4 text-brand-text placeholder-brand-muted focus:border-brand-red focus:ring-1 focus:ring-brand-red focus:outline-none text-sm transition-colors"
          />
        </div>

        {error && (
          <p className="rounded-lg border border-brand-red/20 bg-brand-red-soft/30 px-3 py-2 text-xs text-brand-text">
            {error}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          className="w-full py-3.5 text-base font-bold"
          disabled={currentAmount <= 0 || isLoading}
        >
          {isLoading ? "Redirecting…" : HOME_DONATION.cta}
        </Button>
        <p className="text-[11px] text-center text-brand-muted leading-relaxed">
          {HOME_DONATION.checkoutNote}
        </p>
      </form>
    </>
  );
}

export function HomeHero() {
  const { checkout, isLoading, error, clearError } = useStripeDonation();
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(35);
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleTierSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    clearError();
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "" || /^[0-9\b]+$/.test(val)) {
      setCustomAmount(val);
      setSelectedAmount(null);
      clearError();
    }
  };

  const currentAmount = selectedAmount !== null ? selectedAmount : Number(customAmount) || 0;

  const activeTier = DONATION_TIERS.find((t) => t.amount === selectedAmount);
  const impactText = activeTier
    ? activeTier.impact
    : currentAmount > 0
      ? `Provides €${currentAmount} of direct funding for emergency shelter, meals, and schooling support.`
      : "Select or enter an amount to see the impact of your donation.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void checkout(currentAmount, frequency);
  };

  const donationProps = {
    onSubmit: handleSubmit,
    frequency,
    setFrequency: (f: "one-time" | "monthly") => {
      setFrequency(f);
      clearError();
    },
    selectedAmount,
    handleTierSelect,
    customAmount,
    handleCustomAmountChange,
    impactText,
    currentAmount,
    isLoading,
    error,
  };

  return (
    <>
      {/* Mobile: hero image + slogan, then full-width white donation strip */}
      <div className="lg:hidden">
        <section className="relative h-[min(42vh,320px)] min-h-[240px] overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 z-0">
            <MobileHeroImage />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />
          </div>

          <Container className="relative z-10 flex h-full flex-col justify-end pb-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-white/80">
              {HOME_HERO.eyebrow}
            </p>
            <h1 className="text-xl font-extrabold tracking-tight leading-snug text-brand-white">
              {HOME_HERO.title}{" "}
              <span className="text-brand-red">{HOME_HERO.highlight}</span>
            </h1>
            <p className="mt-2 max-w-sm text-sm text-brand-white/85 leading-relaxed">
              {HOME_HERO.subhead}
            </p>
          </Container>
        </section>

        <section className="w-full bg-brand-white text-brand-text">
          <div className="px-4 py-6 sm:px-6">
            <DonationPanel {...donationProps} compact />
            <div className="mt-5 flex gap-3">
              <Button
                variant="secondary"
                href={`mailto:${BRAND.contactEmail}?subject=Volunteer%20inquiry`}
                className="flex-1 py-2.5 text-xs"
              >
                Volunteer
              </Button>
              <Button
                variant="secondary"
                href={`mailto:${BRAND.contactEmail}?subject=Request%20for%20help`}
                className="flex-1 py-2.5 text-xs"
              >
                Get Help
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop: side-by-side hero with card donation panel */}
      <section className="relative hidden lg:flex min-h-[640px] items-center overflow-hidden bg-zinc-950 py-20">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            src={HOME_HERO.image}
            alt={HOME_HERO.imageAlt}
            className="absolute inset-0 h-full w-full"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/20 to-transparent" />
        </div>

        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-7 flex flex-col text-left space-y-5 text-brand-white pr-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-white/80">
                {HOME_HERO.eyebrow}
              </p>

              <h1 className="max-w-xl text-4xl xl:text-[3.25rem] font-extrabold tracking-tight leading-[1.08]">
                {HOME_HERO.title}{" "}
                <span className="text-brand-red">{HOME_HERO.highlight}</span>
              </h1>

              <p className="max-w-lg text-lg text-brand-white/85 leading-relaxed">
                {HOME_HERO.subhead}
              </p>
            </div>

            <div className="col-span-5 flex justify-end">
              <div className="w-full max-w-[320px] rounded-2xl border border-brand-border bg-brand-white p-6 shadow-2xl text-brand-text">
                <DonationPanel {...donationProps} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
