"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const headline = "We handle the ground. You enjoy the view";

export function Hero({ ready }: { ready: boolean }) {
  const words = headline.split(" ");

  return (
    <section className="relative flex min-h-[85vh] items-center border-b border-border bg-emerald">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald via-emerald-light to-emerald opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-28 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80"
        >
          AC LawnCare
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
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/90"
        >
          Professional mowing, edging, and seasonal yard care for homes that
          deserve a neat, healthy lawn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Link href="/book" className="btn-primary bg-white text-emerald hover:bg-off-white">
            Book a Service
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
