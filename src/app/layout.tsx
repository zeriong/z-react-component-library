import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Z-React-Component-Library",
  description: "It's React Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
