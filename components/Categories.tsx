"use client";

import { useRef } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { PRODUCTS, categoryLabel } from "@/lib/products";

const HOME_CATEGORIES = [
  {
    code: "A",
    key: "lathe",
    image: "/assets/cat-b.jpg",
    blurb:
      "Centres, sleeves, boring bars and chuck keys — the accessories every lathe and machine spindle depends on.",
  },
  {
    code: "B",
    key: "vblocks",
    image: "/assets/products/hardened-ground-v-blocks.jpg",
    blurb:
      "Cast iron and hardened & ground V-blocks, magnetic vee blocks and angle plates for holding and layout work.",
  },
  {
    code: "C",
    key: "hand",
    image: "/assets/cat-c.jpg",
    blurb:
      "Tap wrenches, reamers, clamps, punches and dressers — everyday maintenance and tool-room implements.",
  },
  {
    code: "D",
    key: "measuring",
    image: "/assets/cat-d.jpg",
    blurb:
      "Sine bars, try squares, gauges and scribers ensuring geometric accuracy and micro-level deviation control.",
  },
];

const MAX_ITEMS = 7;

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `rotateY(${(px - 0.5) * 7}deg) rotateX(${(py - 0.5) * -7}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={ref}
      className="cat-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform .5s cubic-bezier(.22,1,.36,1), box-shadow .4s" }}
    >
      {children}
      <div className="cat-sheen" />
    </div>
  );
}

export default function Categories() {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="cat-head">
          <Reveal>
            <span className="eyebrow">Product categories</span>
            <h2 className="h-lg" style={{ marginTop: 14, maxWidth: "18ch" }}>
              Four families. One standard of precision.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lead" style={{ maxWidth: "38ch", marginBottom: 18 }}>
              Carbon-steel tooling manufactured and wholesaled for machining,
              maintenance and metrology — priced for bulk.
            </p>
            <Link href="/products" className="btn btn-ghost" data-cursor="Browse">
              View full catalogue <span className="arr">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="cat-grid">
          {HOME_CATEGORIES.map((c, i) => {
            const items = PRODUCTS.filter((p) => p.category === c.key);
            const shown = items.slice(0, MAX_ITEMS);
            const rest = items.length - shown.length;
            return (
              <Reveal key={c.key} delay={(i % 2) * 0.12}>
                <TiltCard>
                  <Link
                    href={`/products?cat=${c.key}`}
                    className="cat-media"
                    data-cursor="Browse"
                  >
                    <span className="cat-code">
                      Category <em>{c.code}</em>
                    </span>
                    <img src={c.image} alt={categoryLabel(c.key)} loading="lazy" />
                  </Link>
                  <div className="cat-body">
                    <h3>
                      <Link href={`/products?cat=${c.key}`} data-cursor="Browse">
                        {categoryLabel(c.key)}
                      </Link>
                    </h3>
                    <p>{c.blurb}</p>
                    <div className="cat-items">
                      {shown.map((p) => (
                        <Link
                          href={`/products/${p.slug}`}
                          className="cat-item"
                          key={p.slug}
                          data-cursor="View"
                        >
                          <span>{p.name}</span>
                          <span className="go">→</span>
                        </Link>
                      ))}
                      {rest > 0 && (
                        <Link
                          href={`/products?cat=${c.key}`}
                          className="cat-item cat-more"
                          data-cursor="Browse"
                        >
                          <span>View all {items.length} products</span>
                          <span className="go">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
