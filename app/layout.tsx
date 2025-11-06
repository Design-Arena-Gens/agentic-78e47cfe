import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chart Visualization Showcase",
  description: "Comprehensive collection of data visualization charts with modern design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
