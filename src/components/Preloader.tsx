"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

function MowerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 72"
      className={className}
      aria-hidden
      fill="none"
    >
      <rect x="12" y="38" width="72" height="20" rx="4" fill="#4ade80" />
      <rect x="78" y="32" width="32" height="26" rx="4" fill="#22c55e" />
      <rect x="84" y="38" width="20" height="12" rx="2" fill="#f8fafc" opacity="0.9" />
      <circle cx="32" cy="62" r="10" fill="#0f4c3a" />
      <circle cx="32" cy="62" r="4" fill="#4ade80" />
      <circle cx="68" cy="62" r="10" fill="#0f4c3a" />
      <circle cx="68" cy="62" r="4" fill="#4ade80" />
      <path
        d="M8 36 L8 14 L52 14 L52 36"
        stroke="#4ade80"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 2.4;
    const obj = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".preloader-root", {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            setVisible(false);
            onComplete();
          },
        });
      },
    });

    tl.to(obj, {
      value: 1,
      duration,
      ease: "power2.inOut",
      onUpdate: () => setProgress(obj.value),
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!visible) return null;

  const clipLeft = progress * 100;

  return (
    <div
      className="preloader-root fixed inset-0 z-[200] flex items-center justify-center"
      aria-hidden={progress >= 1}
    >
      {/* Site peek-through is handled by clipping the overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          clipPath: `inset(0 0 0 ${clipLeft}%)`,
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-10 -translate-y-1/2"
        style={{
          left: `calc(${progress * 100}% - 56px)`,
          transition: "left 0.05s linear",
        }}
      >
        <MowerIcon className="h-14 w-28 drop-shadow-2xl sm:h-16 sm:w-32" />
      </div>
      <p className="absolute bottom-12 text-sm font-medium tracking-widest text-white/70">
        WEBER
      </p>
    </div>
  );
}
