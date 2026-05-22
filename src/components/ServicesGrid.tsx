"use client";

import { motion } from "framer-motion";
import { Droplets, Leaf, Scissors, Sparkles } from "lucide-react";

const services = [
  {
    title: "Precision Mowing",
    desc: "Even cuts, clean edges, and clippings cleared from walks and drives.",
    icon: Scissors,
  },
  {
    title: "Landscape Design",
    desc: "Bed layout, planting, and ongoing care for curb appeal.",
    icon: Leaf,
  },
  {
    title: "Fertilization & Weed Control",
    desc: "Programs to strengthen turf and reduce weeds.",
    icon: Droplets,
  },
  {
    title: "Seasonal Clean-ups",
    desc: "Spring and fall debris removal and lawn prep.",
    icon: Sparkles,
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-light">
            Our Services
          </p>
          <h2 className="heading-display mt-2 text-3xl sm:text-4xl">
            What we offer
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-xl border border-border bg-off-white p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
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
