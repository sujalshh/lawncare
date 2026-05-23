"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    title: "Reliability",
    text: "Clear schedules, on-time crews, and proactive updates when weather or site conditions change your visit.",
  },
  {
    title: "Full-property focus",
    text: "We look at the whole site — turf, beds, access, drainage, and seasonal needs — not just a quick mow.",
  },
  {
    title: "Experienced crew",
    text: "Equipment and know-how for residential yards, larger lots, and ongoing land management contracts.",
  },
];

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll("[data-benefit]");
    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="section-pad bg-charcoal text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Why Choose Us
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
            The Weber standard
          </h2>
        </div>

        <div ref={containerRef} className="space-y-12 sm:space-y-16">
          {benefits.map((b, i) => (
            <div key={b.title} data-benefit data-index={i}>
              <h3
                className={`font-[family-name:var(--font-playfair)] text-xl font-bold transition-colors sm:text-2xl ${
                  active === i ? "text-accent" : "text-white"
                }`}
              >
                {b.title}
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/80">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
