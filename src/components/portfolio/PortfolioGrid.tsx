"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, portfolio, type Category } from "@/content/portfolio";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";

export function PortfolioGrid({
  items = portfolio,
  showFilters = true,
  limit,
}: {
  items?: typeof portfolio;
  showFilters?: boolean;
  limit?: number;
}) {
  const [active, setActive] = useState<"All" | Category>("All");

  const filtered = useMemo(() => {
    const list = active === "All" ? items : items.filter((p) => p.category === active);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [active, items, limit]);

  return (
    <div>
      {showFilters ? (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`min-h-10 px-4 text-[11px] tracking-[0.16em] uppercase border transition-colors ${
                active === cat
                  ? "border-gold bg-gold text-ink"
                  : "border-ink/15 dark:border-white/15 hover:border-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-ink/60 dark:text-cream/60">
          No projects in this collection yet. Replace placeholders in{" "}
          <code>src/content/portfolio.ts</code>.
        </p>
      ) : (
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-5 break-inside-avoid"
              >
                <PortfolioCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
