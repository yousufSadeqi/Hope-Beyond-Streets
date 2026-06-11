import type { Metadata } from "next";
import { AboutView } from "@/app/modules/about/ui/views/about-view";

export const metadata: Metadata = {
  title: "About, Mission & Approach",
  description:
    "Hope Beyond Streets, founded in Lyon in 2026. Our mission, values, programme model, and commitment to dignity and transparency for undocumented families.",
};

export default function Page() {
  return <AboutView />;
}
