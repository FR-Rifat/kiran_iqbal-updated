"use client";

import { business } from "@/lib/business";
import Image from "next/image";
import { useQuoteModal } from "@/components/sheard/QuoteModal";


export default function CallUs() {
  const { openModal } = useQuoteModal();
  return (
    <div>
            <section className="overflow-hidden bg-white pt-14 sm:pt-36">
        <div className="relative bg-green-600">
          <div
            aria-hidden
            className="absolute left-0 top-10 h-16 w-24 opacity-20 [background-image:radial-gradient(circle,white_1.5px,transparent_1.5px)] [background-size:12px_12px]"
          />

          <div className="container relative mx-auto grid min-h-96 items-center px-6 pb-0 pt-12 lg:grid-cols-2 lg:px-10 lg:py-14">
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <p className="font-['Barlow_Condensed'] text-base font-bold uppercase tracking-[0.18em] text-white/85">
                Call Us
              </p>

              <h2 className="mt-3 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase italic leading-[0.95] text-white sm:text-6xl">
                For A Free
                <span className="mt-2 block">Consultation Today!</span>
              </h2>

              <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href={`tel:${business.phone}`}
                  aria-label={`Call ${business.phone}`}
                  className="group inline-flex -skew-x-12 items-center justify-center border border-white/80 px-8 py-4 text-white transition hover:bg-white hover:text-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-w-64"
                >
                  <span className="skew-x-12 font-['Barlow_Condensed'] text-lg font-bold">
                    {business.phone}
                  </span>
                </a>

                <button
                  type="button"
                  onClick={openModal}
                  className="group inline-flex -skew-x-12 cursor-pointer items-center justify-center border border-white/80 px-8 py-4 text-white transition hover:bg-white hover:text-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-w-64"
                >
                  <span className="skew-x-12 font-['Barlow_Condensed'] text-lg font-bold">
                    Request a Call Back
                  </span>
                </button>
              </div>
            </div>

            <div className="pointer-events-none relative z-10 mx-auto mt-10 h-80 w-full max-w-md lg:absolute lg:bottom-0 lg:right-8 lg:mt-0 lg:h-[540px] lg:w-[44%] lg:max-w-xl">
              <Image
                src="/consultation-mechanic.png"
                alt="Auto parts specialist ready to help by phone"
                fill
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="object-contain object-bottom"
              />
            </div>

            <div
              aria-hidden
              className="absolute -bottom-32 -right-24 size-80 rounded-full border border-white/10"
            >
              <span className="absolute inset-8 rounded-full border border-white/10" />
              <span className="absolute inset-16 rounded-full border border-white/10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
