import { LegalPageView } from "@/app/modules/legal/ui/views/legal-page-view";
import { BRAND } from "@/lib/constants";

export default function Page() {
  return (
    <LegalPageView
      title="Privacy Policy"
      description={`How ${BRAND.name} collects, uses, and protects your personal information when you visit our site or make a donation.`}
      sections={[
        {
          heading: "Information we collect",
          body:
            "We collect only what is necessary to process donations, respond to inquiries, and improve our services, such as your name, email address, and payment details handled securely by our payment provider.",
        },
        {
          heading: "How we use your data",
          body:
            "Your information is used to issue donation receipts, communicate about our programmes in Lyon, and comply with legal obligations. We do not sell your data to third parties.",
        },
        {
          heading: "Your rights",
          body: `Under GDPR, you may request access, correction, or deletion of your personal data at any time by contacting ${BRAND.contactEmail}.`,
        },
      ]}
    />
  );
}
