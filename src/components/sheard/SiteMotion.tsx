"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = "main > section, main section[data-motion-section], footer";
const staggerSelector = ".grid > article, .grid > div, [data-motion-stagger] > *";

export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const staggerItems = Array.from(document.querySelectorAll<HTMLElement>(staggerSelector));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("motion-in");
        observer.unobserve(entry.target);
      }),
      { threshold: 0.12, rootMargin: "0px 0px -48px" },
    );

    document.body.classList.add("motion-enabled");
    revealItems.forEach((item) => {
      item.classList.add("motion-reveal");
      observer.observe(item);
    });
    staggerItems.forEach((item, index) => {
      item.classList.add("motion-stagger-item");
      item.style.setProperty("--motion-delay", `${Math.min(index % 6, 5) * 45}ms`);
    });

    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-enabled");
      revealItems.forEach((item) => item.classList.remove("motion-reveal", "motion-in"));
      staggerItems.forEach((item) => {
        item.classList.remove("motion-stagger-item");
        item.style.removeProperty("--motion-delay");
      });
    };
  }, [pathname]);

  return null;
}
