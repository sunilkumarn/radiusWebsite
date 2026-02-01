import type { Metadata } from "next";
import "@/styles/globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Radius — Connecting customers with local businesses",
  description: "Radius helps you follow local shops, get updates, and enquire instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


