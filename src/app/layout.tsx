import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sheard/Navbar";
import Footer from "@/components/sheard/Footer";
import WhatsAppButton from "@/components/sheard/WhatsAppButton";
import SiteMotion from "@/components/sheard/SiteMotion";
import SmoothScroll from "@/components/sheard/SmoothScroll";
import { QuoteModalProvider } from "@/components/sheard/QuoteModal";
import { JsonLd, organizationSchema } from "@/components/seo/JsonLd";
import { business } from "@/lib/business";
import { siteUrl } from "@/lib/seo";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Used Engines & Transmissions Quotes | A&R Auto Parts",
    template: "%s | A&R Auto Parts",
  },
  description: business.description,
  applicationName: business.name,
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${inter.variable}`}>
        <JsonLd data={organizationSchema} />
        <QuoteModalProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
            <SiteMotion />
          </SmoothScroll>
        </QuoteModalProvider>
      </body>
    </html>
  );
}
