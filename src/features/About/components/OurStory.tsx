"use client"
import Button from "@/components/ui/button";
import Image from "next/image";
import { useQuoteModal } from "@/components/sheard/QuoteModal";

const OurStory = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="w-full border-y border-gray-200 bg-[#e6f5e6] px-6 py-20 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full container flex-col items-center gap-10 lg:flex-row">
        <div className="w-full overflow-hidden rounded-2xl border border-gray-300 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)] lg:flex-1">
          <div className="relative aspect-[619/363] w-full">
            <Image src="/OURSTORY.png" alt="Our Story" fill className="object-cover" />
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-4 lg:flex-1">
          <span className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
            Our Story
          </span>

          <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-tight tracking-wide text-gray-900 sm:text-5xl">
            Built on <span className="text-green-600/90">experience.</span> Focused on <span className="text-green-600/90">you.</span>
          </h2>

          <div className="flex flex-col gap-2">
            <p className="font-['Inter'] text-base font-normal leading-5 text-gray-600">
              A&R Auto Parts was built around a simple idea: finding a replacement engine or transmission should not be stressful.
            </p>

            <p className="font-['Inter'] text-base font-normal leading-5 text-gray-600">
              We work with a nationwide network of trusted automotive suppliers to bring quality used powertrain parts directly to our customers.
            </p>

            <p className="font-['Inter'] text-base font-normal leading-5 text-gray-600">
              Our goal is simple: remove the junkyard hassle with A-grade quality, competitive savings, home delivery, eligible 3-year limited warranty protection, and dependable support.
            </p>
          </div>

          <Button variant="primary" className="mt-4" showIcon={false} onClick={openModal}>
            Find My Part
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
