"use client";

import QuoteForm from "@/components/sheard/QuoteForm";
import { FormEvent, useState } from "react";
import { FiCheckCircle, FiShield, FiTarget } from "react-icons/fi";

const proofPoints = [
  { label: "Written terms", icon: FiShield },
  { label: "Part information", icon: FiCheckCircle },
  { label: "Fitment review", icon: FiTarget },
];

const selectFields = ["Select Year", "Select Make", "Select Model", "Select Engine"];

const UsedTransmissionsHero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="overflow-hidden bg-[#E6F5E6]">
      <div className="container mx-auto grid gap-10 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-12 lg:py-16">
        <div className="order-2 lg:order-1">
          <QuoteForm />
        </div>

        <div className="order-1 pt-2 lg:order-2 lg:pt-8">
          <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
            Quality Used Transmissions
          </p>
          <h1 className="mt-3 max-w-150 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Quality <span className="text-green-600/80">Used Transmissions</span>{" "}
            Built To Keep You Moving.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Request a used transmission quote for your car, truck, or SUV. Vehicle details, VIN, and transmission information help us review the requested configuration before you purchase.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {proofPoints.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex min-h-10 items-center gap-2 rounded-md border border-green-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 shadow-sm"
              >
                <Icon aria-hidden className="size-4 text-green-600" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedTransmissionsHero;
