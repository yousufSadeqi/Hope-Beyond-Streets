import React from "react";
import { HomeHero } from "@/app/modules/home/ui/components/home-hero";
import { HomeVideo } from "@/app/modules/home/ui/components/home-video";
import { HomeProblem } from "@/app/modules/home/ui/components/home-problem";
import { HomePrograms } from "@/app/modules/home/ui/components/home-programs";
import { HomeProof } from "@/app/modules/home/ui/components/home-proof";
import { HomeBlogTeaser } from "@/app/modules/home/ui/components/home-blog-teaser";

export function HomeView() {
  return (
    <div className="flex flex-col w-full">
      <HomeHero />
      <HomeVideo />
      <HomeProblem />
      <HomePrograms />
      <HomeProof />
      <HomeBlogTeaser />
    </div>
  );
}
