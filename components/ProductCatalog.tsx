"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/products";

export default function ProductCatalog({ initialCat = "all" }: { initialCat?: string }) {
  const [cat, setCat] = useState(
    PRODUCT_CATEGORIES.some((c) => c.key === initialCat) ? initialCat : "all"
  );
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (cat === "all" || p.category === cat) &&
        (!t || p.name.toLowerCase().includes(t))
    );
  }, [cat, q]);

  return (
    <>
      <div className="pcat-controls">
        <div className="pcat-chips">
          {PRODUCT_CATEGORIES.map((c) => (
            <button
              key={c.key}
              className={`pcat-chip ${cat === c.key ? "is-on" : ""}`}
              onClick={() => setCat(c.key)}
              data-cursor="Filter"
            >
              {c.label}
            </button>
          ))}
        </div>
        <input
          className="pcat-search"
          placeholder="Search tools…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search products"
        />
      </div>

      <p className="pcat-count">
        {list.length} {list.length === 1 ? "product" : "products"}
      </p>

      <motion.div layout className="pcat-grid">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/products/${p.slug}`} className="p-card" data-cursor="View">
                <span className="p-card-media">
                  <img src={p.images[0]} alt={p.name} loading="lazy" />
                  {p.images.length > 1 && <i className="p-card-multi">+{p.images.length - 1}</i>}
                </span>
                <span className="p-card-body">
                  <b>{p.name}</b>
                  {p.sizes?.[0] && <small>{p.sizes[0].value}</small>}
                  <em>View details →</em>
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && (
        <p className="pcat-empty">No tools match “{q}”. Try a different term.</p>
      )}
    </>
  );
}
