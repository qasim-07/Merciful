"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.body.classList.add("has-cursor");

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = innerWidth / 2, my = innerHeight / 2;
    let rx = mx, ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      const t = (e.target as HTMLElement)?.closest?.(
        "[data-cursor], a, button, input, select, textarea, label"
      ) as HTMLElement | null;
      if (t) {
        ring.classList.add("is-active");
        setLabel(t.getAttribute("data-cursor") ?? "");
      } else {
        ring.classList.remove("is-active");
        setLabel("");
      }
    };
    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    addEventListener("mousemove", onMove, { passive: true });
    addEventListener("mousedown", onDown);
    addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      removeEventListener("mousedown", onDown);
      removeEventListener("mouseup", onUp);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring">
        <span>{label}</span>
      </div>
    </>
  );
}
