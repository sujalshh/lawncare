import { BookingForm } from "@/components/BookingForm";
import { Navbar } from "@/components/Navbar";
import { BRAND } from "@/lib/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Request a Visit | ${BRAND.name}`,
  description: `Schedule land management services with ${BRAND.legalName}.`,
};

export default function BookPage() {
  return (
    <>
      <Navbar ready={true} />
      <div className="min-h-screen bg-off-white pb-20 pt-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <header className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {BRAND.legalName}
            </p>
            <h1 className="heading-display mt-2 text-3xl sm:text-4xl">
              Request a site visit
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-muted">
              Tell us about your property and the services you need. We will
              review your request and confirm timing by phone or email.
            </p>
          </header>
          <BookingForm />
        </div>
      </div>
    </>
  );
}
