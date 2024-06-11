import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Estudio Hexágono",
  description: "Mercado de Assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
