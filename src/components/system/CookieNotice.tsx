"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("hs-privacy-ok")) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 max-w-lg border border-ink/10 dark:border-white/15 bg-cream-soft/95 dark:bg-ink/95 p-5 backdrop-blur md:left-6">
      <p className="text-sm">
        This site is ready for a privacy policy. We use only essential preferences such as theme.
        Read the{" "}
        <Link href="/privacy" className="underline">
          privacy note
        </Link>
        .
      </p>
      <button
        type="button"
        className="mt-3 text-[11px] tracking-[0.2em] uppercase text-gold-dark dark:text-gold"
        onClick={() => {
          localStorage.setItem("hs-privacy-ok", "1");
          setShow(false);
        }}
      >
        Continue
      </button>
    </div>
  );
}
