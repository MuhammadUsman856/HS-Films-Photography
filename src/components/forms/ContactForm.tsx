"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ok, setOk] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Valid email is required.";
    if (message.trim().length < 10) next.message = "Please share a little more detail.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    if (res.ok) setOk(true);
  }

  if (ok) {
    return (
      <p className="border border-gold/40 p-8 font-display text-3xl">
        Thank you. We will be in touch shortly.
      </p>
    );
  }

  const field =
    "w-full min-h-12 border border-ink/15 dark:border-white/15 bg-transparent px-4 outline-none focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <label className="block text-sm">
        <span className="mb-2 block text-[11px] tracking-[0.16em] uppercase">Name</span>
        <input className={field} value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name ? <span className="text-red-700">{errors.name}</span> : null}
      </label>
      <label className="block text-sm">
        <span className="mb-2 block text-[11px] tracking-[0.16em] uppercase">Email</span>
        <input type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email ? <span className="text-red-700">{errors.email}</span> : null}
      </label>
      <label className="block text-sm">
        <span className="mb-2 block text-[11px] tracking-[0.16em] uppercase">Message</span>
        <textarea className={`${field} min-h-36 py-3`} value={message} onChange={(e) => setMessage(e.target.value)} />
        {errors.message ? <span className="text-red-700">{errors.message}</span> : null}
      </label>
      <Button type="submit">Start a Conversation</Button>
    </form>
  );
}
