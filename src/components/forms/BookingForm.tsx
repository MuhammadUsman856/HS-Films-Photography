"use client";

import { useState } from "react";
import { budgetOptions, eventTypes, serviceOptions } from "@/content/forms";
import { Button } from "@/components/ui/Button";

type Fields = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  time: string;
  location: string;
  guests: string;
  service: string;
  notes: string;
  budget: string;
  consent: boolean;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  time: "",
  location: "",
  guests: "",
  service: "",
  notes: "",
  budget: "",
  consent: false,
};

export function BookingForm() {
  const [data, setData] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function validate() {
    const next: typeof errors = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "Enter a valid email.";
    if (!data.phone.trim()) next.phone = "Enter a phone or WhatsApp number.";
    if (!data.eventType) next.eventType = "Select an event type.";
    if (!data.date) next.date = "Select an event date.";
    if (!data.location.trim()) next.location = "Enter a location.";
    if (!data.service) next.service = "Select a service.";
    if (!data.consent) next.consent = "Consent is required to send this request.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/40 bg-cream-soft dark:bg-ink-soft p-10 text-center">
        <p className="text-[11px] tracking-[0.28em] uppercase text-gold-dark dark:text-gold">
          Request received
        </p>
        <h3 className="mt-4 font-display text-4xl">
          Thank You! Your booking request has been received.
        </h3>
        <p className="mt-5 text-ink/70 dark:text-cream/70">
          The studio will contact you using the details you provided. We look forward to hearing
          your story.
        </p>
      </div>
    );
  }

  const field =
    "w-full min-h-12 border border-ink/15 dark:border-white/15 bg-transparent px-4 text-sm outline-none focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate>
      <fieldset>
        <legend className="font-display text-2xl">Personal Information</legend>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <Field label="Full Name" error={errors.name}>
            <input className={field} value={data.name} onChange={(e) => set("name", e.target.value)} />
          </Field>
          <Field label="Email Address" error={errors.email}>
            <input type="email" className={field} value={data.email} onChange={(e) => set("email", e.target.value)} />
          </Field>
          <Field label="Phone / WhatsApp Number" error={errors.phone}>
            <input className={field} value={data.phone} onChange={(e) => set("phone", e.target.value)} />
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-display text-2xl">Event Information</legend>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Field label="Event Type" error={errors.eventType}>
            <select className={field} value={data.eventType} onChange={(e) => set("eventType", e.target.value)}>
              <option value="">Select</option>
              {eventTypes.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
          <Field label="Event Date" error={errors.date}>
            <input type="date" className={field} value={data.date} onChange={(e) => set("date", e.target.value)} />
          </Field>
          <Field label="Event Time">
            <input type="time" className={field} value={data.time} onChange={(e) => set("time", e.target.value)} />
          </Field>
          <Field label="Event Location" error={errors.location}>
            <input className={field} value={data.location} onChange={(e) => set("location", e.target.value)} />
          </Field>
          <Field label="Expected Number of Guests">
            <input className={field} value={data.guests} onChange={(e) => set("guests", e.target.value)} />
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-display text-2xl">Service Required</legend>
        <div className="mt-6">
          <Field label="Service" error={errors.service}>
            <select className={field} value={data.service} onChange={(e) => set("service", e.target.value)}>
              <option value="">Select</option>
              {serviceOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <Field label="Tell us about your event, preferred style, location and requirements…">
        <textarea
          className={`${field} min-h-36 py-3`}
          value={data.notes}
          onChange={(e) => set("notes", e.target.value)}
        />
      </Field>

      <Field label="Budget (optional)">
        <select className={field} value={data.budget} onChange={(e) => set("budget", e.target.value)}>
          <option value="">Select</option>
          {budgetOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>

      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          checked={data.consent}
          onChange={(e) => set("consent", e.target.checked)}
          className="mt-1"
        />
        <span>I agree to be contacted regarding my booking request.</span>
      </label>
      {errors.consent ? <p className="text-sm text-red-700">{errors.consent}</p> : null}
      {status === "error" ? (
        <p className="text-sm text-red-700">Something went wrong. Please try again or email us directly.</p>
      ) : null}
      <Button type="submit">Request Booking</Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block text-[11px] tracking-[0.16em] uppercase text-ink/60 dark:text-cream/60">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1 block text-red-700">{error}</span> : null}
    </label>
  );
}
