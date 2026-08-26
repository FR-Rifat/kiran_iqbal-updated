"use client";

import Image from "next/image";
import { useQuoteModal } from "@/components/sheard/QuoteModal";

const brands = [
  { name: "Ford", logo: "/brands/ford.svg" },
  { name: "Chevrolet", logo: "/brands/chevrolet.svg" },
  { name: "GMC", logo: "/brands/gmc.svg" },
  { name: "Toyota", logo: "/brands/toyota.svg" },
  { name: "Honda", logo: "/brands/honda.svg" },
  { name: "Dodge", logo: "/brands/dodge.svg" },
  { name: "Chrysler", logo: "/brands/chrysler.svg" },
  { name: "Kia", logo: "/brands/kia.svg" },
  { name: "Hyundai", logo: "/brands/hyundai.svg" },
  { name: "Nissan", logo: "/brands/nissan.svg" },
  { name: "BMW", logo: "/brands/bmw.svg" },
  { name: "Mercedes-Benz", logo: "/brands/mercedesbenz.svg" },
  { name: "Audi", logo: "/brands/audi.svg" },
  { name: "Volkswagen", logo: "/brands/volkswagen.svg" },
  { name: "Lexus", logo: "/brands/lexus.svg" },
  { name: "Jeep", logo: "/brands/jeep.svg" },
  { name: "Land Rover", logo: "/brands/landrover.svg" },
  { name: "Volvo", logo: "/brands/volvo.svg" },
];

export default function Brands() {
  const { openModalWithSelection } = useQuoteModal();

  return (
    <section className="bg-[#e6f5e6] py-16 sm:py-20">
        <div className="container mx-auto px-5 text-center">
          <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
            Popular Makes
          </p>
          <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-gray-900 sm:text-5xl">
            Engines &amp; Transmissions For{" "}
            <span className="text-green-600/80">The Brands You Drive</span>
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <button
                type="button"
                key={brand.name}
                onClick={() => openModalWithSelection({ make: brand.name })}
                aria-label={`Find a part for ${brand.name}`}
                className="group flex min-h-28 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-green-500/40 hover:shadow-[0_12px_28px_rgba(0,153,0,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                <div className="relative h-10 w-full max-w-24 transition-transform duration-300 group-hover:scale-105 sm:h-11">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
                <span className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-wide text-slate-700 transition-colors duration-300 group-hover:text-green-700">
                  {brand.name}
                </span>
              </button>
            ))}
          </div>
        </div>
    </section>
  );
}
