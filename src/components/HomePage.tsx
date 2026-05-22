"use client";

import { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { Preloader } from "./Preloader";
import { ServicesGrid } from "./ServicesGrid";
import { WhyChooseUs } from "./WhyChooseUs";
import { Navbar } from "./Navbar";

export function HomePage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <>
      {!ready && <Preloader onComplete={() => setReady(true)} />}
      <Navbar ready={ready} />
      <Hero ready={ready} />
      {ready && (
        <>
          <ServicesGrid />
          <WhyChooseUs />
        </>
      )}
    </>
  );
}
