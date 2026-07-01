import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import ScrollToHash from "@/components/ScrollToHash";
import MobileBottomNav from "@/components/MobileBottomNav";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Mittal Car Care - Trusted Multi-Brand Car Service Center in Delhi",
  description: "Professional diagnostics, repair, detailing, denting-painting and premium car care services under one roof. 10+ years experience, 5000+ cars serviced.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>
          <ScrollToHash />
          {children}
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
