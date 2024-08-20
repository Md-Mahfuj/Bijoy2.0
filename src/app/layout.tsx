import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bijoy2.0",
  description:
    "আন্দোলনে শহীদদের তালিকা · আবু সাইদ · ফয়সাল আহমেদ শান্ত · মোঃ ওয়াসিম আকরুম · মোঃ ফারুক · সাকিব হাসান · তাহমিদ তামিম · শাইখ আশহাবুল ইয়ামিন.",
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
