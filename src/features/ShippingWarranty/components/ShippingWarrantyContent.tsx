"use client";

import { useState } from "react";
import {
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiMapPin,
  FiPackage,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { RxCrossCircled } from "react-icons/rx";

const process = [
  {
    number: "01",
    title: "Reservation & Payment",
    text: "Your unit is reserved and prepared as soon as payment is confirmed.",
  },
  {
    number: "02",
    title: "Confirmed Delivery",
    text: "Our team verifies the order and coordinates the shipment.",
  },
  {
    number: "03",
    title: "Tracking Information",
    text: "You receive shipment details as your order moves through delivery.",
  },
];
const deliverySteps = [
  "Confirm Your Order",
  "Parts Preparation",
  "Shipment",
  "Delivery",
];
const deliveryExpectations: { title: string; text: string; icon: IconType }[] =
  [
    {
      title: "Shipping Time",
      text: "Most orders ship within 5–7 business days.",
      icon: FiClock,
    },
    {
      title: "Freight Delivery",
      text: "Large parts ship by freight with tracking.",
      icon: FiTruck,
    },
    {
      title: "Delivery Location",
      text: "Ship to your home, shop, or approved location.",
      icon: FiMapPin,
    },
    {
      title: "Inspection At Delivery",
      text: "Inspect the package before signing the delivery receipt.",
      icon: FiPackage,
    },
    {
      title: "Safe Handling",
      text: "Parts are packed and transported with care.",
      icon: FiShield,
    },
    {
      title: "Professional Service",
      text: "Contact our support team if you need assistance.",
      icon: FiCheckCircle,
    },
  ];
const exclusions = [
  "Improper installation",
  "Modifications or alterations of any kind",
  "Labor or installation costs",
  "Damage caused by abuse or neglect",
  "Incorrect fitment or misuse",
  "Damage caused by failure to follow manufacturer recommendations",
];
const questions = [
  "How do I place an order?",
  "Do you ship nationwide?",
  "Can I pick up parts in person?",
  "What's included with a used engine?",
  "Can you ship to a business address?",
  "Can you ship to a residential address?",
  "What if my order is damaged, incorrect, or defective?",
  "Do you offer a warranty on used engines & transmissions?",
  "What if my engine or transmission fails?",
];

const ShippingWarrantyContent = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  return (
    <>
      <section className="bg-slate-50 px-5 py-16 sm:py-20">
        <div className="container mx-auto text-center">
          <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.18em] text-green-600">
            Our Shipping Process
          </p>
          <h2 className="mt-3 font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-gray-900 sm:text-5xl">
            From Order To Delivery In{" "}
            <span className="text-green-600">4 Simple Steps</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step, index) => (
              <article
                key={step}
                className="rounded-xl bg-white p-6 text-left shadow-sm"
              >
                <span className="font-['Barlow_Condensed'] text-3xl font-extrabold text-green-600">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-['Barlow_Condensed'] text-xl font-bold uppercase text-gray-900">
                  {step}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We keep the process clear and send updates as your order
                  progresses.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full border-t border-b border-gray-200 bg-gray-50 px-6 py-16 lg:px-20 lg:py-20">
        <div className="container mx-auto flex w-full flex-col items-center gap-10">
          {/* Header */}
          <div className="flex w-full flex-col items-center gap-3 text-center">
            <span className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
              SHIPPING DETAILS
            </span>

            <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-tight text-gray-900 md:text-5xl">
              WHAT TO EXPECT WITH{" "}
              <span className="text-green-600">YOUR DELIVERY</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliveryExpectations.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="group flex flex-col items-start gap-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:shadow-[0_8px_20px_rgba(22,163,74,0.06)]"
              >
                {/* Icon */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(22,163,74,0.15)]">
                  <Icon aria-hidden className="size-5 stroke-2" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start gap-2">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase leading-5 text-gray-900 transition-colors duration-200 group-hover:text-green-600">
                    {title}
                  </h3>

                  <p className="font-['Inter'] text-base font-normal leading-5 text-gray-600">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full border-t border-b border-gray-200 bg-white px-6 py-16 lg:px-20 lg:py-20">
        <div className="mx-auto flex w-full max-w-300 flex-col items-center gap-6">
          {/* Header */}
          <div className="flex w-full flex-col items-center gap-5 text-center">
            <p className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-5 tracking-widest text-green-600">
              Warranty Exclusions
            </p>

            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold uppercase leading-tight text-gray-900 sm:text-5xl">
              Know What Is <span className="text-green-600">Not Covered</span>
            </h2>
          </div>

          {/* Exclusions Card */}
          <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.03)] sm:p-8">
            <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {exclusions.map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-2 transition-colors duration-300"
                >
                  <RxCrossCircled
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-green-600 transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="font-['Inter'] text-base font-normal leading-5 text-slate-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-center font-['Inter'] text-base font-normal leading-5 text-gray-600">
            Warranty exclusions vary by product. Refer to the warranty
            documentation associated with your order.
          </p>
        </div>
      </section>
    </>
  );
};

export default ShippingWarrantyContent;
