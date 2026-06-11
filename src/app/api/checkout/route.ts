import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { BRAND } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const amount = Number(body.amount);
    const frequency = body.frequency === "monthly" ? "monthly" : "one-time";

    if (!Number.isFinite(amount) || amount < 1) {
      return NextResponse.json({ error: "Please enter an amount of at least €1." }, { status: 400 });
    }

    const amountCents = Math.round(amount * 100);
    const origin =
      request.headers.get("origin") ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000";

    const stripe = getStripe();
    const isMonthly = frequency === "monthly";

    const session = await stripe.checkout.sessions.create({
      mode: isMonthly ? "subscription" : "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: amountCents,
            product_data: {
              name: isMonthly
                ? `Monthly gift, ${BRAND.name}`
                : `One-time donation, ${BRAND.name}`,
              description: isMonthly
                ? "Monthly support for emergency aid, schooling, and family guidance in Lyon."
                : "One-time gift for emergency support, education, and outreach in Lyon.",
            },
            ...(isMonthly ? { recurring: { interval: "month" as const } } : {}),
          },
        },
      ],
      success_url: `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate?cancelled=1#give-money`,
      metadata: {
        frequency,
        amount_eur: String(amount),
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Could not start checkout." }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout]", error);
    return NextResponse.json(
      { error: "Payment could not be started. Please try again or contact us." },
      { status: 500 }
    );
  }
}
