"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-ink text-cream-soft">
      <div className="text-center">
        <p className="font-display text-5xl">HS</p>
        <p className="mt-3 text-[10px] tracking-[0.4em] uppercase text-gold">{site.shortName}</p>
      </div>
    </div>
  );
}
