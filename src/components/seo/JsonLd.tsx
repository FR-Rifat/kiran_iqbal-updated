import { business } from "@/lib/business";

type JsonLdProps = { data: Record<string, unknown> | Record<string, unknown>[] };

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: business.name,
  url: business.siteUrl,
  description: business.description,
  areaServed: business.serviceArea,
  ...(business.phone ? { telephone: business.phone } : {}),
  ...(business.email ? { email: business.email } : {}),
  ...(business.address ? { address: business.address } : {}),
};

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
