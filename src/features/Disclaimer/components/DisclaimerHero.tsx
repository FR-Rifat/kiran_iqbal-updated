import { FiCheckCircle } from "react-icons/fi";

const DisclaimerHero = () => (
  <section className="bg-[radial-gradient(circle_at_85%_0%,rgba(33,159,33,0.12),transparent_24rem),linear-gradient(180deg,#ffffff_0%,#f3f5f3_100%)] px-5 py-20 text-center sm:py-28">
    <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">Legal Information</p>
    <h1 className="mx-auto mt-4 max-w-5xl font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">A&amp;R Auto Parts <span className="text-green-600">Disclaimer</span></h1>
    <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">Important information about our website, used automotive parts, product information, vehicle compatibility, pricing, shipping, warranties, and services.</p>
    <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold text-slate-900">{["Nationwide Shipping", "Warranty Options", "Dedicated Support"].map((item) => <li key={item} className="flex items-center gap-2"><FiCheckCircle aria-hidden className="size-4 text-green-600" />{item}</li>)}</ul>
  </section>
);

export default DisclaimerHero;
