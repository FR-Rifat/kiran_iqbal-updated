import Image from "next/image";
import Link from "next/link";
import { FiActivity, FiCheckCircle, FiCpu, FiHeadphones, FiSettings, FiShield, FiTarget, FiTruck } from "react-icons/fi";
import type { IconType } from "react-icons";

const engineTypes: { title: string; description: string; icon: IconType }[] = [
  { title: "Gas Engines", description: "Dependable replacements for the vehicles you drive every day.", icon: FiSettings },
  { title: "Diesel Engines", description: "Built for towing, hauling, and serious work-mile reliability.", icon: FiActivity },
  { title: "Car Engines", description: "Quality replacement engines for popular passenger vehicles.", icon: FiCpu },
  { title: "Truck Engines", description: "Engine options for pickups, fleets, and work trucks.", icon: FiTruck },
  { title: "SUV Engines", description: "Restore confidence for your family SUV or crossover.", icon: FiTarget },
  { title: "Performance Engines", description: "Talk with a specialist about the right performance fit.", icon: FiHeadphones },
];

const brands = ["Ford", "Chevrolet", "GMC", "Toyota", "Honda", "Dodge", "Chrysler", "Kia", "Hyundai", "Nissan", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Lexus", "Jeep", "Land Rover", "Volvo"];

const UsedEnginesDetails = () => {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto grid items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[1.18] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_16px_36px_rgba(8,42,84,0.14)]">
            <Image src="/used-engines-workshop.jpg" alt="Mechanic inspecting an engine at a workbench" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">Quality You Can Trust</p>
            <h2 className="mt-3 max-w-xl font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-[0.95] text-slate-950 sm:text-5xl">
              A Better Way To Source Your <span className="text-green-600">Replacement Engine</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Finding the right used engine shouldn’t mean taking a chance. Before anything ships, our team confirms availability, checks the unit, and verifies fitment for your vehicle.
            </p>
            <ul className="mt-6 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2">
              {["Tested & inspected inventory", "VIN-matched fitment", "Nationwide freight delivery", "Warranty in writing"].map((item) => (
                <li key={item} className="flex items-center gap-2"><FiCheckCircle aria-hidden className="size-5 shrink-0 text-green-600" />{item}</li>
              ))}
            </ul>
            <Link href="#quote" className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-green-600 px-6 py-3 font-['Barlow_Condensed'] text-lg font-bold uppercase tracking-wide text-white shadow-[0_6px_0_#067806] transition hover:bg-green-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-green-300">
              Get My Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8f4] py-16 sm:py-20">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">What We Supply</p>
            <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-slate-950 sm:text-5xl">Used Engines For Cars, <span className="text-green-600">Trucks & SUVs</span></h2>
            <p className="mt-4 text-slate-600">From daily drivers to hard-working trucks, we source the engine your vehicle needs.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engineTypes.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <span className="flex size-11 items-center justify-center rounded-xl bg-green-100 text-green-700"><Icon aria-hidden className="size-5" /></span>
                <h3 className="mt-5 font-['Barlow_Condensed'] text-2xl font-bold uppercase text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-5 text-center">
          <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">Engine Options</p>
          <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-slate-950 sm:text-5xl">Engines For <span className="text-green-600">The Brands</span> You Drive</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => <div key={brand} className="flex min-h-[70px] items-center justify-center rounded-lg border border-slate-200 bg-white px-3 font-['Barlow_Condensed'] text-xl font-bold text-slate-900 shadow-sm">{brand}</div>)}
          </div>
        </div>
      </section>
    </>
  );
};

export default UsedEnginesDetails;
