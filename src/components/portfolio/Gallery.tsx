"use client";

import { useState } from "react";
import Image from "next/image";

export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<string | null>(null);

  if (!images.length) {
    return (
      <p className="py-16 text-center text-ink/60">Gallery images will appear here.</p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(src)}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={src}
              alt={`${title} gallery image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setActive(null)}
        >
          <Image
            src={active}
            alt={title}
            width={1400}
            height={900}
            className="max-h-[90vh] w-auto object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
