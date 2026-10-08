"use client";

import { Share2 } from "lucide-react";

export function ShareButton({ title }: { title: string }) {
  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title, url });
      return;
    }
    await navigator.clipboard.writeText(url);
  }

  return (
    <button
      type="button"
      onClick={share}
      className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase"
    >
      <Share2 size={14} /> Share
    </button>
  );
}
