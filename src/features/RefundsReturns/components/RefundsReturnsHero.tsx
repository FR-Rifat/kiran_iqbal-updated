import { FiCheckCircle } from "react-icons/fi";

const highlights = [
  "Nationwide Shipping",
  "Warranty Options",
  "Dedicated Support",
];

const RefundsReturnsHero = () => (
  <section className="bg-[#e6f5e6] px-5 py-20 text-center sm:py-28">
    <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
      Legal Information
    </p>
    <h1 className="mx-auto mt-4 max-w-6xl font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
      A&amp;R Auto Parts{" "}
      <span className="text-green-600">Refunds &amp; Returns Policy</span>
    </h1>
    <p className="mt-5 text-base text-slate-600">
      6-Month Peace-of-Mind Warranty – Easy Returns &amp; Replacements
    </p>
    <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold text-gray-900">
      {highlights.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <FiCheckCircle aria-hidden className="size-4 text-green-600" />
          {item}
        </li>
      ))}
    </ul>
  </section>
);

export default RefundsReturnsHero;
