import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    title: "Used Engines",
    description:
      "Skip the hassle of searching. We source quality gasoline and diesel engine options for vehicles from Ford, GMC, Honda, Chevy, Toyota, Dodge, Chrysler, and more.",
    href: "/used-engines",
    image: "/engine-for-sale.webp",
    imageAlt: "Quality used engine for sale",
    theme: "bg-emerald-950 text-white",
    copy: "text-emerald-50/85",
    button: "bg-green-500 text-white hover:bg-green-400",
  },
  {
    title: "Used Transmissions",
    description:
      "Over the years, we've shipped countless high-quality used automatic and manual transmissions. When you need a replacement, don't settle for less. We're a trusted source with the perfect transmission to fit your vehicle and get it back on the road.",
    href: "/used-transmissions",
    image: "/used-transmission.webp",
    imageAlt: "Quality used transmission for sale",
    theme: "bg-emerald-100 text-slate-950",
    copy: "text-slate-700",
    button: "bg-emerald-950 text-white hover:bg-emerald-800",
  },
];

export default function FindParts() {
  return (
    <section className="overflow-hidden bg-slate-50 px-4 py-14 sm:px-6 sm:py-20">
      <div className="flex w-full flex-col items-center justify-center gap-1">
        <div className="text-center text-3xl font-extrabold uppercase leading-none tracking-wide text-black-600 font-['Barlow_Condensed'] sm:text-[36px] mb-8">
          <h2 className="">Ready to find your used engine or transmission?</h2>
        </div>
      </div>
      <div className="container mx-auto grid gap-12 md:grid-cols-2 md:gap-0 md:pb-24">
        {offers.map((offer, index) => (
          <article
            key={offer.title}
            className={`group relative min-h-[560px] overflow-visible rounded-2xl px-6 pb-60 pt-8 shadow-lg sm:min-h-[500px] sm:px-10 sm:pt-10 md:min-h-[390px] md:rounded-none md:px-10 md:pb-32 md:shadow-none lg:px-14 ${offer.theme} ${index === 0 ? "md:rounded-l-xl" : "md:rounded-r-xl"}`}
          >
            <div className="relative z-10 max-w-lg">
              <h2 className="font-['Barlow_Condensed'] text-3xl font-extrabold uppercase italic leading-none sm:text-4xl">
                {offer.title}
              </h2>
              <p className={`mt-3 max-w-md text-sm leading-6 ${offer.copy}`}>
                {offer.description}
              </p>
              <Link
                href={offer.href}
                className={`mt-5 inline-flex min-h-11 items-center rounded-sm px-5 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500 ${offer.button}`}
              >
                View Details
              </Link>
            </div>

            <div
              className={`pointer-events-none absolute inset-x-0 z-0 flex justify-center lg:-mb-10 ${index === 0 ? "bottom-[-42px] sm:bottom-[-50px] md:bottom-[-94px]" : "bottom-[-32px] sm:bottom-[-42px] md:bottom-[-90px]"}`}
            >
              <Image
                src={offer.image}
                alt={offer.imageAlt}
                width={index === 0 ? 340 : 430}
                height={index === 0 ? 340 : 310}
                sizes="(min-width: 768px) 42vw, 85vw"
                className={`h-auto object-contain drop-shadow-[0_18px_14px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-[1.04] ${index === 0 ? "w-[270px] sm:w-[300px] lg:w-[330px]" : "w-[340px] sm:w-[380px] lg:w-[420px]"}`}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
