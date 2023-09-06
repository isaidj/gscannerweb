import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],

  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "G-Scanner",
  description: "A modern and responsive QR code reader client",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
