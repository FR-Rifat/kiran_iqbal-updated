"use client";

import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/Content/data";
import { business } from "@/lib/business";
import { useQuoteModal } from "@/components/sheard/QuoteModal";

const Footerimg = "/logo1.png";

const Footer = () => {
  const { openModal } = useQuoteModal();

  return (
    <>
      <section className="bg-white px-5 py-12 sm:py-16">
        <div className="container relative mx-auto overflow-hidden rounded-[28px] border border-green-600/10 bg-[#e6f5e6] px-6 py-14 text-center shadow-[0_12px_36px_rgba(0,153,0,0.06)] sm:px-10 sm:py-16">
          <div
            aria-hidden
            className="absolute -bottom-24 -left-20 size-64 rounded-full border border-green-600/10"
          >
            <span className="absolute inset-5 rounded-full border border-green-600/10" />
            <span className="absolute inset-10 rounded-full border border-green-600/10" />
            <span className="absolute inset-15 rounded-full border border-green-600/10" />
            <span className="absolute inset-20 rounded-full border border-green-600/10" />
          </div>

          <div
            aria-hidden
            className="absolute -right-20 -top-24 size-64 rounded-full border border-green-600/10"
          >
            <span className="absolute inset-5 rounded-full border border-green-600/10" />
            <span className="absolute inset-10 rounded-full border border-green-600/10" />
            <span className="absolute inset-15 rounded-full border border-green-600/10" />
            <span className="absolute inset-20 rounded-full border border-green-600/10" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
            <h2 className="font-['Barlow_Condensed'] text-4xl font-extrabold uppercase leading-none text-gray-900 sm:text-5xl">
              Still Have <span className="text-green-600">Questions?</span>
            </h2>

            <p className="mt-5 max-w-4xl font-['Inter'] text-sm leading-6 text-gray-600 sm:text-base">
              Have questions or need assistance? Our knowledgeable Customer
              Support Team is here to help. Call us during business hours, and
              we&apos;ll be happy to assist with part availability,
              compatibility, warranty information, or your order.
            </p>

            <a
              href={`tel:${business.phone}`}
              aria-label={`Call customer support at ${business.phone}`}
              className="group mt-8 inline-flex -skew-x-12 items-center justify-center bg-green-600 px-10 py-4 text-white shadow-[0_6px_0_rgba(6,120,6,1)] transition hover:-translate-y-1 hover:bg-green-700 hover:shadow-[0_8px_0_rgba(6,120,6,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600"
            >
              <span className="skew-x-12 font-['Barlow_Condensed'] text-lg font-bold tracking-wide">
                {business.phone}
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-zinc-200 bg-green-100">
      <div className="mx-auto flex w-full container flex-col gap-12 px-8 py-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col items-start gap-5 lg:w-96">
            <Link href="/">
              <Image src={Footerimg} alt="A&R Auto Parts" width={200} height={62} className="h-16 w-48 object-contain" />
            </Link>

            <p className="max-w-96 font-['Inter'] text-sm font-normal leading-6 text-gray-900">
              {footerData.description}
            </p>

            <div
              className="flex flex-col items-start gap-4"
              aria-label="Trust and accreditation badges"
            >
              <div className="relative w-32" aria-label="Trustpilot rating">
                <Image
                  src="/footer-logo/trustpilot.webp"
                  alt=""
                  width={140}
                  height={66}
                  className="h-auto w-full object-contain"
                />
                <span className="absolute left-[27%] top-[22%] flex h-[34%] w-[73%] items-center bg-green-100 pl-1 font-sans text-[18px] font-bold leading-none text-emerald-900">
                  Trustpilot
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <Image
                  src="/footer-logo/bbb.webp"
                  alt="BBB Accredited Business"
                  width={120}
                  height={51}
                  className="h-auto w-28 object-contain"
                />
                <Image
                  src="/footer-logo/dmca.webp"
                  alt="DMCA Protected"
                  width={120}
                  height={28}
                  className="h-auto w-28 object-contain"
                />
              </div>
            </div>

            <div className="font-['Inter'] text-sm font-semibold leading-5 text-gray-900">
              <div>{footerData.hours}</div>
              <div className="text-gray-900/70 mt-4 hover:underline">
                Call: {" "}
                {business.phone ? (
                  <a
                    href={`tel:${business.phone}`}
                    aria-label={`Call ${business.phone}`}
                  >
                    {business.phone}
                  </a>
                ) : null}
                {business.phone && business.email ? " · " : null}
                {business.email ?? null}
                {!business.phone && !business.email
                  ? "Contact details are available on our contact page."
                  : null}
              </div>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3 lg:gap-16 lg:pl-12">
            <FooterColumn title="Quick Links" items={footerData.quickLinks} />
            <FooterColumn title="Service" items={footerData.services} />
            <FooterColumn title="Legal" items={footerData.legal} />
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-['Inter'] text-sm font-normal leading-5 text-slate-500">
            {footerData.copyright}
          </p>

          <p className="font-['Inter'] text-sm font-normal leading-5 text-slate-500">
            {footerData.tagline}
          </p>
        </div>
      </div>
      </footer>
    </>
  );
};

interface FooterColumnProps {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}

const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h3 className="font-['Barlow_Condensed'] text-base font-bold uppercase leading-6 tracking-wide text-gray-900">
        {title}
      </h3>

      <nav className="flex flex-col items-start gap-3">
        {items.map((item) => (
          <Link key={item.label} href={item.href} className="font-['Inter'] text-sm font-normal leading-5 text-gray-900 transition-colors hover:text-green-600">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Footer;
