import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { getGuide, guides, guideSlugs } from "@/features/Guides/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return guideSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  return guide ? pageMetadata(guide.title, guide.description, `/guides/${guide.slug}`) : {};
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <main className="bg-slate-50 px-5 py-16 sm:py-20"><JsonLd data={faqSchema(guide.faq)} /><article className="container mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm sm:p-10"><p className="text-sm font-semibold uppercase tracking-widest text-green-700">Buying guide</p><h1 className="mt-3 font-['Barlow_Condensed'] text-5xl font-extrabold uppercase leading-none text-gray-900">{guide.title}</h1><p className="mt-5 text-xl leading-8 text-slate-700">{guide.summary}</p><div className="mt-10 space-y-9">{guide.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 leading-7 text-slate-700">{paragraph}</p>)}{section.bullets && <ul className="mt-4 list-disc space-y-1 pl-6 text-slate-700">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div><section className="mt-10 border-t pt-8"><h2 className="text-2xl font-bold text-gray-900">Quick answers</h2>{guide.faq.map((item) => <div key={item.question} className="mt-5"><h3 className="font-semibold text-gray-900">{item.question}</h3><p className="mt-2 leading-7 text-slate-700">{item.answer}</p></div>)}</section><aside className="mt-10 rounded-xl bg-green-50 p-6"><h2 className="text-xl font-bold text-gray-900">Need a quote?</h2><p className="mt-2 text-slate-700">Send your vehicle information and we’ll respond with the details available for the quoted part.</p><Link href="/#quote" className="mt-4 inline-block font-semibold text-green-800 underline">Request a quote</Link></aside></article></main>;
}
