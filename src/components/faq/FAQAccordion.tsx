"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/content/faq";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 dark:divide-white/10 border-y border-ink/10 dark:border-white/10">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-2xl"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.q}
                <ChevronDown className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </h3>
            {isOpen ? (
              <p className="pb-6 text-ink/70 dark:text-cream/70 leading-relaxed">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
