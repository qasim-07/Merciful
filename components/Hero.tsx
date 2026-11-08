"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import dynamic from "next/dynamic";
import { COMPANY, WA_RFQ_LINK } from "@/lib/data";

const ThreeField = dynamic(() => import("./ThreeField"), { ssr: false });

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const objY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const objRot = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // mouse tilt — applied on the image itself so mix-blend-mode keeps working
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(my, { stiffness: 60, damping: 14 });
  const tiltY = useSpring(mx, { stiffness: 60, damping: 14 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    my.set(((e.clientY - r.top) / r.height - 0.5) * -10);
  };

  return (
    <section id="home" className="hero" ref={ref} onMouseMove={onMove}>
      <video
        className="hero-video"
        src="/assets/hero-loop.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/workshop.jpg"
      />
      <div className="hero-wash" />
      {/* metallic dust drifting over the whole hero (screen-blended against the light bg) */}
      <img src="/assets/dust.jpg" alt="" className="hero-dust" aria-hidden />
      <ThreeField />

      <div className="container hero-grid">
        <motion.div className="hero-copy" style={{ y: copyY, opacity: fade }}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Since 2004 · New Delhi, India
          </motion.span>

          <motion.h1
            className="h-xl hero-title"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Precision <span className="accent">Engineering.</span>
            <br />
            <span className="thin">Trusted wholesale supply.</span>
          </motion.h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38 }}
          >
            Manufacturer, wholesaler and distributor of industrial-grade lathe
            attachments, workshop tooling and precision metrology instruments —
            zero-defect supply for engineering hubs across India.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.52 }}
          >
            <a href="/products" className="btn btn-primary" data-cursor="Explore">
              Explore Products <span className="arr">→</span>
            </a>
            <a href={WA_RFQ_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" data-cursor="RFQ">
              Request a Quote
            </a>
          </motion.div>

          <motion.div
            className="hero-chips"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.72 }}
          >
            <span className="chip"><span className="dot" /> GST Verified · 07-Delhi</span>
            <span className="chip"><span className="dot" /> 4 Product Families</span>
            <span className="chip"><span className="dot" /> B2B · Wholesale · Retail</span>
          </motion.div>
        </motion.div>

        {/* stage carries NO transform/opacity, so the image's multiply blend
            reaches the page backdrop */}
        <div className="hero-stage">
          <div className="hero-orbit" />
          <div className="hero-orbit o2" />
          <motion.img
            src="/assets/hero-object.jpg"
            alt="Precision lathe revolving centre"
            className="hero-object"
            style={{ rotateX: tiltX, rotateY: tiltY, y: objY, rotate: objRot }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            draggable={false}
          />
          <motion.span
            className="hero-tag"
            style={{ top: "14%", right: "4%" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            Lathe Revolving Centre
          </motion.span>
          <motion.span
            className="hero-tag"
            style={{ bottom: "12%", left: "0%" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            Hardened · Friction-free
          </motion.span>
        </div>
      </div>

      <motion.div className="hero-scroll" style={{ opacity: fade }}>
        Scroll
      </motion.div>
    </section>
  );
}
