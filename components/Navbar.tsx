"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { NAV, COMPANY, WA_RFQ_LINK } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 30);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-inner">
          <Link href="/" className="nav-brand" data-cursor="Home">
            <Logo size={38} />
            <span>
              <b>{COMPANY.short}</b>
              <small>Industrial Tools Co.</small>
            </span>
          </Link>
          <nav className="nav-links">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
            <a href={WA_RFQ_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
              Request a Quote
            </a>
          </nav>
          <button
            className={`nav-burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <i />
          </button>
        </div>
      </header>
      <div className={`nav-mobile ${open ? "is-open" : ""}`}>
        {NAV.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a href={WA_RFQ_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 18, justifySelf: "start" }} onClick={() => setOpen(false)}>
          Request a Quote
        </a>
      </div>
    </>
  );
}
