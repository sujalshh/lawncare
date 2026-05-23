import Link from "next/link";
import { BRAND } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-border bg-emerald py-12 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div>
          <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold">
            {BRAND.name}
          </p>
          <p className="mt-1 text-sm text-white/75">{BRAND.legalName}</p>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Professional land management for properties that deserve consistent
            care year-round.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm font-medium text-white/85">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/#services" className="hover:text-accent">
            Services
          </Link>
          <Link href="/book" className="hover:text-accent">
            Book
          </Link>
        </nav>
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} {BRAND.legalName}
        </p>
      </div>
    </footer>
  );
}
