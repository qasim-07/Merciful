import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "Merciful Industrial Tools Co. — Precision Engineering Since 2004",
  description:
    "Delhi-based manufacturer, wholesaler and distributor of lathe attachments, tool holders, workshop tooling and precision metrology instruments. GST-verified B2B supply since 2004.",
  openGraph: {
    title: "Merciful Industrial Tools Co.",
    description: "Precision Engineering, Trusted Wholesale Supply Since 2004.",
    images: ["/assets/og-plate.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${grotesk.variable}`}>
        <div className="site-bg" />
        <div className="site-grain" />
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
