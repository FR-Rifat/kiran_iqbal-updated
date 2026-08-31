"use client";

import QuoteForm from "@/components/sheard/QuoteForm";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { business } from "@/lib/business";
import { footerData } from "@/Content/data";

const ContactContent = () => {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:py-20 ">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <aside className="flex w-full flex-col gap-4">
          {business.address && (
            <ContactCard icon={FiMapPin} title="Our Address">
              <a
                href="https://maps.app.goo.gl/Po9YKX7jTm9MdW2y5"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-green-600"
              >
                <address className="not-italic">{business.address}</address>
              </a>
            </ContactCard>
          )}

          <ContactCard icon={FiMail} title="Email Us">
            <div className="flex flex-col gap-2">
              {footerData.emailInquiries?.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1.5 leading-snug">
                  <span className="font-semibold text-gray-800 text-sm">{item.label} :</span>
                  <a
                    href={`mailto:${item.email}`}
                    className="font-medium text-emerald-800 transition-colors duration-200 hover:text-green-600 hover:underline break-all"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </ContactCard>

          {business.phone && (
            <ContactCard icon={FiPhone} title="Call Us">
              <a
                href={`tel:${business.phone}`}
                className="transition-colors duration-200 hover:text-green-600"
              >
                {business.phone}
              </a>
            </ContactCard>
          )}
          {!business.phone && !business.email && (
            <ContactCard icon={FiPhone} title="Contact details">
              <span>
                Our contact details are being verified. You can still submit
                your vehicle and part request.
              </span>
            </ContactCard>
          )}
        </aside>

        <QuoteForm />
      </div>
    </section>
  );
};

type CardProps = {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
};

function ContactCard({
  icon: Icon,
  title,
  children,
  bordered = true,
}: CardProps) {
  return (
    <div
      className={`flex min-h-28 items-start sm:items-center gap-5 rounded-xl bg-white px-5 py-6 sm:px-7 ${bordered
          ? "border border-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
          : ""
        }`}
    >
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-green-600 text-white shadow-[0_8px_20px_rgba(0,153,0,0.18)]">
        <Icon aria-hidden className="size-6" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-['Barlow_Condensed'] text-xl font-bold text-gray-900">
          {title}
        </p>

        <div className="mt-1 font-['Inter'] text-sm font-normal leading-6 text-slate-600 sm:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
