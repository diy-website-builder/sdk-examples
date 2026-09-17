import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIYWB SDK · Next.js",
  description: "Next.js App Router host for @diy-website-builder/sdk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }} suppressHydrationWarning>
      <body style={{ height: "100%", margin: 0 }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
