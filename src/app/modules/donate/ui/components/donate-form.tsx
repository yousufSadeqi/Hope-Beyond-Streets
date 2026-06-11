"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DONATION_TIERS, BRAND } from "@/lib/constants";
import { DONATE_MONEY } from "@/app/modules/donate/data/content";
import { useStripeDonation } from "@/hooks/use-stripe-donation";

export function DonateForm() {
  const searchParams = useSearchParams();
  const { checkout, isLoading, error, clearError } = useStripeDonation();
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(35);
  const [customAmount, setCustomAmount] = useState<string>("");

  const wasCancelled = searchParams.get("cancelled") === "1";

  useEffect(() => {
    const amountParam = searchParams.get("amount");
    const frequencyParam = searchParams.get("frequency");

    if (frequencyParam === "monthly" || frequencyParam === "one-time") {
      setFrequency(frequencyParam);
    }

    if (amountParam) {
      const parsed = Number(amountParam);
      if (parsed > 0) {
        const tierMatch = DONATION_TIERS.find((t) => t.amount === parsed);
        if (tierMatch) {
          setSelectedAmount(parsed);
          setCustomAmount("");
        } else {
          setSelectedAmount(null);
          setCustomAmount(String(parsed));
        }
      }
    }
  }, [searchParams]);

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
      ? `Your €${currentAmount} gift supports direct field action, meals, school access, outreach supplies, or family guidance for undocumented families in France.`
      : "Select or enter an amount to see the impact of your donation.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void checkout(currentAmount, frequency);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        {wasCancelled && (
          <div className="rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-sm text-brand-muted">
            Checkout was cancelled. You can try again when you&apos;re ready.
          </div>
        )}

        <div className="rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-sm text-brand-text leading-relaxed">
          Payments are processed securely by{" "}
          <span className="font-semibold">Stripe</span>. You will be redirected to complete your
          card payment, we never store card details on our servers.
        </div>

        <div className="bg-brand-white border border-brand-border rounded-2xl p-6 md:p-8 shadow-xs">
          <h2 className="text-xl font-bold text-brand-text mb-2">1. Choose your gift type</h2>
          <p className="text-sm text-brand-muted mb-6">
            One-time gifts fund immediate outreach. Monthly giving sustains schooling and follow-up
            work as our programmes grow.
          </p>

          <div className="grid grid-cols-2 p-1 bg-brand-bg rounded-lg border border-brand-border mb-8 max-w-xs">
            <button
              type="button"
              onClick={() => {
                setFrequency("one-time");
                clearError();
              }}
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
              onClick={() => {
                setFrequency("monthly");
                clearError();
              }}
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

          <h2 className="text-xl font-bold text-brand-text mb-6">2. Select donation amount</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {DONATION_TIERS.map((tier) => {
              const isSelected = selectedAmount === tier.amount;
              return (
                <button
                  key={tier.amount}
                  type="button"
                  onClick={() => handleTierSelect(tier.amount)}
                  className={cn(
                    "text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red",
                    isSelected
                      ? "border-brand-red bg-brand-red-soft/30"
                      : "border-brand-border bg-brand-white hover:border-brand-red/20 hover:bg-brand-bg"
                  )}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-lg font-bold text-brand-text">{tier.label}</span>
                    <span className="text-2xl font-black text-brand-red">€{tier.amount}</span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">{tier.impact}</p>
                </button>
              );
            })}
          </div>

          <div className="space-y-2">
            <label htmlFor="custom-amount" className="text-sm font-semibold text-brand-text">
              Or enter a custom amount (€)
            </label>
            <div className="relative rounded-lg shadow-xs">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="text-brand-muted text-base">€</span>
              </div>
              <input
                type="text"
                id="custom-amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Other amount"
                className="block w-full rounded-lg border border-brand-border bg-brand-white py-3 pl-9 pr-4 text-brand-text placeholder-brand-muted focus:border-brand-red focus:ring-1 focus:ring-brand-red focus:outline-none text-base transition-colors duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-brand-white border border-brand-border rounded-2xl p-6 md:p-8 shadow-xs sticky top-28 space-y-6">
          <h2 className="text-lg font-bold text-brand-text">Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-brand-border">
              <span className="text-sm text-brand-muted">Gift type</span>
              <span className="text-sm font-semibold text-brand-text capitalize">{frequency}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-brand-border">
              <span className="text-sm text-brand-muted">Field location</span>
              <span className="text-sm font-semibold text-brand-text">{BRAND.location}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-brand-border">
              <span className="text-sm text-brand-muted">Tax deductible</span>
              <span className="text-sm font-semibold text-brand-text">Yes (French law)</span>
            </div>
            <div className="flex justify-between items-baseline pt-4">
              <span className="text-base font-bold text-brand-text">Total gift</span>
              <span className="text-3xl font-black text-brand-red">€{currentAmount}</span>
            </div>
          </div>

          <div className="bg-brand-bg rounded-xl p-4 border border-brand-border">
            <p className="text-xs text-brand-muted leading-relaxed">
              <span className="font-bold text-brand-text block mb-1">Your impact</span>
              {impactText}
            </p>
          </div>

          {error && (
            <p className="rounded-lg border border-brand-red/20 bg-brand-red-soft/30 px-3 py-2 text-xs text-brand-text">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <Button
              type="submit"
              variant="primary"
              className="w-full justify-center py-3 text-base shadow-md"
              disabled={currentAmount <= 0 || isLoading}
            >
              {isLoading ? "Redirecting…" : DONATE_MONEY.cta}
            </Button>
          </form>

          <p className="text-[10px] text-center text-brand-muted leading-relaxed">
            Every gift supports direct field programmes in Lyon. Receipt sent by Stripe after
            payment.
          </p>
        </div>
      </div>
    </div>
  );
}
