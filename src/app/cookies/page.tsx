import { LegalPageView } from "@/app/modules/legal/ui/views/legal-page-view";
import { BRAND } from "@/lib/constants";

export default function Page() {
  return (
    <LegalPageView
      title="Cookie Policy"
      description={`How ${BRAND.name} uses cookies and similar technologies on this website.`}
      sections={[
        {
          heading: "Essential cookies",
          body:
            "We use strictly necessary cookies to keep the site secure and functional, for example, to remember your session preferences during a donation flow.",
        },
        {
          heading: "Analytics",
          body:
            "When enabled, anonymised analytics help us understand how visitors use our site so we can improve the experience. No personally identifiable information is shared with advertisers.",
        },
        {
          heading: "Managing cookies",
          body:
            "You can control cookies through your browser settings. Disabling essential cookies may affect site functionality.",
        },
      ]}
    />
  );
}
