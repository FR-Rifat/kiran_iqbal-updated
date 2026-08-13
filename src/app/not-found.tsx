import Link from "next/link";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <h1 className="font-['Barlow_Condensed'] text-6xl font-extrabold uppercase text-zinc-900">
        404 - Page Not Found
      </h1>
      <p className="max-w-md font-['Inter'] text-slate-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  );
}
