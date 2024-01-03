import type { Metadata } from "next";

import { inter } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Shih-Chi Shao | Portfolio",
  description: "Rain in the vicinity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
