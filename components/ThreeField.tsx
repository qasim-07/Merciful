"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Lightweight particle field + wireframe ring behind the hero object. */
export default function ThreeField() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current!;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.8));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, {
      position: "absolute", inset: "0", width: "100%", height: "100%",
    });

    // --- particles -------------------------------------------------------
    const N = 420;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const navy = new THREE.Color(0x2563eb);
    const amber = new THREE.Color(0xf59e0b);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 13;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      const c = Math.random() < 0.12 ? amber : navy;
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    // soft round sprite so points don't render as hard squares
    const cnv = document.createElement("canvas");
    cnv.width = cnv.height = 64;
    const ctx = cnv.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.5, "rgba(255,255,255,.45)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(cnv);
    const pts = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        size: 0.14, vertexColors: true, transparent: true, opacity: 0.5,
        map: sprite, alphaMap: sprite, depthWrite: false,
      })
    );
    scene.add(pts);

    // --- engineering rings ----------------------------------------------
    const ringMat = new THREE.LineBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.16 });
    const mkRing = (r: number, tilt: number) => {
      const curve = new THREE.EllipseCurve(0, 0, r, r, 0, Math.PI * 2);
      const g = new THREE.BufferGeometry().setFromPoints(curve.getPoints(90));
      const ring = new THREE.Line(g, ringMat);
      ring.rotation.x = tilt;
      return ring;
    };
    const rings = new THREE.Group();
    rings.add(mkRing(4.4, 1.2), mkRing(5.4, 1.45), mkRing(6.6, 1.05));
    rings.position.x = 2.4;
    scene.add(rings);

    // --- loop ------------------------------------------------------------
    let mouseX = 0, mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = (e.clientY / innerHeight - 0.5) * 2;
    };
    addEventListener("mousemove", onMouse, { passive: true });

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = host;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    let raf = 0;
    const clock = new THREE.Clock();
    const tick = () => {
      const t = clock.getElapsedTime();
      pts.rotation.y = t * 0.02 + mouseX * 0.05;
      pts.rotation.x = mouseY * 0.04;
      rings.rotation.z = t * 0.05;
      rings.rotation.y = mouseX * 0.12;
      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 0.4 - camera.position.y) * 0.04;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMouse);
      ro.disconnect();
      geo.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={hostRef} className="hero-three" aria-hidden />;
}
