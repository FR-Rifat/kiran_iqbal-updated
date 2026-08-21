import { FiCheckCircle } from "react-icons/fi";

const PrivacyPolicyHero = () => (
  <section className="bg-[#e6f5e6] px-5 py-20 text-center sm:py-28">
    <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
      Privacy Policy
    </p>
    <h1 className="mx-auto mt-4 max-w-6xl font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
      A&amp;R Auto Parts <span className="text-green-600">Privacy Policy</span>
    </h1>
    <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
      Learn how we collect, use, protect, and manage your information when you
      use our website and services.
    </p>
    <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold text-gray-900">
      {["Nationwide Shipping", "Warranty Options", "Dedicated Support"].map(
        (item) => (
          <li key={item} className="flex items-center gap-2">
            <FiCheckCircle aria-hidden className="size-4 text-green-600" />
            {item}
          </li>
        ),
      )}
    </ul>
  </section>
);

export default PrivacyPolicyHero;
