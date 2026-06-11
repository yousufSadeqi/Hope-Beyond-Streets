/** Trim spaces and optional quotes from .env values */
export function cleanEnvValue(value: string | undefined): string {
  if (!value) return "";
  return value.trim().replace(/^['"]|['"]$/g, "");
}

export function getStripeSecretKey(): string {
  const key = cleanEnvValue(process.env.STRIPE_SECRET_KEY);
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  return key;
}

export function getStripePublicKey(): string {
  return cleanEnvValue(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? process.env.STRIPE_PUBLIC_KEY
  );
}
