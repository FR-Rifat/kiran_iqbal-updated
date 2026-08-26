"use client";

import Image from "next/image";
import { FiCheckCircle, FiCreditCard, FiShield, FiTarget, FiTruck } from "react-icons/fi";
import QuoteForm from "@/components/sheard/QuoteForm";

const proofPoints = [
    { label: "A Grade Quality", icon: FiShield },
    { label: "Exact VIN Match Fitment", icon: FiCheckCircle },
    { label: "Fast ship out time 2-3 days", icon: FiTruck },
    { label: " Tested and inspected.  ", icon: FiCreditCard },
    { label: " 3 Years warranty Unlimited Miles", icon: FiShield },
];



const UsedEnginesHero = () => {
  return (
    <section className="overflow-hidden bg-[#E6F5E6]">
      <div className="mx-auto flex container flex-col gap-10 px-5 py-12 sm:py-14 lg:flex-row lg:items-center lg:gap-12 lg:py-16">
        {/* Quote Form */}
        <div className="order-2 w-full lg:order-1 lg:flex-1">
          <QuoteForm title="FIND YOUR ENGINE" />
        </div>

        {/* Hero Content */}
        <div className="order-1 flex w-full flex-1 flex-col items-start gap-5 lg:order-2">
          {/* Eyebrow */}
          <div className="inline-flex items-center rounded-full border border-green-600 bg-white px-3.5 py-1.5">
            <span className="font-['Barlow_Condensed'] text-sm font-semibold text-green-600 sm:text-base">
              ● 99.8% Customer Satisfaction Rate & 4.9 Star Ratings ⭐⭐⭐⭐ BBB
              - A Accredited Company
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-162.5 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.92] tracking-wide text-gray-900 sm:text-6xl lg:text-[64px] lg:leading-[0.96]">
            Quality <span className="text-green-600/80">Used Engines</span>
            <br />
            Built To Get You Back On The Road.
          </h1>

          {/* Description */}
          <p className="max-w-[620px] font-['Inter'] text-base leading-7 text-gray-600 sm:text-lg">
            we dont works with broad network of junkyards we are a network of
            more than 2000+ junkyards all across United States carrying over
            20million OEM engines and transmission in inventory
          </p>

          {/* Proof Points */}
          <div className="flex max-w-[620px] flex-wrap gap-2.5">
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

export default UsedEnginesHero;
