import { BookingForm } from "@/components/BookingForm";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Visit | AC LawnCare",
  description: "Request a lawn care appointment with AC LawnCare.",
};

export default function BookPage() {
  return (
    <>
      <Navbar ready={true} />
      <div className="min-h-screen bg-off-white pb-20 pt-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <header className="mb-12">
            <h1 className="heading-display text-3xl sm:text-4xl">
              Book a visit
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-muted">
              Complete the sections below. Your request is sent to our team by
              email. We will confirm your appointment date and time as soon as we
              can.
            </p>
          </header>
          <BookingForm />
        </div>
      </div>
    </>
  );
}
