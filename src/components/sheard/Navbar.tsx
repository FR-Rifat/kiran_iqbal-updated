"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/button";
import { navItems } from "@/Content/data";

const logo = "/logo1.png";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-20 bg-white shadow-[0px_2px_12px_0px_rgba(8,42,84,0.06)] border-b-4 border-green-600">
      <div className="mx-auto flex h-full w-full container items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image src={logo} alt="Logo" width={200} height={62} className="h-16 w-48 object-contain" />
        </Link>

        <nav className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} className={`text-sm font-['Inter'] leading-4 transition-colors duration-200 ${isActive ? "font-bold text-green-600" : "font-normal text-gray-700 hover:text-green-600"}`}>
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        <Button variant="primary">Call Now</Button>
      </div>
    </header>
  );
};

export default Navbar;