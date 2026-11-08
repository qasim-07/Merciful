"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Reveal from "./Reveal";
import { STATS } from "@/lib/data";

function Counter({ value, suffix, isYear }: { value: number; suffix?: string; isYear?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(isYear ? value - 30 : 0);
  useEffect(() => {
    if (!inView) return;
    const from = isYear ? value - 30 : 0;
    const t0 = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setN(Math.round(from + (value - from) * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, isYear]);
  return (
    <b ref={ref}>
      {n}
      {suffix && <span className="sfx">{suffix}</span>}
    </b>
  );
}

export default function About() {
  const bandRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: bandRef, offset: ["start end", "end start"] });
  const bandY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="about">
      {/* parallax band */}
      <div className="band" ref={bandRef}>
        <motion.img src="/assets/workshop.jpg" alt="Merciful Industrial Tools workshop" className="band-img" style={{ y: bandY }} />
        <div className="band-overlay">
          <div className="container">
            <Reveal>
              <span className="eyebrow">About the company</span>
              <h2 className="h-lg" style={{ marginTop: 14 }}>
                Built in Delhi. Trusted across India.
              </h2>
            </Reveal>
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="stats section" style={{ padding: "56px 0" }}>
        <img src="/assets/inventory.jpg" alt="" className="stats-bg" aria-hidden />
        <div className="container stats-grid">
          {STATS.map((s) => (
            <Reveal key={s.label} className="stat">
              <Counter value={s.value} suffix={s.suffix} isYear={s.isYear} />
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* story split */}
      <div className="section">
        <div className="container about-grid">
          <Reveal className="about-media">
            <img src="/assets/knurling.jpg" alt="Diamond knurling cut on a steel shaft" />
            <div className="about-badge">
              <b>Zero-defect</b>
              <span>manufacturing standard</span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">Who we are</span>
              <h2 className="h-lg" style={{ margin: "16px 0 18px" }}>
                A proprietary manufacturer with end-to-end reach
              </h2>
              <p className="lead">
                Founded in 2004 under the leadership of owner Haji Mohd Irfan, Merciful
                Industrial Tools Co. manufactures, wholesales, distributes and
                trades industrial-grade engineering apparatus from the
                industrial pockets of Jafrabad and Shankar Market, Delhi.
              </p>
            </Reveal>
            <div className="about-points">
              {[
                {
                  t: "Strategic infrastructure",
                  d: "Operations based in Delhi's industrial and commercial hubs — Jafrabad and Shankar Market.",
                  ic: "M4 21V9l8-6 8 6v12h-6v-7h-4v7H4z",
                },
                {
                  t: "End-to-end capabilities",
                  d: "Registered for factory-level manufacturing, wholesale distribution networks and localized retail supply.",
                  ic: "M3 7h13v10H3zM16 10h4l1 3v4h-5zM6 20a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z",
                },
                {
                  t: "High responsiveness",
                  d: "A verifiable B2B record of prompt inquiry conversion and wholesale execution.",
                  ic: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
                },
              ].map((p, i) => (
                <Reveal key={p.t} delay={i * 0.1} className="point">
                  <span className="point-ic">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                      <path d={p.ic} />
                    </svg>
                  </span>
                  <span>
                    <b>{p.t}</b>
                    <p>{p.d}</p>
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
