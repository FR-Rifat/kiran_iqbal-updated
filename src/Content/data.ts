import { FiShield, FiTruck, FiCheckCircle, FiCreditCard, FiTarget, FiHeadphones } from "react-icons/fi";



export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Used Engines", href: "/used-engines" },
  { label: "Used Transmissions", href: "/used-transmissions" },
  { label: "Buying Guides", href: "/guides/how-to-buy-a-used-engine" },
  { label: "Contact", href: "/contact" },
];


export const trustBarItems = [
  {
    title: "Written quote",
    subtitle: "Part and price details",
    icon: FiShield,
  },
  {
    title: "Fitment review",
    subtitle: "Vehicle details checked",
    icon: FiTruck,
  },
  {
    title: "Delivery options",
    subtitle: "Confirmed in your quote",
    icon: FiCheckCircle,
  },
  {
    title: "Clear next steps",
    subtitle: "Review before purchase",
    icon: FiCreditCard,
  },
];

export const howItWorksData = {
  eyebrow: "Simple & Fast",
  title: "Get The Right Part In 3 Steps",
  description:
    "Share your vehicle details, review the written quote, and confirm the part information before purchase.",
  steps: [
    {
      number: "01",
      title: "Get Your Quote",
      description:
        "Tell us the year, make, model and part. A VIN or part number can help us review the requested configuration.",
    },
    {
      number: "02",
      title: "Confirm & Pay",
      description:
        "Review the quoted part, included components, price, delivery options, and written terms before you decide.",
    },
    {
      number: "03",
      title: "Fast Ship-Out",
      description:
        "Once confirmed, follow the shipping and delivery instructions included with your order documentation.",
    },
  ],
};

export const howItWorksData2 = {
  eyebrow: "Simple & Fast",
  title: "GET THE RIGHT TRANSMISSION IN 3 STEPS",
  description:
    "Share your vehicle details, review the written quote, and confirm the part information before purchase.",
  steps: [
    {
      number: "01",
      title: "GET YOUR QUOTE",
      description:
        "Tell us the year, make, model and part. A VIN or part number can help us review the requested configuration.",
    },
    {
      number: "02",
      title: "CONFIRM & PAY",
      description:
        "Review the quoted part, included components, price, delivery options, and written terms before you decide.",
    },
    {
      number: "03",
      title: "FAST SHIP-OUT",
      description:
        "Once confirmed, follow the shipping and delivery instructions included with your order documentation.",
    },
  ],
};

export const HowitWork2 = {
  eyebrow: "DELIVERY DETAILS",
  title: "REVIEW DELIVERY BEFORE YOU BUY",
  description:
    "Shipping method, destination requirements, timing, and charges are confirmed in the written quote for your part.",
  steps: [
    {
      number: "01",
      title: "DELIVERY LOCATION",
      description:
        "Your quote identifies any residential, business, or freight-terminal requirements that apply.",
    },
    {
      number: "02",
      title: "FREIGHT PREPARATION",
      description:
        "Review unloading, inspection, and delivery-receipt instructions before the shipment arrives.",
    },
    {
      number: "03",
      title: "SHIPMENT UPDATES",
      description:
        "Available tracking and carrier information are provided in your order documentation.",
    },
  ],
};

export const whyChooseUsData = {
  eyebrow: "Why Buyers Choose Us",
  title: "Easy Buying. Better Parts.",
  description: "The details that matter before you purchase a replacement part.",
  features: [
    {
      title: "Written Warranty Terms",
      description: "Review the specific coverage, exclusions, and claim steps supplied for the quoted part.",
      icon: FiShield,
    },
    {
      title: "Part Information",
      description: "Ask what assembly is included and what condition information is available for the quoted part.",
      icon: FiCheckCircle,
    },
    {
      title: "Fitment Review",
      description: "Your vehicle details and VIN, when available, help review compatibility before you purchase.",
      icon: FiTarget,
    },
    {
      title: "Delivery Details",
      description: "Shipping timing, location requirements, and charges are confirmed in the written quote.",
      icon: FiTruck,
    },
    {
      title: "Complete Pricing",
      description: "Review the part price and applicable shipping, taxes, fees, and core charges before payment.",
      icon: FiCreditCard,
    },
    {
      title: "Clear Documentation",
      description: "Keep your quote, order documents, and delivery records for reference.",
      icon: FiHeadphones,
    },
  ],
};

export const paymentOptionsData = {
  eyebrow: "Pay Your Way",
  title: "Review Your Quote Before You Buy",
  description: "Payment options, if available, are shown in the written quote for your part.",
  options: [
    {
      title: "Part Price",
      description: "Your quote identifies the price for the specific part and included components.",
    },
    {
      title: "Delivery Charges",
      description: "Shipping method, destination requirements, timing, and charges are discussed before payment.",
    },
    {
      title: "Terms and Coverage",
      description: "Review warranty, returns, core charges, taxes, and other applicable terms in writing.",
    },
  ],
};

export const testimonialsData = {
  eyebrow: "Before You Purchase",
  title: "Review The Details That Matter",
  testimonials: [],
};

