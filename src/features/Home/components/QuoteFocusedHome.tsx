"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClipboard,
  FiFileText,
  FiSearch,
  FiShield,
  FiTool,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import QuoteForm from "@/components/sheard/QuoteForm";
import { useQuoteModal } from "@/components/sheard/QuoteModal";
import { approvedClaims } from "@/lib/business";
import Button from "@/components/ui/button";
import { whyChooseUsData } from "@/Content/data";

const offers = [
  {
    title: "Used engines",
    description:
      "If your engine needs replacing, start by telling us about the vehicle. We’ll use those details to prepare your quote.",
    href: "/used-engines",
    icon: FiTool,
    image: "/engines.jpeg",
    imageAlt: "Replacement engine in a workshop",
  },
  {
    title: "Used transmissions",
    description:
      "Transmission options can vary from one vehicle to the next. A written quote helps you review the details before you move forward.",
    href: "/used-transmissions",
    icon: FiSearch,
    image: "/transmissions.jpeg",
    imageAlt: "Vehicle transmission in a workshop",
  },
];

const customers = [
  "Drivers trying to get a vehicle back on the road",
  "DIY owners who want to check the details themselves",
  "Repair shops looking for a replacement unit",
];

const problems = [
  "A vehicle can look like a match on paper and still have a different engine or transmission setup.",
  "The lowest price does not always tell you what comes with the part or how it will be delivered.",
  "Freight, warranty, taxes, fees, and core requirements can all change from one quote to another.",
];

const outcomes = [
  {
    icon: FiClipboard,
    title: "Tell us what you are working with",
    text: "Start with the year, make, model, and the part you need. Those details give the quote a better starting point.",
  },
  {
    icon: FiFileText,
    title: "Look over the quote",
    text: "See the part information, price, delivery, and warranty details in one place.",
  },
  {
    icon: FiCheckCircle,
    title: "Choose when it makes sense",
    text: "Take a look at the details first. Then decide if the quoted option is right for the repair.",
  },
];

const noLongerNeedTo = [
  "Guess at the configuration your vehicle needs",
  "Sort through incomplete listings on your own",
  "Assume what is included with the quoted assembly",
  "Commit before you have seen the written details",
];

const quoteIncludes = [
  "The engine or transmission category you asked us to quote",
  "Vehicle and configuration details you can look over",
  "Part price and the delivery details that apply",
  "Written warranty terms for that quoted part",
];

const buyingGuides = [
  {
    title: "How to buy a used engine",
    description:
      "A practical look at the vehicle and part details worth checking before you ask for a quote.",
    href: "/guides/how-to-buy-a-used-engine",
  },
  {
    title: "VIN fitment verification",
    description:
      "Why a VIN can be useful when similar vehicles use different configurations.",
    href: "/guides/vin-fitment-verification",
  },
  {
    title: "Used transmission checklist",
    description:
      "The key details to review before choosing a replacement transmission.",
    href: "/guides/used-transmission-compatibility",
  },
];

