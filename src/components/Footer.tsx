import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-emerald" />
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-emerald">
              AC LawnCare
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-muted">
            Lawn care you can count on.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm font-medium text-charcoal">
          <Link href="/" className="hover:text-emerald">
            Home
          </Link>
          <Link href="/#services" className="hover:text-emerald">
            Services
          </Link>
          <Link href="/book" className="hover:text-emerald">
            Book
          </Link>
        </nav>
        <p className="text-xs text-slate-muted">
          © {new Date().getFullYear()} AC LawnCare
        </p>
      </div>
    </footer>
  );
}
