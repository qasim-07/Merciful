import Logo from "./Logo";
import { COMPANY, NAV, WA_RFQ_LINK } from "@/lib/data";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export default function Footer() {
  const line = PRODUCT_CATEGORIES.filter((c) => c.key !== "all").map((c) => c.label).join("  ·  ");
  return (
    <footer className="footer">
      <div className="footer-marquee" aria-hidden>
        <div>
          {line} · {line} ·&nbsp;
        </div>
      </div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Logo size={38} light />
            <b style={{ color: "#fff", fontFamily: "var(--font-display)", fontSize: 17 }}>
              {COMPANY.name}
            </b>
          </div>
          <p>{COMPANY.tagline}</p>
          <p style={{ fontSize: 13, marginTop: 10 }}>{COMPANY.address}</p>
        </div>
        <div>
          <h4>Navigate</h4>
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div>
          <h4>Reach us</h4>
          <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
          <a href={COMPANY.indiamart} target="_blank" rel="noopener noreferrer">
            IndiaMART Business Profile ↗
          </a>
          <a href={WA_RFQ_LINK} target="_blank" rel="noopener noreferrer">Request a Quote</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {COMPANY.name} · All rights reserved</span>
        <span>
          GSTIN <code>{COMPANY.gstin}</code> · HSN <code>82051000</code> / <code>61179000</code>
        </span>
      </div>
    </footer>
  );
}