export default function QuoteFocusedHome() {
  const { openModal } = useQuoteModal();
  const { eyebrow, title, description, features } = whyChooseUsData;

  return (
    <>
      <section className="overflow-hidden bg-[#E6F5E6] text-slate-950">
        <div className="container mx-auto grid items-center gap-10 px-5 py-14 sm:py-16 lg:grid-cols-[.92fr_1.08fr] lg:gap-16 lg:py-24">
          <div className="order-2 relative lg:order-1">
            <div className="absolute -inset-3 z-0 rounded-4xl bg-emerald-700/10 blur-2xl" />
            <QuoteForm
              title="Get your quote started"
              badge="No obligation"
              description="Tell us a little about the vehicle, and we’ll take it from there."
              className="relative z-10 border-emerald-100 shadow-xl"
            />
            {/* <p className="mt-4 text-center text-xs leading-5 text-slate-600">
              Asking for a quote does not reserve a part or commit you to a
              purchase.
            </p> */}
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-green-600 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-green-600">
              <FiShield aria-hidden className="size-4" /> Start with the details
            </p>
            <h1 className="mt-6 max-w-3xl font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-[.9] tracking-tight sm:text-6xl lg:text-7xl">
              Need a used engine or transmission?{" "}
              <span className="text-green-600">
                Start with a clear quote.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Buying a major auto part comes with questions. Send us your
              vehicle details, then review the part information, price,
              delivery, and warranty terms before you make a call.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [FiCheckCircle, "Start with your vehicle"],
                [FiFileText, "Review the quote"],
                [FiTruck, "Check delivery details"],
              ].map(([Icon, text]) => {
                const TrustIcon = Icon as typeof FiCheckCircle;

                return (
                  <div
                    key={text as string}
                    className="inline-flex w-fit items-center justify-self-start gap-1.5 whitespace-nowrap rounded-full border border-green-600 bg-white px-3.5 py-1.5 font-['Inter'] text-xs font-semibold text-green-600 transition-all duration-300 hover:bg-green-50 sm:text-sm"
                  >
                    <TrustIcon
                      aria-hidden
                      className="size-5 shrink-0 text-green-600"
                    />
                    <span>{text as string}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col items-start gap-2 lg:flex-row ">
              <Button variant="primary" showIcon={false} onClick={openModal} className="lg:hidden">Get Your Free Quote</Button>
              <Button variant="secondary" showIcon={false} onClick={openModal} className="hidden lg:block cursor-pointer mt-2 lg:mt-0">Call (855)-430-6250</Button>

            </div>

            {/* <a
              href="#quote"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-700 px-5 font-['Barlow_Condensed'] text-lg font-bold uppercase tracking-wide text-white shadow-[0_5px_0_#065f46] transition hover:-translate-y-0.5 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 sm:hidden"
            >
              Start my quote
            </a> */}
            <div className="relative mt-8 w-full overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-lg sm:mt-10">
              <Image
                src="/used-engines-workshop.jpg"
                alt="Replacement engine in an auto workshop"
                width={900}
                height={520}
                className="h-48 w-full object-cover sm:h-52"
                priority
              />
              <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur sm:inset-x-3 sm:bottom-3 sm:p-4">
                <p className="font-['Barlow_Condensed'] text-xl font-extrabold uppercase leading-5 text-slate-950 sm:text-xl">
                  Do not commit until the details make sense.
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-700 sm:text-sm">
                  Your quote gives you a place to review the part, price,
                  delivery, and warranty information together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-600">
              Find parts by category
            </p>
            <h2 className="mt-3 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-none text-slate-950 sm:text-6xl">
              Looking for an engine or transmission? Start here.
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Pick the category you need, share the vehicle details, and use
              your quote to see what you are considering before you buy.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {offers.map(
              ({ title, description, href, icon: Icon, image, imageAlt }) => (
                <button
                  key={title}
                  type="button"
                  onClick={openModal}
                  className="group block w-full text-left overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition duration-200 hover:-translate-y-1 hover:border-emerald-500 hover:bg-white hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 cursor-pointer"
                >
                  <div className="relative h-72 overflow-hidden bg-green-600">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-emerald-950/75 via-emerald-950/10 to-transparent" />
                    <span className="absolute bottom-5 left-5 inline-flex size-11 items-center justify-center rounded-xl bg-white text-green-600 shadow-lg">
                      <Icon aria-hidden className="size-6" />
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-['Barlow_Condensed'] text-3xl font-extrabold uppercase text-slate-950">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-md leading-7 text-slate-600">
                      {description}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 font-semibold text-green-700" >
                      See how to request a quote{" "}
                      <FiArrowRight
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#E6F5E6] px-5 py-12 sm:py-14">
        <div className="mx-auto flex w-full container flex-col items-center gap-7">
          <div className="flex w-full flex-col items-center gap-1">
            <span className="text-center text-base font-bold uppercase tracking-widest text-green-600 font-['Barlow_Condensed']">
              {eyebrow}
            </span>

            <div className="flex w-full flex-col items-center gap-2">
              <h2 className="text-center text-3xl font-extrabold uppercase leading-none tracking-wide text-black-600 font-['Barlow_Condensed'] sm:text-[36px]">
                {title}
              </h2>

              <p className="w-full text-center text-base font-normal text-slate-600 font-['Inter']">
                {description}
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex h-full flex-col justify-between rounded-md bg-white p-4 border border-slate-200/90 transition-all duration-300 hover:border-green-600/40 hover:shadow-[0px_10px_20px_rgba(0,153,0,0.10)] hover:-translate-y-1"
                >
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-green-600/20 bg-green-600/10 transition-all duration-300 group-hover:border-green-600 group-hover:bg-green-600">
                        <Icon className="size-4 text-green-600 stroke-[2] transition-colors duration-300 group-hover:text-white" />
                      </div>

                      <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900 font-['Barlow_Condensed'] transition-colors duration-200 group-hover:text-green-600">
                        {feature.title}
                      </h3>
                    </div>

                    {/* <div className="flex w-full flex-col items-start gap-2">
                      <h3 className="w-full text-lg font-bold uppercase tracking-wide text-gray-900 font-['Barlow_Condensed'] transition-colors duration-200 group-hover:text-green-600">
                       {feature.title}
                      </h3> 
                      <p className="w-full text-[12px] font-normal leading-5 text-slate-600 font-['Inter']">
                        {feature.description}
                      </p>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="bg-emerald-50 px-5 py-16 sm:py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Who we serve
            </p>
            <h2 className="mt-3 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-none text-slate-950 sm:text-5xl">
              For people who would rather check first than deal with a surprise
              later.
            </h2>
          </div>
          <div className="grid gap-3">
            {customers.map((customer) => (
              <div
                key={customer}
                className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <FiUsers
                  aria-hidden
                  className="size-6 shrink-0 text-emerald-700"
                />
                <p className="font-semibold text-slate-800">{customer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-green-600 px-5 py-16 text-white sm:py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-100">
              What problem we solve
            </p>
            <h2 className="mt-3 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-none sm:text-6xl">
              Finding a part is one thing. Knowing what you are getting is
              another.
            </h2>
          </div>
          <ul className="space-y-5">
            {problems.map((problem) => (
              <li
                key={problem}
                className="flex gap-4 text-lg leading-7 text-green-50"
              >
                <FiCheckCircle
                  aria-hidden
                  className="mt-1 size-5 shrink-0 text-green-100"
                />
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-600">
              How it works
            </p>
            <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-slate-950 sm:text-5xl">
              A straightforward way to get the information you need.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              {approvedClaims.fitment} {approvedClaims.pricing}
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {outcomes.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <span className="font-['Barlow_Condensed'] text-lg font-extrabold text-green-600">
                  0{index + 1}
                </span>
                <Icon aria-hidden className="mt-7 size-8 text-slate-900" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E6F5E6] px-5 py-16 sm:py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-600">
              What you receive
            </p>
            <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-slate-950 sm:text-5xl">
              A quote is more useful when it answers the questions you already
              have.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-700">
              The goal is not to hand you a number and leave you guessing. It is
              to give you the details you need to look over.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {quoteIncludes.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-emerald-100 bg-white p-5 text-slate-800 shadow-sm"
              >
                <FiCheckCircle
                  aria-hidden
                  className="mt-0.5 size-5 shrink-0 text-green-600"
                />
                <span className="font-semibold leading-6">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-600">
                Helpful before you request a quote
              </p>
              <h2 className="mt-3 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-none text-slate-950 sm:text-6xl">
                A little preparation can save a lot of back-and-forth.
              </h2>
            </div>
            {/* <Link
              href="/guides/how-to-buy-a-used-engine"
              className="inline-flex min-h-11 items-center font-semibold text-emerald-800 underline underline-offset-4"
            >
              View all buying guidance{" "}
              <FiArrowRight aria-hidden className="ml-2" />
            </Link> */}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {buyingGuides.map((guide) => (
              <div
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
              >
                <p className="font-['Barlow_Condensed'] text-2xl font-extrabold uppercase leading-6 text-slate-950">
                  {guide.title}
                </p>
                <p className="mt-3 leading-6 text-slate-600">
                  {guide.description}
                </p>
                {/* <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">
                  Read the guide{" "}
                  <FiArrowRight
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-16 sm:py-20">
        <div className="container mx-auto rounded-3xl bg-white p-7 shadow-sm sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-600">
                What you do not have to do
              </p>
              {/* <a href="#quote" className="mt-7 inline-flex min-h-12 items-center rounded-lg bg-emerald-700 px-6 font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-white shadow-[0_5px_0_#065f46] transition hover:-translate-y-0.5 hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600">Get my quote</a> */}
              <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-slate-950 sm:text-5xl">
                You do not have to sort through a major part purchase by
                yourself.
              </h2>
              <button
                type="button"
                onClick={openModal}
                className="mt-7 inline-flex min-h-12 items-center rounded-lg bg-green-600 px-6 font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-white shadow-[0_5px_0_#065f46] transition hover:-translate-y-0.5 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
              >
                Ask for my quote
              </button>
              {/* <a href="#quote" className="mt-7 inline-flex min-h-12 items-center rounded-lg bg-emerald-700 px-6 font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-white shadow-[0_5px_0_#065f46] transition hover:-translate-y-0.5 hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600">Get my quote</a> */}
            </div>
            <ul className="space-y-4">
              {noLongerNeedTo.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl bg-emerald-50 p-4 text-slate-800"
                >
                  <FiCheckCircle
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-green-600"
                  />
                  <span className="font-medium leading-6">
                    You do not have to{" "}
                    {item.charAt(0).toLowerCase() + item.slice(1)}.
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
