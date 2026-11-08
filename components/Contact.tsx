"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { COMPANY } from "@/lib/data";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="contact section">
      <img src="/assets/dispatch.jpg" alt="" className="contact-bg" aria-hidden />
      <div className="container">
        <Reveal>
          <span className="eyebrow">Contact &amp; RFQ</span>
          <h2 className="h-lg" style={{ margin: "16px 0 40px", maxWidth: "22ch" }}>
            Submit an itemized request for quote
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="contact-shell">
            <div className="contact-info">
              <h3>Merciful Industrial Tools Co.</h3>
              <div className="ci-row">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>
                <span>
                  <span className="ci-label">Corporate address</span>
                  {COMPANY.address}
                </span>
              </div>
              <div className="ci-row">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>
                <span>
                  <span className="ci-label">Phone</span>
                  <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                </span>
              </div>
              <div className="ci-row">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3.4"/><path d="M4 20c1.4-3.4 4.4-5 8-5s6.6 1.6 8 5"/></svg>
                <span>
                  <span className="ci-label">Point of contact</span>
                  {COMPANY.contacts.join(" · ")}
                </span>
              </div>
              <div className="ci-row">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/><circle cx="12" cy="12" r="9"/></svg>
                <span>
                  <span className="ci-label">Global bulk orders</span>
                  For customized steel-grade dimensions or pricing agreements,{" "}
                  <a href={COMPANY.indiamart} target="_blank" rel="noopener noreferrer">
                    submit an RFQ via our IndiaMART profile →
                  </a>
                </span>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const line = (label: string, key: string) => {
                  const v = (f.get(key) as string)?.trim();
                  return v ? `${label}: ${v}` : null;
                };
                const msg = [
                  "Hello Merciful Industrial Tools, new RFQ from the website:",
                  line("Name", "name"),
                  line("Company", "company"),
                  line("Phone", "phone"),
                  line("Category", "category"),
                  line("Requirement", "requirement"),
                ]
                  .filter(Boolean)
                  .join("\n");
                setSent(true);
                // real redirect — immune to popup blockers, hands off to the
                // WhatsApp app on mobile
                window.location.href = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;
              }}
            >
              <div className="f-row">
                <div className="f-field">
                  <label htmlFor="f-name">Your name</label>
                  <input id="f-name" name="name" required placeholder="Full name" />
                </div>
                <div className="f-field">
                  <label htmlFor="f-company">Company</label>
                  <input id="f-company" name="company" placeholder="Company / workshop" />
                </div>
              </div>
              <div className="f-row">
                <div className="f-field">
                  <label htmlFor="f-phone">Phone / WhatsApp</label>
                  <input id="f-phone" name="phone" required placeholder="+91 ·····" />
                </div>
                <div className="f-field">
                  <label htmlFor="f-cat">Product category</label>
                  <select id="f-cat" name="category" defaultValue="">
                    <option value="" disabled>
                      Select a category
                    </option>
                    {PRODUCT_CATEGORIES.filter((c) => c.key !== "all").map((c) => (
                      <option key={c.key}>{c.label}</option>
                    ))}
                    <option>Custom / other</option>
                  </select>
                </div>
              </div>
              <div className="f-field">
                <label htmlFor="f-msg">Itemized requirement</label>
                <textarea id="f-msg" name="requirement" rows={4} placeholder="e.g. 50 × Steel V-Blocks with Clamps (100mm), 20 × MT2 Revolving Centres…" />
              </div>
              {sent ? (
                <div className="f-ok">
                  ✓ WhatsApp has opened with your RFQ pre-filled — just press
                  send there. Prefer to talk? Call us on {COMPANY.phone}.
                </div>
              ) : (
                <button type="submit" className="btn btn-wa" data-cursor="Send">
                  Send RFQ via WhatsApp <span className="arr">→</span>
                </button>
              )}
              <p className="f-note">
                Wholesale pricing applies on bulk quantities. GSTIN {COMPANY.gstin}.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
