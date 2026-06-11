import type { Metadata } from "next";
import { HomeView } from "@/app/modules/home/ui/views/home-view";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BRAND.name}, Protecting Children in France`,
  description: BRAND.mission,
};

export default function Page() {
  return <HomeView />;
}
