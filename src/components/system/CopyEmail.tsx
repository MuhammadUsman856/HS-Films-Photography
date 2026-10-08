"use client";

import { useState } from "react";
import { site } from "@/content/site";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="text-[11px] tracking-[0.18em] uppercase text-gold-dark dark:text-gold"
      onClick={async () => {
        await navigator.clipboard.writeText(site.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
    >
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
