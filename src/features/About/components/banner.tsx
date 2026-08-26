"use client";

import Button from "@/components/ui/button";
import { aboutData } from "@/Content/data";
import { useQuoteModal } from "@/components/sheard/QuoteModal";
import { business } from "@/lib/business";

const AboutHero = () => {
  const { openModal } = useQuoteModal();
  const { eyebrow, title, description, badges, rating } = aboutData;

  return (
    <section className="flex w-full items-center bg-[#e6f5e6] px-5 py-12 sm:px-6 sm:py-16 md:min-h-[69vh] md:py-0">
      <div className="mx-auto flex w-full container flex-col items-center gap-6 text-center">
        <div className="flex w-full flex-col items-center gap-5">
          <span className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
            {eyebrow}
          </span>

          <h2 className="font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-tight tracking-wide text-gray-900 md:text-6xl">
            {title.normal1}{" "}
            <span className="text-green-600/80">{title.highlight1}</span>{" "}
            {title.normal2}{" "}
            <span className="text-green-600">{title.highlight2}</span>
          </h2>

          <p className="max-w-3xl font-['Inter'] text-base font-normal leading-6 text-slate-600">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-green-600 bg-white px-4 py-2 font-['Inter'] text-sm font-semibold leading-4 text-green-600"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <Button variant="primary" showIcon={false} onClick={openModal}>
            Find My Part
          </Button>

          {business.phone && <Button variant="secondary" href={`tel:${business.phone}`}>Call A&R Auto Parts</Button>}
        </div>

        {rating.stars > 0 && <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
          <span className="font-['Segoe_UI_Symbol'] text-base tracking-widest text-green-600">
            {"★".repeat(rating.stars)}
          </span>

          <span className="font-['Inter'] text-sm leading-5 text-slate-600 md:text-base">
            {rating.text}
          </span>
        </div>}
        {rating.stars === 0 && <p className="font-['Inter'] text-sm leading-5 text-slate-600 md:text-base">{rating.text}</p>}
      </div>
    </section>
  );
};

export default AboutHero;
