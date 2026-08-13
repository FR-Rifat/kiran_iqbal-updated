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

const QuoteForm = ({ title = "Get My Quote", badge = "Under 2 Min", need = "Used Engine", year = "2015", make = "Ford", model = "F-150 5.0L", name = "First name", phone = "(___) ___-____", phoneNumber = "(855)-430-6250" }: QuoteFormProps) => {
  return (
    <div className="w-full max-w-[600px] overflow-hidden rounded-2xl bg-white pb-6 shadow-[0px_20px_50px_0px_rgba(8,42,84,0.15)] border border-slate-200/90">
      <div className="flex w-full items-center justify-between bg-green-600 px-6 py-4">
        <h3 className="text-2xl font-extrabold uppercase leading-6 tracking-wide text-white font-['Barlow_Condensed']">{title}</h3>
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase leading-none tracking-wider text-green-600 font-['Barlow_Condensed'] shadow-xs">{badge}</span>
      </div>

      <div className="flex w-full flex-col gap-3 px-5 pt-5">
        <div className="flex flex-col gap-2.5">
          <FormField label="What Do You Need?" value={need} />

          <div className="grid grid-cols-2 gap-3">
            <FormField label="Year" value={year} />
            <FormField label="Make" value={make} />
          </div>

          <FormField label="Model & Engine Size" value={model} />

          <div className="grid grid-cols-2 gap-3">
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
      <div className="flex min-h-[46px] w-full items-center rounded-xl bg-slate-50/60 px-3.5 py-3 border border-slate-200 transition-all duration-200 hover:bg-white hover:border-green-600/40 shadow-2xs">
        <span className="text-base font-normal text-neutral-500 font-['Inter']">{value}</span>
      </div>
    </div>
  );
};

export default QuoteForm;