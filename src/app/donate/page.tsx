import type { Metadata } from "next";
import { DonateView } from "@/app/modules/donate/ui/views/donate-view";

export const metadata: Metadata = {
  title: "Give, Money, Time, Supplies & Housing",
  description:
    "Support undocumented families in France through financial gifts, clothing donations, volunteering, teaching, childcare, or housing offers.",
};

export default function Page() {
  return <DonateView />;
}
