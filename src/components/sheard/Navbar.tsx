"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import Button from "@/components/ui/button";
import { navItems } from "@/Content/data";

const logo = "/logo1.png";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = (isActive: boolean) => `font-['Inter'] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600 ${isActive ? "font-bold text-green-600" : "font-normal text-gray-700 hover:text-green-600"}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-green-600 bg-white shadow-[0px_2px_12px_0px_rgba(8,42,84,0.1)]">
      <div className="container relative mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-5 lg:h-20">
        <Link href="/" className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600" onClick={() => setIsMenuOpen(false)}>
          <Image src={logo} alt="A&R Auto Parts home" width={200} height={62} priority className="h-12 w-36 object-contain sm:h-14 sm:w-44 lg:h-16 lg:w-48" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-4 lg:flex xl:gap-7">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} className={`whitespace-nowrap text-xs leading-4 xl:text-sm ${navLinkClass(isActive)}`}>
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block"><Button variant="primary">Call Now</Button></div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="tel:+18554306250" aria-label="Call A&R Auto Parts" className="inline-flex size-11 items-center justify-center rounded-lg border border-green-600 text-green-700 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            <FiPhone aria-hidden className="size-5" />
          </a>
          <button type="button" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-controls="mobile-navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex size-11 items-center justify-center rounded-lg bg-green-600 text-white transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            {isMenuOpen ? <FiX aria-hidden className="size-6" /> : <FiMenu aria-hidden className="size-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute left-0 top-full w-full border-b border-slate-200 bg-white px-4 py-3 shadow-xl lg:hidden">
            <div className="mx-auto flex max-w-2xl flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className={`flex min-h-11 items-center rounded-lg px-4 text-sm uppercase tracking-wide ${navLinkClass(isActive)} ${isActive ? "bg-green-50" : "hover:bg-slate-50"}`}>{item.label}</Link>;
              })}
              <a href="tel:+18554306250" className="mt-2 flex min-h-11 items-center justify-center rounded-lg bg-green-600 px-5 font-['Barlow_Condensed'] text-lg font-bold uppercase tracking-wide text-white shadow-[0_4px_0_#067806] transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Call Now</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
