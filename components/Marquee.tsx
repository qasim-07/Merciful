import { MARQUEE_PRODUCTS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Marquee() {
  const tiles = [...MARQUEE_PRODUCTS, ...MARQUEE_PRODUCTS, ...MARQUEE_PRODUCTS, ...MARQUEE_PRODUCTS];
  return (
    <section className="marquee-band section" style={{ paddingTop: 30 }}>
      <div className="container marquee-head">
        <Reveal>
          <span className="eyebrow">From the catalogue</span>
        </Reveal>
      </div>
      <div style={{ position: "relative" }}>
        <div className="marquee-fade left" />
        <div className="marquee-fade right" />
        <div className="marquee-track">
          {tiles.map((p, i) => (
            <div className="m-tile" key={i} data-cursor="View">
              <img src={p.img} alt={p.name} loading="lazy" draggable={false} />
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
