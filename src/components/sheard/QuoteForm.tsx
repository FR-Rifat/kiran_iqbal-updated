"use client";

import { FiPhone, FiShield } from "react-icons/fi";
import Button from "@/components/ui/button";

interface QuoteFormProps {
  title?: string;
  badge?: string;
  need?: string;
  year?: string;
  make?: string;
  model?: string;
  name?: string;
  phone?: string;
  phoneNumber?: string;
}

const QuoteForm = ({ title = "Get Your Quote", badge = "Under 2 Min", need = "Used Engine", year = "2015", make = "Ford", model = "F-150 5.0L", name = "First name", phone = "(___) ___-____", phoneNumber = "(281)-555-0142" }: QuoteFormProps) => {
  return (
    <div id="quote" className="w-full max-w-[500px] scroll-mt-28 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_8px_15px_rgba(0,0,0,0.08)] border border-[#e0e3e7] sm:p-7">
      <div className="flex w-full items-center justify-between gap-3">
        <h3 className="text-3xl font-extrabold uppercase leading-7 tracking-wide text-[#0a0a0a] font-['Barlow_Condensed']">{title}</h3>
        <span className="shrink-0 rounded-full border border-[#318c29] px-2.5 py-1 text-[11px] font-extrabold uppercase leading-none tracking-wider text-[#318c29] font-['Barlow_Condensed']">● {badge}</span>
      </div>

      <p className="mt-2 text-sm text-[#5b5b5b]">Tell us about your vehicle and we&apos;ll get you a firm price fast.</p>

      <div className="flex w-full flex-col gap-3 pt-4">
        <div className="flex flex-col gap-3">
          <FormField label="What Do You Need?" value={need} />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FormField label="Year" value={year} />
            <FormField label="Make" value={make} />
          </div>

          <FormField label="Model & Engine Size" value={model} />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FormField label="Your Name" value={name} />
            <FormField label="Phone" value={phone} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-2">
          <Button variant="primary" showIcon={false} className="w-full">
            Get My Price
          </Button>

          <div className="flex w-full flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <FiShield className="size-3.5 shrink-0 text-green-600" />
              <p className="text-center text-xs font-normal leading-5 text-slate-600 font-['Inter']">No spam. We only use your number to send your quote.</p>
            </div>

            <p className="text-center text-xs uppercase font-bold tracking-wider text-slate-400 font-['Barlow_Condensed']">or call now for an instant price</p>
          </div>

          <Button variant="secondary" className="w-full">
            {phoneNumber}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface FormFieldProps {
  label: string;
  value: string;
}

const FormField = ({ label, value }: FormFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="text-xs font-bold uppercase leading-4 tracking-wider text-slate-600 font-['Inter']">{label}</label>
      <div className="flex min-h-[44px] w-full items-center rounded-lg bg-[#f8f9f6] px-3.5 py-2.5 border border-[#e0e3e7] transition-all duration-200 hover:bg-white hover:border-green-600/40 shadow-2xs">
        <span className="text-sm font-normal text-neutral-500 font-['Inter']">{value}</span>
      </div>
    </div>
  );
};

export default QuoteForm;
