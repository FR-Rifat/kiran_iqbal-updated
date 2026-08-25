"use client";

import { FormEvent, InputHTMLAttributes, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/button";
import { approvedClaims, business } from "@/lib/business";

declare global {
  interface Window {
    dataLayer?: { push: (event: Record<string, unknown>) => void };
  }
}

interface QuoteFormProps {
  title?: string;
  badge?: string;
  description?: string;
  onSubmit?: (data: QuoteFormData) => void;
  className?: string;
}

export interface QuoteFormData {
  year: string;
  make: string;
  model: string;
  part: string;
  name: string;
  phone: string;
  email: string;
  consent: boolean;
  website?: string;
}

const yearOptions = [
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
];

const makeOptions = [
  "Ford",
  "Chevrolet",
  "GMC",
  "Dodge",
  "Ram",
  "Jeep",
  "Toyota",
  "Honda",
  "Nissan",
  "Hyundai",
  "Kia",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Other",
];

const modelsByMake: Record<string, string[]> = {
  Ford: ["500", "Bronco (Full Size)", "Bronco II", "C-Max", "Contour", "Crown Vic (1983 Up)", "Ecosport", "Edge", "Escape", "Escort", "Excursion", "Expedition", "Explorer", "Fiesta", "Five Hundred", "Flex", "Focus", "Focus RS", "Freestar", "Freestyle", "Fusion", "GT", "Mustang", "Ranger", "Taurus", "Taurus X", "Thunderbird", "Transit 150", "Transit 250", "Transit 350", "Transit Connect", "Truck-F150", "Truck-F150 Raptor", "Truck-F250 Super Duty (1999 Up)", "Truck-F350 Super Duty (1999 Up)", "Truck-F450 Super Duty (1999 Up)", "Truck-F550 Super Duty (1999 Up)", "Van E150", "Van E250", "Van E350", "Other"],
  Chevrolet: ["Astro", "Aveo", "Blazer (2019 Up)", "Camaro", "Caprice (1980 Up)", "Cavalier", "Cobalt", "Corvette", "Cruze", "Equinox", "HHR", "Impala", "Malibu", "Monte Carlo", "Sonic", "Spark", "Suburban-1500", "Suburban-2500", "Tahoe", "TrailBlazer", "Traverse", "Trax", "Truck-Colorado", "Truck-Silverado 1500 (1999 Up)", "Truck-Silverado 2500 (1999 Up)", "Truck-Silverado 3500 (2001 Up)", "Van Express 1500", "Van Express 2500", "Van Express 3500", "Other"],
  GMC: ["Acadia", "Jimmy, Full Size", "Jimmy, S10/S15", "Safari Van", "Suburban-1500 (2001 Down)", "Suburban-2500 (1967 Up)", "Terrain", "Truck-Canyon", "Truck-Envoy", "Truck-Sierra 1500 (1999 Up)", "Truck-Sierra 2500 (1999 Up)", "Truck-Sierra 3500 (2001 Up)", "Truck-Sierra Denali", "Truck-Yukon (except XL)", "Truck-Yukon XL1500", "Truck-Yukon XL2500", "Van Savana 1500", "Van Savana 2500", "Van Savana 3500", "Other"],
  Dodge: ["Avenger", "Caliber", "Caravan", "Challenger", "Charger", "Dakota", "Dart", "Durango", "Intrepid", "Journey", "Magnum", "Neon", "Nitro", "Ramcharger", "Stratus", "Dodge Truck-1500 (1994 Up)", "Dodge Truck-2500 (1994 Up)", "Dodge Truck-3500 (1994 Up)", "Van 1500", "Van 2500", "Van 3500", "Viper", "Other"],
  Ram: ["Promaster 1500", "Promaster 2500", "Promaster 3500", "Promaster City", "Truck 1500 Series", "Truck 2500 Series", "Truck 3500 Series", "Other"],
  Jeep: ["Cherokee (except Grand Cherokee)", "Comanche", "Commander", "Compass", "Gladiator", "Grand Cherokee", "Grand Wagoneer", "Liberty", "Patriot", "Renegade", "Wagoneer", "Wrangler", "Other"],
  Toyota: ["86", "4Runner", "Avalon", "CHR", "Camry", "Celica", "Corolla", "FJ Cruiser", "Highlander", "Land Cruiser", "Matrix", "Mirai", "MR2", "Prius", "RAV4", "Sequoia", "Sienna", "Solara", "Supra", "Tacoma", "Tundra", "Venza", "Yaris", "Other"],
  Honda: ["Accord", "Civic", "Clarity", "Crosstour", "CRV", "CRX", "CRZ", "DelSol", "Element", "Fit", "HRV", "Insight", "Odyssey", "Passport", "Pilot", "Prelude", "Ridgeline", "S2000", "Other"],
  Nissan: ["200SX", "240SX", "300ZX", "350Z", "370Z", "Altima", "Armada", "Frontier", "GTR", "Juke", "Kicks", "Leaf", "Maxima (1982 Up)", "Murano", "NV 200", "NV 1500", "NV 2500", "NV 3500", "Pathfinder", "Quest", "Rogue", "Rogue Sport", "Sentra", "Truck-Titan", "Truck-Titan XD", "Versa", "Xterra", "Other"],
  Hyundai: ["Accent", "Azera", "Elantra", "Entourage", "Equus", "Genesis", "Ioniq", "Kona", "Palisade", "Santa Fe", "Sonata", "Tiburon", "Tucson", "Veloster", "Venue", "Veracruz", "Other"],
  Kia: ["Amanti", "Borrego", "Cadenza", "Forte", "K900", "Niro", "Optima", "Rio", "Rondo", "Sedona", "Seltos", "Sorento", "Soul", "Spectra", "Sportage", "Stinger", "Telluride", "Other"],
  BMW: ["128i", "135i", "228i", "230i", "318i", "320i", "325i", "328i", "330e", "330i", "335i", "340i", "428i", "430i", "435i", "440i", "525i", "528i", "530e", "530i", "535i", "540i", "550i", "640i", "650i", "740i", "750i", "760i", "I3", "I8", "M2", "M3", "M4", "M5", "M6", "M8", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z3", "Z4", "Other"],
  "Mercedes-Benz": ["300D", "300E", "300SL", "AMG GT", "A Class", "B Class", "C Class", "CL Class", "CLA Class", "CLK", "CLS", "E Class", "G Class", "GL Class", "GLA Class", "GLC Class", "GLE Class", "GLK Class", "GLS Class", "ML Series", "Metris", "R Class", "S Class", "SL Class", "SLC Class", "SLK", "Other"],
  Audi: ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q4", "Q5", "Q7", "Q8", "S3", "S4", "S5", "S6", "S7", "S8", "SQ5", "RS3", "RS4", "RS5", "RS6", "RS7", "R8", "AllRoad", "Cabriolet", "Coupe Quattro", "Other"],
  Other: ["Other"],
};

const partOptions = [
  "Engine",
  "Transmission",
];

export default function QuoteForm({
  title = "Find Your Part",
  badge = "Fast & Easy",
  description = "Tell us about your vehicle and our specialists will locate the right engine or transmission for you.",
  onSubmit,
  className = "",
}: QuoteFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    year: "",
    make: "",
    model: "",
    part: "",
    name: "",
    phone: "",
    email: "",
    consent: false,
    website: "",
  });

  const updateField = <K extends keyof QuoteFormData>(
    field: K,
    value: QuoteFormData[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const submitQuote = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("loading");
    setMessage("");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok)
        throw new Error(result.message ?? "Unable to send your request.");
      onSubmit?.(formData);
      window.dataLayer?.push({ event: "quote_submit_success" });
      setIsSubmitted(true);
      setSubmitState("success");
      setMessage(
        result.message ?? "Thanks. Your request was sent successfully.",
      );
    } catch (error) {
      setSubmitState("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to send your request.",
      );
    }
  };
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  return (
    <form
      id="quote"
      onSubmit={submitQuote}
      className={`w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_15px_rgba(0,0,0,0.08)] sm:p-7 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none tracking-wide text-gray-900">
          {title}
        </h2>

        <span className="shrink-0 rounded-full border border-green-700 px-3 py-1 font-['Barlow_Condensed'] text-[11px] font-bold uppercase tracking-wide text-green-700">
          {badge}
        </span>
      </div>

      <p className="mt-2 text-sm leading-6 text-neutral-600">
        {description} {approvedClaims.availability}
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-emerald-700">
        All fields are required
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <SelectField
          id="quote-year"
          label="Year"
          value={formData.year}
          options={yearOptions}
          placeholder="Select Year"
          onChange={(value) => updateField("year", value)}
        />

        <SelectField
          id="quote-make"
          label="Make"
          value={formData.make}
          options={makeOptions}
          placeholder="Select Make"
          onChange={(value) =>
            setFormData((previous) => ({
              ...previous,
              make: value,
              model: "",
              part: "",
            }))
          }
        />

        <SelectField
          id="quote-model"
          label="Model"
          value={formData.model}
          options={modelsByMake[formData.make] ?? []}
          placeholder={formData.make ? "Select Model" : "Select Make First"}
          disabled={!formData.make}
          onChange={(value) =>
            setFormData((previous) => ({
              ...previous,
              model: value,
              part: "",
            }))
          }
        />

        <SelectField
          id="quote-part"
          label="Part"
          value={formData.part}
          options={partOptions}
          placeholder={formData.model ? "Select Part" : "Select Model First"}
          disabled={!formData.model}
          onChange={(value) => updateField("part", value)}
        />
      </div>

      <div className="mt-3 grid gap-3">
        <InputField
          id="quote-name"
          label="Full Name"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          autoComplete="name"
          onChange={(value) => updateField("name", value)}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <InputField
            id="quote-phone"
            label="Phone Number"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            autoComplete="tel"
            onChange={(value) => updateField("phone", value)}
          />

          <InputField
            id="quote-email"
            label="Email Address"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            autoComplete="email"
            onChange={(value) => updateField("email", value)}
          />
        </div>

        <input
          aria-hidden="true"
          tabIndex={-1}
          autoComplete="off"
          name="website"
          value={formData.website}
          onChange={(event) => updateField("website", event.target.value)}
          className="hidden"
        />
      </div>

      <label className="mt-4 flex cursor-pointer items-start gap-3 text-xs leading-5 text-neutral-600">
        <input
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-0.5 size-4 shrink-0 cursor-pointer accent-green-600"
        />

        <span>
          {business.socialConsentDisclosure} Read our{" "}
          <Link className="text-green-700 underline" href="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="text-green-700 underline" href="/terms">
            Terms of Use
          </Link>
          .
        </span>
      </label>

      <div className="mt-5">
        <Button
          variant="primary"
          showIcon={false}
          type="submit"
          className="w-full"
          disabled={submitState === "loading"}
        >
          {submitState === "loading"
            ? "Sending Request…"
            : isSubmitted
              ? "Quote Request Sent"
              : "Find My Part"}
        </Button>
      </div>

      <p
        aria-live="polite"
        className={`mt-4 text-center text-xs font-semibold ${submitState === "error" ? "text-red-700" : submitState === "success" ? "text-green-700" : "text-neutral-500"}`}
      >
        {message}
      </p>
    </form>
  );
}

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  placeholder: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

function SelectField({
  id,
  label,
  value,
  options,
  placeholder,
  disabled = false,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          required
          disabled={disabled}
          value={value}
          aria-label={label}
          onChange={(event) => onChange(event.target.value)}
          className={`h-12 w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 pr-11 text-sm outline-none transition-all duration-200 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:border-green-600/40"} ${value ? "text-neutral-800" : "text-neutral-500"}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-neutral-800">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500"
        />
      </div>
    </div>
  );
}

interface InputFieldProps {
  id: string;
  label: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder: string;
  value: string;
  autoComplete?: string;
  onChange: (value: string) => void;
}

function InputField({
  id,
  label,
  type,
  placeholder,
  value,
  autoComplete,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-700"
      >
        {label}
      </label>

      <input
        id={id}
        required
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-neutral-800 outline-none transition-all duration-200 placeholder:text-neutral-500 hover:border-green-600/40 focus:border-green-600 focus:bg-white focus:ring-4 focus:ring-green-100"
      />
    </div>
  );
}
