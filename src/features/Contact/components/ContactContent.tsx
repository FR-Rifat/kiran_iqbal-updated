"use client";

import { FormEvent, useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiShield } from "react-icons/fi";

const options = ["Select Year", "Select Make", "Select Model", "Select Engine"];

const ContactContent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-slate-50 px-5 py-16 sm:py-20">
      <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start lg:gap-10">
        <form onSubmit={submitQuote} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.1)] sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase tracking-wide text-neutral-950">Get Your Quote</h2><span className="rounded-full border border-green-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-green-700">Under 2 min</span></div>
          <p className="mt-2 text-sm text-neutral-600">Tell us about your vehicle and we’ll get you a firm price fast.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {options.map((label) => <div key={label}><label htmlFor={`contact-${label}`} className="sr-only">{label}</label><select id={`contact-${label}`} defaultValue="" required className="min-h-12 w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-neutral-700 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"><option value="" disabled>{label}</option><option>{label.replace("Select ", "")} option</option></select></div>)}
          </div>
          <div className="mt-3 grid gap-3">
            <label htmlFor="contact-name" className="sr-only">Full Name</label><input id="contact-name" required autoComplete="name" placeholder="Full Name" className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-neutral-500 focus:border-green-600 focus:ring-4 focus:ring-green-100" />
            <label htmlFor="contact-phone" className="sr-only">Phone Number</label><input id="contact-phone" required type="tel" autoComplete="tel" placeholder="Phone Number" className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-neutral-500 focus:border-green-600 focus:ring-4 focus:ring-green-100" />
            <label htmlFor="contact-email" className="sr-only">Email Address</label><input id="contact-email" required type="email" autoComplete="email" placeholder="Email Address" className="min-h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-neutral-500 focus:border-green-600 focus:ring-4 focus:ring-green-100" />
          </div>
          <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-neutral-600"><input required type="checkbox" className="mt-0.5 size-4 shrink-0 accent-green-600" />By checking this box, I agree to receive text messages and calls from A&amp;R Auto Parts about my quote request. Message and data rates may apply. Reply STOP to opt out.</label>
          <button type="submit" className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-green-600 px-6 py-3 font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-white shadow-[0_6px_0_#067806] transition hover:bg-green-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-green-300">Get My Free Quote</button>
          <p aria-live="polite" className="mt-4 flex items-center gap-2 text-xs text-slate-600"><FiShield aria-hidden className="size-3.5 text-green-600" />{isSubmitted ? "Thanks — a parts specialist will contact you shortly." : "Your information is kept private and never sold."}</p>
          <a href="tel:+18554306250" className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-green-600 px-5 font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-green-600 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-green-300"><FiPhone aria-hidden className="size-5" />(855)-430-6250</a>
        </form>

        <aside className="grid gap-4">
          <ContactCard icon={FiMapPin} title="Our Address"><address className="not-italic">9801 Westheimer Rd, Suite # 444, Houston TX 77042</address></ContactCard>
          <ContactCard icon={FiMail} title="Email Us"><a href="mailto:info@yardsandparts.us" className="hover:text-green-700">info@yardsandparts.us</a></ContactCard>
          <ContactCard icon={FiPhone} title="Call Us"><a href="tel:+18554306250" className="hover:text-green-700">855-430-6250</a></ContactCard>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex h-44 items-center justify-center bg-gradient-to-br from-green-50 to-slate-50"><FiMapPin aria-hidden className="size-9 text-green-600" /></div><div className="p-6"><h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">HQ & Warehouse Location</h3><p className="mt-2 font-['Barlow_Condensed'] text-xl font-bold text-slate-900">Houston, TX</p></div></div>
        </aside>
      </div>
    </section>
  );
};

function ContactCard({ icon: Icon, title, children }: { icon: typeof FiPhone; title: string; children: React.ReactNode }) {
  return <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700"><Icon aria-hidden className="size-5" /></span><div className="min-w-0"><h3 className="text-sm font-bold uppercase tracking-wide text-slate-600">{title}</h3><div className="mt-2 break-words font-['Barlow_Condensed'] text-lg font-bold text-slate-900">{children}</div></div></div>;
}

export default ContactContent;
