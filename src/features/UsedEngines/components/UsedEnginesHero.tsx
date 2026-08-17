import Image from "next/image";
import { FiCheckCircle, FiShield, FiTarget } from "react-icons/fi";
import QuoteForm from "@/components/sheard/QuoteForm";

const proofPoints = [
  { label: "3-Year Warranty", icon: FiShield },
  { label: "Tested & Inspected", icon: FiCheckCircle },
  { label: "VIN-Verified Fitment", icon: FiTarget },
];

const UsedEnginesHero = () => {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_85%_0%,rgba(33,159,33,0.12),transparent_24rem),linear-gradient(180deg,#ffffff_0%,#f3f5f3_100%)]">
      <div className="container mx-auto grid items-center gap-10 px-5 py-12 lg:grid-cols-[minmax(0,500px)_1fr] lg:gap-12 lg:py-16">
        <QuoteForm title="Get My Quote" />

        <div className="flex flex-col items-start">
          <p className="mb-3 font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
            Quality Used Engines
          </p>
          <h1 className="max-w-[620px] font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Quality <span className="text-green-600">Used Engines</span>
            <br />
            Built To Get You Back On The Road.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Find a quality used engine for your car, truck, or SUV. We hand-match your VIN, test available replacements, and give you a reliable estimate before anything ships.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {proofPoints.map(({ label, icon: Icon }) => (
              <span key={label} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-green-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 shadow-sm">
                <Icon aria-hidden className="size-4 text-green-600" />
                {label}
              </span>
            ))}
          </div>

          <div className="relative mt-8 aspect-[1.55] w-full max-w-[600px] overflow-hidden rounded-2xl shadow-[0_18px_38px_rgba(8,42,84,0.18)]">
            <Image src="/used-engines-hero.png" alt="Used automotive engine inspected in a professional workshop" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedEnginesHero;
