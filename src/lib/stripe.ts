import Stripe from "stripe";
import { getStripeSecretKey } from "@/lib/stripe-env";

let stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripe) {
    stripe = new Stripe(getStripeSecretKey(), {
      apiVersion: "2026-05-27.dahlia",
    });
  }
  return stripe;
}
