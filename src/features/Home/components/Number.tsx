import { FiMap, FiPackage, FiSettings, FiUsers } from "react-icons/fi";
import type { IconType } from "react-icons";

const stats: {
  value: string;
  label: string;
  description?: string;
  icon: IconType;
}[] = [
  {
    value: "35K",
    label: "Engines Sold",
    icon: FiSettings,
  },
  {
    value: "20,000+",
    label: "Customers",
    icon: FiUsers,
  },
  {
    value: "Over 20 Million",
    label: "Used OEM Inventory",
    description: "Engines & Transmissions",
    icon: FiPackage,
  },
  {
    value: "5,000+",
    label: "Inventory Yards",
    description: "Extensive Network",
    icon: FiMap,
  },
];

export default function Number() {
  return (
    <section
      aria-label="A&R Auto Parts by the numbers"
      className="relative overflow-hidden bg-slate-50 px-5 py-12 sm:py-14 lg:px-10"
    >
      <div
        aria-hidden
        className="absolute -right-24 -top-32 size-80 rounded-full bg-green-200/25 blur-3xl"
      />

      <div className="container relative mx-auto grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 gap-px shadow-[0_12px_32px_rgba(8,42,84,0.06)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label, description, icon: Icon }) => (
          <article
            key={label}
            className="group flex min-h-48 flex-col items-center justify-center bg-white px-5 py-7 text-center transition-colors duration-300 hover:bg-green-50"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition duration-300 group-hover:bg-green-600 group-hover:text-white">
              <Icon aria-hidden className="size-6 stroke-[1.8]" />
            </div>

            <p className="mt-4 font-['Barlow_Condensed'] text-4xl font-extrabold leading-none text-gray-900">
              {value}
            </p>
            <h2 className="mt-2 font-['Barlow_Condensed'] text-base font-bold uppercase tracking-wide text-green-700">
              {label}
            </h2>
            {description && (
              <p className="mt-1 font-['Inter'] text-xs text-slate-500">
                {description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
