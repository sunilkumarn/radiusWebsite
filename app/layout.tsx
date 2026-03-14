import type { Metadata } from "next";
import "@/styles/globals.css";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Radius — Connecting customers with local businesses",
  description: "Radius helps you follow local shops, get updates, and enquire instantly.",
  icons: {
    icon: [
      { url: "/images/r-logo.png", type: "image/png" },
      { url: "/images/r-logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/images/r-logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}


