"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function MowerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 72"
      className={className}
      aria-hidden
      fill="none"
    >
      <rect x="12" y="38" width="72" height="20" rx="4" fill="#dc2626" />
      <rect x="78" y="32" width="32" height="26" rx="4" fill="#b91c1c" />
      <rect x="84" y="38" width="20" height="12" rx="2" fill="#f8fafc" opacity="0.9" />
      <circle cx="32" cy="62" r="10" fill="#0a0a0a" />
      <circle cx="32" cy="62" r="4" fill="#fca5a5" />
      <circle cx="68" cy="62" r="10" fill="#0a0a0a" />
      <circle cx="68" cy="62" r="4" fill="#fca5a5" />
      <path
        d="M8 36 L8 14 L52 14 L52 36"
        stroke="#fca5a5"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const mowerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const overlay = overlayRef.current;
    const mower = mowerRef.current;
    const root = rootRef.current;
    if (!overlay || !mower || !root) return;

    const ctx = gsap.context(() => {
      gsap.set(overlay, { clipPath: "inset(0 0 0 0%)" });
      gsap.set(mower, { left: "0%", xPercent: 0, force3D: true });

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          gsap.to(root, {
            opacity: 0,
            duration: 0.55,
            ease: "power2.inOut",
            onComplete: () => {
              setVisible(false);
              onComplete();
            },
          });
        },
      });

      tl.to(
        overlay,
        {
          clipPath: "inset(0 0 0 100%)",
          duration: 3,
          ease: "power2.inOut",
        },
        0
      );

      tl.to(
        mower,
        {
          left: "100%",
          xPercent: -50,
          duration: 3,
          ease: "power2.inOut",
        },
        0
      );

      // Gentle float so the mower feels alive, not robotic
      tl.to(
        mower,
        {
          y: -6,
          duration: 0.45,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 5,
        },
        0
      );
    }, root);

    return () => ctx.revert();
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="preloader-root fixed inset-0 z-[200] flex items-center justify-center"
      aria-hidden
    >
      <div ref={overlayRef} className="absolute inset-0 bg-black will-change-[clip-path]" />
      <div
        ref={mowerRef}
        className="pointer-events-none absolute top-1/2 z-10 -translate-y-1/2 will-change-transform"
      >
        <MowerIcon className="h-14 w-28 drop-shadow-2xl sm:h-16 sm:w-32" />
      </div>
      <p className="absolute bottom-12 text-sm font-medium tracking-widest text-white/70">
        WEBER
      </p>
    </div>
  );
}
