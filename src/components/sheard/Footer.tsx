import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/Content/data";

const Footerimg = "/logo1.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-200 bg-green-100">
      <div className="mx-auto flex w-full container flex-col gap-12 px-8 py-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col items-start gap-5 lg:w-96">
            <Link href="/">
              <Image src={Footerimg} alt="Northline Parts" width={200} height={62} className="h-16 w-48 object-contain" />
            </Link>

            <p className="max-w-96 text-sm font-normal leading-4 text-gray-900 font-['Inter']">
              {footerData.description}
            </p>

            <div className="text-sm font-semibold leading-5 text-gray-900 font-['Inter']">
              <div>{footerData.hours}</div>
              <div className="text-gray-900/70">
                {footerData.phone} · {footerData.email}
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
          <p className="text-sm font-normal leading-5 text-slate-500 font-['Inter']">
            {footerData.copyright}
          </p>

          <p className="text-sm font-normal leading-5 text-slate-500 font-['Inter']">
            {footerData.tagline}
          </p>
        </div>
      </div>
    </footer>
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
      <h3 className="text-base font-bold uppercase leading-6 tracking-wide text-gray-900 font-['Barlow_Condensed']">
        {title}
      </h3>

      <nav className="flex flex-col items-start gap-3">
        {items.map((item) => (
          <Link key={item.label} href={item.href} className="text-sm font-normal leading-5 text-gray-900 transition-colors hover:text-green-600 font-['Inter']">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Footer;