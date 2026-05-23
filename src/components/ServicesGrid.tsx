"use client";

import { motion } from "framer-motion";
import { Fence, Leaf, Shovel, Trees, Tractor, Waves } from "lucide-react";

const services = [
  {
    title: "Lawn & Turf Care",
    desc: "Mowing, edging, fertilization, and healthy turf programs for lawns of any size.",
    icon: Leaf,
  },
  {
    title: "Landscape & Beds",
    desc: "Planting, mulching, bed maintenance, and design support for polished outdoor spaces.",
    icon: Trees,
  },
  {
    title: "Property Cleanups",
    desc: "Seasonal debris removal, storm cleanup, and site tidying for homes and lots.",
    icon: Shovel,
  },
  {
    title: "Brush & Lot Clearing",
    desc: "Overgrowth removal, access paths, and preparation for building or planting.",
    icon: Tractor,
  },
  {
    title: "Drainage & Grading",
    desc: "Water management, erosion concerns, and surface grading to protect your property.",
    icon: Waves,
  },
  {
    title: "Ongoing Land Management",
    desc: "Scheduled visits and seasonal plans so your entire property stays maintained.",
    icon: Fence,
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Our Services
          </p>
          <h2 className="heading-display mt-2 text-3xl sm:text-4xl">
            Land management for every season
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-muted">
            From routine turf care to full-property maintenance — we handle the
            work so your land stays safe, neat, and ready to use.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-xl border border-border bg-off-white p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald/5 text-emerald">
                <s.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-emerald">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
