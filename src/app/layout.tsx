import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Kiran Iqbal — Independent Designer", description: "A considered digital portfolio." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
