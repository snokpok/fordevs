import "./globals.css";
import { Inter } from "next/font/google";
import {Analytics} from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fordevs: collection of modern developer tools",
  description:
    "Collection of modern developer tools, companies, categories, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
