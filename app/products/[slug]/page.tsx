import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import Reveal from "@/components/Reveal";
import { PRODUCTS, productBySlug, categoryLabel } from "@/lib/products";
import { COMPANY } from "@/lib/data";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.name} — Merciful Industrial Tools Co.`,
    description: p.uses[0],
    openGraph: { title: p.name, images: [p.images[0]] },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();

  const related = PRODUCTS.filter(
    (r) => r.category === p.category && r.slug !== p.slug
  ).slice(0, 3);

  const waText = encodeURIComponent(
    `Hello Merciful Industrial Tools, I would like a bulk quote for: ${p.name}` +
      (p.sizes?.[0] ? ` (${p.sizes[0].label}: ${p.sizes[0].value})` : "") +
      `. Please share pricing and availability.`
  );
  const waHref = `https://wa.me/${COMPANY.whatsapp}?text=${waText}`;

  return (
    <main>
      <Navbar />
      <section className="section pdp">
        <div className="container">
          <nav className="pdp-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <Link href={`/products?cat=${p.category}`}>{categoryLabel(p.category)}</Link>
          </nav>

          <div className="pdp-grid">
            <Reveal>
              <ProductGallery images={p.images} alt={p.name} />
            </Reveal>

            <div className="pdp-info">
              <Reveal delay={0.08}>
                <span className="pdp-cat">{categoryLabel(p.category)}</span>
                <h1 className="h-md" style={{ fontSize: "clamp(26px,3vw,36px)", margin: "12px 0 14px" }}>
                  {p.name}
                </h1>

                {p.sizes && (
                  <div className="pdp-sizes">
                    {p.sizes.map((s) => (
                      <div className="pdp-size" key={s.label}>
                        <b>{s.label}</b>
                        <span>{s.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <h2 className="pdp-h">Uses</h2>
                <ul className="pdp-uses">
                  {p.uses.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>

                <div className="pdp-ctas">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wa"
                    data-cursor="Chat"
                  >
                    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden>
                      <path d="M12.04 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.34 4.97L2 22l5.23-1.37a9.93 9.93 0 004.8 1.22h.01c5.48 0 9.94-4.45 9.94-9.93A9.87 9.87 0 0012.04 2zm0 18.17h-.01a8.24 8.24 0 01-4.2-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.2 8.2 0 01-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 012.41 5.83c0 4.55-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.13-1.47-.73-1.7-.81-.22-.08-.39-.12-.55.12-.17.25-.64.81-.78.98-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23a7.44 7.44 0 01-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.12.25-.3.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.66.3-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.47-.07 1.46-.6 1.67-1.18.2-.57.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
                    </svg>
                    Enquire on WhatsApp
                  </a>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    data-cursor="RFQ"
                  >
                    Request bulk quote <span className="arr">→</span>
                  </a>
                  <a href={COMPANY.phoneHref} className="btn btn-ghost" data-cursor="Call">
                    {COMPANY.phone}
                  </a>
                </div>
                <p className="pdp-note">
                  Wholesale pricing on bulk quantities · GSTIN {COMPANY.gstin} ·
                  Dispatch from New Delhi
                </p>
              </Reveal>
            </div>
          </div>

          {related.length > 0 && (
            <div className="pdp-related">
              <h2 className="h-md" style={{ marginBottom: 22 }}>
                More in {categoryLabel(p.category)}
              </h2>
              <div className="pcat-grid">
                {related.map((r) => (
                  <Link href={`/products/${r.slug}`} className="p-card" key={r.slug} data-cursor="View">
                    <span className="p-card-media">
                      <img src={r.images[0]} alt={r.name} loading="lazy" />
                    </span>
                    <span className="p-card-body">
                      <b>{r.name}</b>
                      {r.sizes?.[0] && <small>{r.sizes[0].value}</small>}
                      <em>View details →</em>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
