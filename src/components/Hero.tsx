"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/brand";

const headline = BRAND.tagline;

export function Hero({ ready }: { ready: boolean }) {
  const words = headline.split(" ");

  return (
    <section className="relative flex min-h-[85vh] items-center border-b border-border bg-emerald">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute left-0 right-0 top-0 h-px bg-accent shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-accent shadow-[0_0_12px_rgba(220,38,38,0.6)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-28 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70"
        >
          {BRAND.name}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 text-base font-medium text-white/90 sm:text-lg"
        >
          {BRAND.legalName}
        </motion.p>

        <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.06, duration: 0.5 }}
              className="mr-[0.2em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85"
        >
          Full-service land management for residential and commercial properties —
          mowing, landscaping, cleanups, clearing, and ongoing care tailored to
          your land.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Link href="/book" className="btn-primary">
            Request a Visit
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
