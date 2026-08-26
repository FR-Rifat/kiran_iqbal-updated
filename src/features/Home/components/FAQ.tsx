"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { faqData } from "@/Content/data";

const phoneNumber = "855-430-6250";

const renderAnswer = (answer: string) =>
  answer.split(phoneNumber).map((part, index, parts) => (
    <span key={`${index}-${part}`}>
      {part}
      {index < parts.length - 1 && (
        <a
          href={`tel:${phoneNumber}`}
          aria-label={`Call ${phoneNumber}`}
          className="font-semibold text-green-700 underline decoration-green-300 underline-offset-2 transition hover:text-green-800 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          {phoneNumber}
        </a>
      )}
    </span>
  ));

const FAQ = () => {
  const { eyebrow, title, faqs } = faqData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full px-6 py-16 lg:px-36">
      <div className="mx-auto flex w-full container flex-col items-center gap-11">
        <div className="flex w-full max-w-160 flex-col items-center gap-2">
          <span className="text-center text-sm font-bold uppercase leading-6 tracking-widest text-green-600 font-['Barlow_Condensed']">
            {eyebrow}
          </span>

          <h2 className="text-center text-5xl font-extrabold uppercase leading-[52.8px] tracking-wide text-gray-900 font-['Barlow_Condensed']">
            {title.split(",")[0]},{" "}
            <span className="text-green-600">{title.split(",")[1]}</span>
          </h2>
        </div>

        <div className="flex w-full max-w-205 flex-col gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`group w-full overflow-hidden rounded-xl bg-white border transition-all duration-300 ${
                  isOpen
                    ? "border-green-600 shadow-[0px_12px_32px_0px_rgba(0,153,0,0.10)]"
                    : "border-slate-200/90 shadow-[0px_6px_20px_0px_rgba(8,42,84,0.05)] hover:border-slate-300 hover:shadow-[0px_10px_28px_0px_rgba(8,42,84,0.08)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex min-h-16 w-full items-center justify-between gap-5 px-6 py-4 text-left cursor-pointer"
                >
                  <span
                    className={`text-xl font-bold uppercase leading-7 tracking-wide font-['Barlow_Condensed'] transition-colors duration-200 ${
                      isOpen ? "text-green-600" : "text-gray-900 group-hover:text-green-600"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-green-600 text-white rotate-180"
                        : "bg-green-600/10 text-green-600 group-hover:bg-green-600/20"
                    }`}
                  >
                    <FiChevronDown className="size-5 stroke-[2.5]" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-1 whitespace-pre-wrap break-words border-t border-slate-100 px-6 pb-6 pt-4 font-['Inter'] text-base font-normal leading-7 text-slate-600">
                      {renderAnswer(faq.answer)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
