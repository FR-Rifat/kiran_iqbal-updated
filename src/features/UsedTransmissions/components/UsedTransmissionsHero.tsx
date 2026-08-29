"use client";

import QuoteForm from "@/components/sheard/QuoteForm";
import { FiCheckCircle, FiCreditCard, FiShield, FiTarget, FiTruck } from "react-icons/fi";

const proofPoints = [
  { label: "A Grade Quality", icon: FiShield },
  { label: "Exact VIN Match Fitment", icon: FiCheckCircle },
  { label: "Fast ship out time 2-3 days", icon: FiTruck },
  { label: "Tested and inspected.", icon: FiCreditCard },
      { label: " 98% Customer Satisfaction", icon: FiTarget },
  { label: "3 Years warranty Unlimited Miles", icon: FiShield },
];

const UsedTransmissionsHero = () => {
  return (
    <section className="overflow-hidden bg-[#E6F5E6]">
      <div className="container mx-auto grid gap-10 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-12 lg:py-16">
        <div className="order-2 lg:order-1">
          <QuoteForm title="FIND YOUR TRANSMISSION" />
        </div>

        <div className="order-1 pt-2 lg:order-2 lg:pt-8">
          <div className="inline-flex items-center rounded-full border border-green-600 bg-white px-3.5 py-1.5">
            <span className="font-['Barlow_Condensed'] text-sm font-semibold text-green-600 sm:text-base">
              {/* ● 99.8% Customer Satisfaction Rate &amp; 4.9 Star Ratings ⭐⭐⭐⭐ BBB */}
              98% Customer Satisfaction
              {/* - A Accredited Company */}
            </span>
          </div>
          <h1 className="mt-3 max-w-150 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Quality <span className="text-green-600/80">Used Transmissions</span>{" "}
            Built To Keep You Moving.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Forget the junkyard. Find your transmission in 10 minutes, get expert
            advice, and receive FREE delivery—all backed by a 3-year,
            unlimited-mileage warranty. A&amp;R takes the hassle out of finding
            quality parts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {proofPoints.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-green-600 bg-white px-3.5 py-1.5 font-['Inter'] text-xs font-semibold text-green-600 transition-all duration-300 hover:bg-green-50 sm:text-sm"
              >
                <Icon aria-hidden className="size-3.5 shrink-0" />
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
