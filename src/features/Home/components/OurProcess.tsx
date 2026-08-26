import Image from "next/image";
import {
  FiCheckCircle,
  FiClipboard,
  FiCreditCard,
  FiSearch,
  FiTruck,
} from "react-icons/fi";
import type { IconType } from "react-icons";

const processSteps: {
  number: string;
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    number: "01",
    title: "Share Vehicle Details",
    description:
      "Send us the year, make, model, VIN, and the engine or transmission you need.",
    icon: FiClipboard,
  },
  {
    number: "02",
    title: "Specialist Part Search",
    description:
      "Our parts team reviews your information and searches our nationwide inventory network.",
    icon: FiSearch,
  },
  {
    number: "03",
    title: "Review Your Match",
    description:
      "We confirm the available part, fitment details, price, shipping, and written warranty terms.",
    icon: FiCheckCircle,
  },
  {
    number: "04",
    title: "Confirm Your Order",
    description:
      "Choose an available payment option and complete your order with clear purchase details.",
    icon: FiCreditCard,
  },
  {
    number: "05",
    title: "Delivery & Support",
    description:
      "Your part is prepared for nationwide delivery, with our team available to assist after shipment.",
    icon: FiTruck,
  },
];

export default function OurProcess() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:py-20 lg:px-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-3 lg:gap-0">
          <aside className="relative z-10 mx-auto h-112 w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="absolute inset-x-2 bottom-0 h-80 rounded-2xl border border-green-600/15 bg-[#e6f5e6] shadow-[0_12px_30px_rgba(0,153,0,0.08)]" />
            <div className="absolute inset-x-0 bottom-0 top-[-42px] overflow-hidden rounded-b-2xl">
              <Image
                src="/our-process-mechanic.png"
                alt="A&R Auto Parts specialist ready to help"
                fill
                sizes="(min-width: 1024px) 340px, 90vw"
                className="origin-top -translate-x-5 scale-[1.35] object-contain object-top drop-shadow-[0_18px_26px_rgba(0,0,0,0.14)]"
              />
            </div>
            <div className="absolute bottom-12 left-4 z-20 whitespace-nowrap ml-12 rounded-lg border border-green-700/30 bg-green-600 px-6 py-5 text-white shadow-[0_12px_28px_rgba(0,153,0,0.25)] sm:left-16">
              <p className="font-['Barlow_Condensed'] text-sm font-semibold text-white/80">
                Trusted support for
              </p>
              <p className="mt-1 font-['Barlow_Condensed'] text-2xl font-extrabold uppercase leading-none">
                Engines &amp; Transmissions
              </p>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <header className="mb-9 text-center lg:px-8 lg:text-left">
              {/* <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
                How We Help
              </p> */}
              <h2 className="mt-3 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase italic leading-none text-gray-900 sm:text-6xl">
                Our <span className="text-green-600">Process</span>
              </h2>
              <p className="mt-4 font-['Inter'] text-base text-gray-600">
                A guided path from your vehicle details to nationwide part
                delivery.
              </p>
            </header>

            <div className="grid gap-px overflow-hidden rounded-t-2xl border-x border-t border-slate-200 bg-slate-200 shadow-[0_8px_24px_rgba(8,42,84,0.06)] sm:grid-cols-2">
              {processSteps.slice(0, 2).map((step) => (
                <ProcessCard key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-b-2xl border border-slate-200 bg-slate-200 shadow-[0_12px_28px_rgba(8,42,84,0.06)] sm:grid-cols-3">
          {processSteps.slice(2).map((step) => (
            <ProcessCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProcessCard = ({
  number,
  title,
  description,
  icon: Icon,
}: (typeof processSteps)[number]) => (
  <article className="group relative min-h-58 bg-white p-7 transition-all duration-300 hover:bg-green-50 hover:shadow-[inset_0_0_0_1px_rgba(22,163,74,0.22)]">
    <span className="absolute right-5 top-4 font-['Barlow_Condensed'] text-4xl font-extrabold text-green-600/10 transition-colors group-hover:text-green-600/20">
      {number}
    </span>
    <div className="flex size-14 items-center justify-center rounded-xl bg-green-50 text-green-600 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
      <Icon aria-hidden className="size-7 stroke-[1.8]" />
    </div>
    <h3 className="mt-5 font-['Barlow_Condensed'] text-xl font-bold tracking-wide text-gray-900">
      {title}
    </h3>
    <p className="mt-2 font-['Inter'] text-sm leading-6 text-gray-600">
      {description}
    </p>
  </article>
);
