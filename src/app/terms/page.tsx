import { LegalPageView } from "@/app/modules/legal/ui/views/legal-page-view";
import { BRAND } from "@/lib/constants";

export default function Page() {
  return (
    <LegalPageView
      title="Terms of Use"
      description={`The terms governing your use of the ${BRAND.name} website and donation platform.`}
      sections={[
        {
          heading: "Use of this website",
          body: `By accessing ${BRAND.domain}, you agree to use this site for lawful purposes related to learning about or supporting our humanitarian work in Lyon.`,
        },
        {
          heading: "Donations",
          body:
            "All donations are voluntary and non-refundable except where required by law. We commit to directing funds to child protection programmes as described on our site.",
        },
        {
          heading: "Content",
          body: `Campaign posters, blog content, and materials on this site may be shared for advocacy purposes. Commercial use requires written permission from ${BRAND.name}.`,
        },
      ]}
    />
  );
}
