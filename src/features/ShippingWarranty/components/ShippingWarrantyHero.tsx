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
        Delivery and warranty information
      </p>
      <h1 className="mx-auto mt-4 max-w-4xl font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
        Shipping Made Simple.
        <br />
        <span className="text-green-600">Warranty</span> Details in Writing.
      </h1>
      <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
        We make it easy to understand how your engine or transmission is shipped,
        what warranty options are available, and what to do if you need support
        after delivery.
      </p>
      <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold text-gray-900">
        {["Quote-specific delivery", "Written warranty terms", "Freight inspection guidance"].map(
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
          Get My Free Quote
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