export const faqData = {
  eyebrow: "Good To Know",
  title: "Questions, Answered",
  faqs: [
    {
      question: "How Fast Will I Get My Part?",
      answer:
        "Delivery timing and tracking availability depend on the quoted part, carrier, and destination. These details are confirmed before payment.",
    },
    {
      question: "Are Your Engines And Transmissions Tested?",
      answer:
        "Ask your specialist what condition information and documentation are available for the specific part in your quote.",
    },
    {
      question: "What Does The Warranty Cover?",
      answer:
        "Warranty availability, coverage, exclusions, and claim steps vary by quoted part and are supplied in writing before purchase.",
    },
    {
      question: "How Do I Know It Will Fit My Vehicle?",
      answer:
        "Provide accurate vehicle details and a VIN when available. Confirm the exact quoted part, code, and configuration before purchase and installation.",
    },
    {
      question: "What Will My Quote Include?",
      answer:
        "Your quote should identify the part, included components, pricing, applicable shipping, taxes, fees, core charges, warranty terms, and delivery requirements.",
    },
    {
      question: "Can You Ship To My Mechanic's Shop?",
      answer:
        "Eligible delivery locations and freight requirements are confirmed in your quote. Review the delivery documentation before accepting freight.",
    },
  ],
};

export const footerData = {
  description: "Request a quote for a replacement used engine or transmission. Part, fitment, delivery, pricing, and warranty details are confirmed before purchase.",
  hours: "Hours are confirmed when contact details are published.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Used Engines", href: "/used-engines" },
    { label: "Used Transmissions", href: "/used-transmissions" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Shipping & Warranty", href: "/shipping-warranty" },
    { label: "Refunds & Returns", href: "/refunds-returns" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
  copyright: "© 2026 A&R Auto Parts. All rights reserved.",
  tagline: "Reliable recycled automotive parts, responsibly sourced.",
};

export const aboutData = {
  eyebrow: "ABOUT A&R AUTO PARTS",
  title: {
    normal1: "PERFORMANCE",
    highlight1: "YOU",
    normal2: "CAN",
    highlight2: "TRUST.",
  },
  description:
    "A&R Auto Parts helps customers request quotes for replacement used engines and transmissions. We provide the available part, pricing, fitment, shipping, and warranty information in writing before a purchase decision.",
  badges: ["Vehicle details reviewed", "Written quote", "Clear purchase terms"],
  rating: { stars: 0, text: "Review the quoted part details before purchase." },
};

export const trustBarData = [
  {
    title: "WRITTEN QUOTE",
    subtitle: "Part and price details",
    icon: "warranty",
  },
  {
    title: "FITMENT REVIEW",
    subtitle: "Vehicle details checked",
    icon: "shipping",
  },
  {
    title: "DELIVERY DETAILS",
    subtitle: "Confirmed before payment",
    icon: "tested",
  },
  {
    title: "CLEAR TERMS",
    subtitle: "Review before purchase",
    icon: "financing",
  },
];

export const WHOWEARE = {
  eyebrow: "WHO WE ARE",
  title: "GET THE RIGHT PART IN 3 STEPS",
  description: "A&R Auto Parts helps customers request a written quote and review the part details before purchase.",
  steps: [
    {
      number: "01",
      title: "VEHICLE DETAILS",
      description: "Accurate vehicle information helps start a compatibility review.",
    },
    {
      number: "02",
      title: "WRITTEN QUOTE",
      description: "Review the available part, price, shipping, taxes, and charges before payment.",
    },
    {
      number: "03",
      title: "ORDER DOCUMENTS",
      description: "Keep the quote, warranty, shipping, and delivery records for your order.",
    },
  ],
};

export const HowitWork1 = {
  eyebrow: "SIMPLE & FAST",
  title: "GET THE RIGHT ENGINE IN 3 STEPS",
  description:
    "Share your vehicle information, review the written quote, and confirm the specific engine details before purchase.",
  steps: [
    {
      number: "01",
      title: "GET YOUR QUOTE",
      description:
        "Tell us the year, make, model, engine details, and VIN when available so we can review the requested configuration.",
    },
    {
      number: "02",
      title: "CONFIRM & PAY",
      description:
        "Review the quoted engine, included components, delivered price, warranty terms, and delivery information before deciding.",
    },
    {
      number: "03",
      title: "FAST SHIP-OUT",
      description:
        "Follow the shipping and freight-inspection instructions supplied with your order documentation.",
    },
  ],
};

export const standards = [
  {
    title: "WRITTEN WARRANTY TERMS",
    description: "Coverage and exclusions are identified for the specific quoted part.",
    icon: FiShield,
  },
  {
    title: "PART INFORMATION",
    description: "Ask what condition information is available for the quoted part.",
    icon: FiCheckCircle,
  },
  {
    title: "FITMENT REVIEW",
    description: "Vehicle details and VIN, when available, help review compatibility.",
    icon: FiTarget,
  },
  {
    title: "DELIVERY DETAILS",
    description: "Timing, method, and charges are confirmed in your quote.",
    icon: FiTruck,
  },
  {
    title: "FLEXIBLE PAYMENT OPTIONS",
    description: "Multiple payment options available.",
    icon: FiCreditCard,
  },
  {
    title: "REAL U.S. SUPPORT",
    description: "Talk directly with knowledgeable specialists.",
    icon: FiHeadphones,
  },
];
