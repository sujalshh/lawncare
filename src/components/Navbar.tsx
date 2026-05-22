"use client";

import { motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/book", label: "Book" },
];

export function Navbar({ ready = true }: { ready?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald/10">
            <Leaf className="h-5 w-5 text-emerald" />
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-emerald">
            AC LawnCare
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal hover:bg-off-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link href="/book" className="btn-primary py-2.5 text-sm">
              Book a Service
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-emerald md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-border px-5 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-charcoal hover:bg-off-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  );
}
