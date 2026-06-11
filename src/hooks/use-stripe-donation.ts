"use client";

import { useCallback, useState } from "react";

export function useStripeDonation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkout = useCallback(async (amount: number, frequency: "one-time" | "monthly") => {
    if (amount < 1) {
      setError("Please select or enter a valid donation amount.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, frequency }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Could not start secure checkout.");
      }

      window.location.assign(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start secure checkout.");
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { checkout, isLoading, error, clearError };
}
