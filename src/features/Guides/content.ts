export type Guide = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faq: { question: string; answer: string }[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-buy-a-used-engine",
    title: "How to Buy a Used Engine",
    description: "A practical checklist for requesting a used engine quote and reviewing fitment, condition, shipping, and warranty details.",
    summary: "Buying a used engine starts with accurate vehicle information and ends with a written quote that identifies the exact assembly, price, delivery details, and warranty terms.",
    sections: [
      { heading: "Start with the vehicle details", paragraphs: ["Share the year, make, model, engine size, drivetrain, and VIN when available. These details help a parts specialist distinguish between similar engine configurations."], bullets: ["Vehicle identification number (VIN)", "Engine code or displacement", "Drive configuration and emissions specification", "Whether you need accessories or a long block"] },
      { heading: "Review the written quote", paragraphs: ["Before paying, confirm what assembly is included, the condition information supplied, and the complete delivered cost. Ask about shipping, taxes, refundable core charges, and any fees that apply to your order." ] },
      { heading: "Check warranty and delivery terms", paragraphs: ["Warranty coverage and freight requirements can differ by part. Read the written terms for the specific quote, including exclusions, installation requirements, inspection at delivery, and the procedure for reporting a problem."] },
    ],
    faq: [
      { question: "What information is needed for a used engine quote?", answer: "The most useful details are the vehicle year, make, model, engine size, and VIN when available. A VIN helps distinguish configurations that may look similar but are not interchangeable." },
      { question: "Is a quote a reservation?", answer: "No. A quote request starts a fitment and availability review. The written quote identifies the specific part, price, and terms before you decide whether to proceed." },
    ],
  },
  {
    slug: "vin-fitment-verification",
    title: "How VIN Fitment Verification Works",
    description: "Learn why VIN and part-identification details matter when sourcing a replacement engine or transmission.",
    summary: "VIN fitment verification compares your vehicle’s identifying details with the replacement part information so the quoted option can be reviewed for compatibility before purchase.",
    sections: [
      { heading: "Why a VIN helps", paragraphs: ["A vehicle model can have more than one engine, transmission, drivetrain, or emissions configuration. The VIN gives a parts specialist a more precise starting point than make and model alone."] },
      { heading: "What still needs confirmation", paragraphs: ["A VIN does not replace a review of the quoted part. Confirm the part number or code, included components, drivetrain configuration, and any installation requirements shown in your written quote."] },
      { heading: "Before installation", paragraphs: ["Compare the delivered part and documentation with the approved quote. Follow the manufacturer and warranty documentation for any required fluids, seals, programming, or professional installation steps."] },
    ],
    faq: [{ question: "Does a VIN guarantee compatibility?", answer: "A VIN provides important vehicle-identification data, but final compatibility depends on reviewing the specific quoted part and its documented configuration before purchase and installation." }],
  },
  {
    slug: "used-vs-remanufactured-engine",
    title: "Used Engine vs. Remanufactured Engine",
    description: "Compare used and remanufactured engine options by condition, documentation, price, availability, and warranty terms.",
    summary: "A used engine is a previously operated OEM assembly, while a remanufactured engine has been rebuilt to a remanufacturer’s specification. The right option depends on the exact assembly, budget, availability, and written coverage.",
    sections: [
      { heading: "Used engine considerations", paragraphs: ["Ask how the quoted assembly is identified, what condition information is available, which components are included, and what warranty terms apply. Availability can vary by vehicle configuration."] },
      { heading: "Remanufactured engine considerations", paragraphs: ["Ask the remanufacturer what was replaced or machined, which accessories are included, what installation requirements apply, and how its warranty is administered."] },
      { heading: "Compare the complete offer", paragraphs: ["Compare like for like: exact configuration, included parts, shipping, core requirements, labor exclusions, timing, and written warranty. A lower part price may not represent the lower total cost."] },
    ],
    faq: [{ question: "Which option is better?", answer: "Neither option is universally better. Compare the exact fitment, condition or rebuild documentation, delivered price, availability, and warranty terms for your vehicle and repair plan." }],
  },
  {
    slug: "freight-delivery-inspection",
    title: "What to Inspect Before Accepting Freight Delivery",
    description: "A delivery checklist for customers receiving a replacement engine or transmission by freight.",
    summary: "Inspect freight at delivery before signing the receipt. Record visible damage, take photos, and follow the carrier and seller instructions in your written shipping documentation.",
    sections: [
      { heading: "Inspect before signing", paragraphs: ["Look over the crate, pallet, straps, and outer packaging while the carrier is present. If you see damage, note it clearly on the delivery receipt and take photos before the carrier leaves."] },
      { heading: "Keep your records", paragraphs: ["Save the delivery receipt, photos, packaging, quote, and order documents. These records may be needed if you have a shipping or warranty question."] },
      { heading: "Report concerns promptly", paragraphs: ["Follow the reporting timeline and contact method in your shipping or warranty documentation. Do not discard packaging or alter the part until you have received instructions."] },
    ],
    faq: [{ question: "What should I do if freight appears damaged?", answer: "Document the condition on the bill of lading or delivery receipt, photograph the shipment, retain the packaging, and contact the seller using the reporting instructions supplied with your order." }],
  },
  {
    slug: "used-transmission-compatibility",
    title: "Used Transmission Compatibility Checklist",
    description: "Key details to review before buying a replacement used automatic, manual, or CVT transmission.",
    summary: "Transmission compatibility depends on more than the vehicle model. Review the VIN, transmission code, drivetrain, gearing, electronics, included components, and installation requirements against the written quote.",
    sections: [
      { heading: "Identify the transmission", paragraphs: ["Provide the vehicle VIN and any transmission or part number available. Clarify whether the vehicle is automatic, manual, CVT, two-wheel drive, all-wheel drive, or four-wheel drive."] },
      { heading: "Confirm the quoted configuration", paragraphs: ["Ask the specialist to identify the transmission code, drivetrain configuration, included components, and any programming or calibration considerations before approving the quote."] },
      { heading: "Prepare for installation", paragraphs: ["Review the documentation for required fluid, filters, seals, cooler service, and other installation conditions. These requirements can affect performance and warranty eligibility."] },
    ],
    faq: [{ question: "Can the same model use different transmissions?", answer: "Yes. A model can have different transmissions based on engine, drivetrain, model year, trim, or factory options. Use vehicle-identification and transmission-code details to review the specific quoted unit." }],
  },
];

export const guideSlugs = guides.map(({ slug }) => slug);
export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
