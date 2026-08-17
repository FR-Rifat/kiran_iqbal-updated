"use client";

import { FormEvent, useState } from "react";
import { FiCheckCircle, FiShield, FiTarget } from "react-icons/fi";

const proofPoints = [
  { label: "3-Year Warranty", icon: FiShield },
  { label: "Tested & Inspected", icon: FiCheckCircle },
  { label: "VIN-Verified Fitment", icon: FiTarget },
];

const selectFields = ["Select Year", "Select Make", "Select Model", "Select Engine"];

const UsedTransmissionsHero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_85%_0%,rgba(33,159,33,0.12),transparent_24rem),linear-gradient(180deg,#ffffff_0%,#f3f5f3_100%)]">
      <div className="container mx-auto grid gap-10 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-12 lg:py-16">
        <form onSubmit={submitQuote} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_15px_rgba(0,0,0,0.08)] sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase tracking-wide text-neutral-950">Get Your Quote</h2>
            <span className="rounded-full border border-green-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-green-700">Under 2 min</span>
          </div>
          <p className="mt-2 text-sm text-neutral-600">Tell us about your vehicle and we’ll get you a firm price fast.</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {selectFields.map((label) => (
              <div key={label}>
                <label className="sr-only" htmlFor={label}>{label}</label>
                <select id={label} defaultValue="" required className="min-h-12 w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-neutral-700 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100">
                  <option value="" disabled>{label}</option>
                  <option>{label.replace("Select ", "")} option</option>
                </select>
              </div>
            ))}
          </div>
          <div className="mt-3 grid gap-3">
            <label className="sr-only" htmlFor="transmission-name">Full Name</label>
            <input id="transmission-name" required autoComplete="name" placeholder="Full Name" className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-neutral-500 focus:border-green-600 focus:ring-4 focus:ring-green-100" />
            <label className="sr-only" htmlFor="transmission-phone">Phone Number</label>
            <input id="transmission-phone" required type="tel" autoComplete="tel" placeholder="Phone Number" className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-neutral-500 focus:border-green-600 focus:ring-4 focus:ring-green-100" />
            <label className="sr-only" htmlFor="transmission-email">Email Address</label>
            <input id="transmission-email" required type="email" autoComplete="email" placeholder="Email Address" className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-neutral-500 focus:border-green-600 focus:ring-4 focus:ring-green-100" />
          </div>
          <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-neutral-600"><input required type="checkbox" className="mt-0.5 size-4 shrink-0 accent-green-600" />By checking this box, I agree to receive text messages and calls from A&amp;R Auto Parts about my quote request. Message and data rates may apply. Reply STOP to opt out.</label>
          <button type="submit" className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-green-600 px-6 py-3 font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-white shadow-[0_6px_0_#067806] transition hover:bg-green-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-green-300">Get My Free Quote</button>
          <p aria-live="polite" className="mt-4 text-center text-xs font-semibold text-green-700">{isSubmitted ? "Thanks — a parts specialist will contact you shortly." : "We respect your privacy and never share your information."}</p>
        </form>

        <div className="pt-2 lg:pt-8">
          <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">Quality Used Transmissions</p>
          <h1 className="mt-3 max-w-[600px] font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">Quality <span className="text-green-600">Used Transmissions</span> Built To<br className="hidden sm:block" /> Keep You Moving.</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">Find quality used transmissions for your car, truck, or SUV. Our fitment specialists help match the right unit, explain your options, and get your vehicle back on the road.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {proofPoints.map(({ label, icon: Icon }) => <span key={label} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-green-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 shadow-sm"><Icon aria-hidden className="size-4 text-green-600" />{label}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedTransmissionsHero;
