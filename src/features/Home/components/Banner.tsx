"use client";

import { FiShield, FiTruck, FiCheckCircle, FiCreditCard } from "react-icons/fi";
import QuoteForm from "@/components/sheard/QuoteForm";
import { approvedClaims } from "@/lib/business";

const Hero = () => {
  const trustItems = [
    { label: "Written quote", icon: FiShield },
    { label: "Fitment review", icon: FiCheckCircle },
    { label: "Delivery details", icon: FiTruck },
    { label: "Full-price review", icon: FiCreditCard },
  ];

  return (
    <section className="w-full bg-[#E6F5E6]">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-8 px-5 py-10 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:py-16">
        <div className="order-2 lg:order-1">
          <QuoteForm />
        </div>

        <div className="order-1 flex min-w-0 flex-col items-start pt-1 lg:order-2 lg:pt-5">
          <div className="mb-3 rounded-full bg-white px-3 py-1 outline -outline-offset-1 outline-green-600">
            <span className="text-[11px] font-semibold uppercase leading-5 tracking-[.08em] text-green-600 font-['Barlow_Condensed']">
              ● Request a replacement-part quote
            </span>
          </div>

          <h1 className="max-w-147.5 text-[42px] font-extrabold uppercase leading-[.92] tracking-[.015em] text-gray-900 font-['Barlow_Condensed'] sm:text-[52px] lg:text-[64px]">
            Used <span className="text-green-600/80">Engines</span> &{" "}
            <span className="text-green-600/80">Transmissions</span> <br />
            Quote Request
          </h1>

          <p className="mt-5 max-w-147.5 text-[15px] leading-6 text-slate-600 font-['Inter'] sm:text-base">
            Send your vehicle information to start a quote request. {approvedClaims.fitment} {approvedClaims.pricing}
          </p>

          <div className="mt-5 flex max-w-155 flex-wrap items-center gap-2">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 outline-1 -outline-offset-1 outline-green-600"
                >
                  <Icon className="size-3.5 text-green-600" />
                  <span className="text-[11px] font-semibold leading-5 text-green-600 font-['Inter']">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
