"use client";

import Button from "@/components/ui/button";
import { FiCheckCircle } from "react-icons/fi";
import { useQuoteModal } from "@/components/sheard/QuoteModal";
import { business } from "@/lib/business";

const ShippingWarrantyHero = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="bg-[#e6f5e6] px-5 py-20 text-center sm:py-28">
      <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
        Home Delivery & 3-Year Limited Warranty
      </p>
      <h1 className="mx-auto mt-4 max-w-4xl font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
        Nationwide Shipping Made Simple.
        <br />
        <span className="text-green-600">Protection</span> That Lasts.
      </h1>
      <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
        Get convenient nationwide delivery and eligible 3-year limited warranty
        protection on A-grade used engines and transmissions. Written terms apply.
      </p>
      <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold text-gray-900">
        {["Nationwide delivery", "3-year limited warranty", "Dedicated customer support"].map(
          (item) => (
            <li key={item} className="flex items-center gap-2">
              <FiCheckCircle aria-hidden className="size-4 text-green-600" />
              {item}
            </li>
          ),
        )}
      </ul>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button
          variant="primary"
          onClick={openModal}
          className="!rounded-lg !px-6 !py-3 !text-lg"
        >
          Find My Part
        </Button>

        {business.phone && <Button
          href={`tel:${business.phone}`}
          variant="secondary"
          className="!rounded-lg !px-6 !py-3 !text-lg"
        >
          Call A&R Auto Parts
        </Button>}
      </div>
    </section>
  );
};

export default ShippingWarrantyHero;
