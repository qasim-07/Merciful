import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Product Catalogue — Merciful Industrial Tools Co.",
  description:
    "Browse V-blocks, angle plates, lathe centres, measuring instruments and workshop hand tools — manufactured and wholesaled from New Delhi since 2004.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  return (
    <main>
      <Navbar />
      <section className="section pcat-hero">
        <div className="container">
          <span className="eyebrow">Product catalogue</span>
          <h1 className="h-lg" style={{ margin: "16px 0 10px" }}>
            Our Products
          </h1>
          <p className="lead">
            Every tool below is manufactured or wholesaled by Merciful Industrial
            Tools Co. — ask for bulk pricing on any of them.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ProductCatalog initialCat={cat} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
