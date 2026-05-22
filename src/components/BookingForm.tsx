"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  FREQUENCIES,
  PROPERTY_SIZES,
  SERVICE_TYPES,
  TIME_SLOTS,
  type BookingPayload,
} from "@/types/booking";

const initial: BookingPayload = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zip: "",
  serviceType: SERVICE_TYPES[0],
  preferredDate: "",
  preferredTime: TIME_SLOTS[0],
  propertySize: PROPERTY_SIZES[1],
  frequency: FREQUENCIES[0],
  notes: "",
};

const inputClass =
  "block w-full min-h-[44px] rounded-lg border border-border bg-white px-4 py-3 text-base text-charcoal placeholder:text-slate-muted";

const labelClass = "block text-sm font-semibold leading-snug text-emerald";

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Section({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-white">
      <div className="flex gap-4 border-b border-border bg-off-white px-6 py-5 sm:px-8 sm:py-6">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald text-sm font-bold text-white">
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold leading-snug text-emerald sm:text-xl">
            {title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-muted">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7 p-6 sm:gap-8 sm:p-8">{children}</div>
    </section>
  );
}

export function BookingForm() {
  const [form, setForm] = useState<BookingPayload>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update<K extends keyof BookingPayload>(key: K, value: BookingPayload[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("success");
      setMessage(data.message);
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to submit");
    }
  }

  const minDate = new Date().toISOString().split("T")[0];

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-white px-6 py-12 text-center sm:px-10">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald" />
        <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-xl font-bold text-emerald">
          Request received
        </h2>
        <p className="mt-3 text-slate-muted">{message}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-emerald underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <Section
        number="1"
        title="Contact information"
        description="How we can reach you to confirm the appointment."
      >
        <Field label="Full name" htmlFor="fullName" className="w-full">
          <input
            id="fullName"
            required
            className={inputClass}
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Jane Doe"
          />
        </Field>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
          <Field label="Email" htmlFor="email">
            <input
              id="email"
              required
              type="email"
              className={inputClass}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="jane@example.com"
            />
          </Field>
          <Field label="Phone" htmlFor="phone">
            <input
              id="phone"
              required
              type="tel"
              className={inputClass}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="(555) 123-4567"
            />
          </Field>
        </div>
      </Section>

      <Section
        number="2"
        title="Property location"
        description="Where our crew will be working."
      >
        <Field label="Street address" htmlFor="address">
          <input
            id="address"
            required
            className={inputClass}
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            placeholder="123 Oak Street"
          />
        </Field>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
          <Field label="City" htmlFor="city">
            <input
              id="city"
              required
              className={inputClass}
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              placeholder="Springfield"
            />
          </Field>
          <Field label="ZIP code" htmlFor="zip">
            <input
              id="zip"
              required
              className={inputClass}
              value={form.zip}
              onChange={(e) => update("zip", e.target.value)}
              placeholder="12345"
            />
          </Field>
        </div>

        <Field label="Approximate property size" htmlFor="propertySize">
          <select
            id="propertySize"
            required
            className={inputClass}
            value={form.propertySize}
            onChange={(e) => update("propertySize", e.target.value)}
          >
            {PROPERTY_SIZES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
      </Section>

      <Section
        number="3"
        title="Service & schedule"
        description="What you need and when you would like us there."
      >
        <Field label="Service requested" htmlFor="serviceType">
          <select
            id="serviceType"
            required
            className={inputClass}
            value={form.serviceType}
            onChange={(e) => update("serviceType", e.target.value)}
          >
            {SERVICE_TYPES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="How often" htmlFor="frequency">
          <select
            id="frequency"
            required
            className={inputClass}
            value={form.frequency}
            onChange={(e) => update("frequency", e.target.value)}
          >
            {FREQUENCIES.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </Field>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
          <Field label="Preferred date" htmlFor="preferredDate">
            <input
              id="preferredDate"
              required
              type="date"
              min={minDate}
              className={inputClass}
              value={form.preferredDate}
              onChange={(e) => update("preferredDate", e.target.value)}
            />
          </Field>
          <Field label="Preferred time window" htmlFor="preferredTime">
            <select
              id="preferredTime"
              required
              className={inputClass}
              value={form.preferredTime}
              onChange={(e) => update("preferredTime", e.target.value)}
            >
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </Section>

      <Section
        number="4"
        title="Additional notes"
        description="Optional — gate codes, pets, areas to skip, etc."
      >
        <Field label="Notes" htmlFor="notes">
          <textarea
            id="notes"
            rows={5}
            className={`${inputClass} min-h-[120px] resize-y py-3 leading-relaxed`}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Example: Side gate code 4521. Dog in backyard."
          />
        </Field>
      </Section>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-5 py-4 text-sm text-red-800">
          {message}
        </p>
      )}

      <div className="rounded-xl border border-border bg-off-white px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-sm leading-relaxed text-slate-muted">
          By submitting, you are requesting an appointment — not a confirmed
          booking until we reply. We typically respond within one business day.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary mt-6 disabled:opacity-60"
        >
          {status === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </span>
          ) : (
            "Send booking request"
          )}
        </button>
      </div>
    </form>
  );
}
