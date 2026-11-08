import Reveal from "./Reveal";
import { COMPANY } from "@/lib/data";

export default function Quality() {
  return (
    <section id="quality" className="quality section">
      <img src="/assets/blueprint.jpg" alt="" className="quality-bp" aria-hidden />
      <div className="container quality-grid">
        <Reveal className="q-media">
          <div className="main">
            <img src="/assets/quality.jpg" alt="Dial indicator inspection on a granite surface plate" />
          </div>
          <div className="q-video" data-cursor="Play">
            <video src="/assets/knurling-loop.mp4" autoPlay muted loop playsInline />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Quality &amp; compliance</span>
            <h2 className="h-lg" style={{ margin: "16px 0 18px", maxWidth: "15ch" }}>
              Verified. Registered. Inspected.
            </h2>
            <p className="lead">
              Every batch is dressed, trued and gauged before dispatch. Our
              registrations are public and verifiable — the figures procurement
              teams check first.
            </p>
          </Reveal>

          <div className="q-cards">
            <Reveal delay={0.08} className="q-card">
              <code>{COMPANY.gstin}</code>
              <p>
                <b>GSTIN Registration</b>
                {COMPANY.gstinSince} · Delhi (07)
              </p>
            </Reveal>
            {COMPANY.hsn.map((h, i) => (
              <Reveal delay={0.16 + i * 0.08} className="q-card" key={h.code}>
                <code>HSN {h.code}</code>
                <p>
                  <b>GST HSN Mapping</b>
                  {h.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
