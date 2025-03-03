import type { Metadata } from "next";
import "../style/globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Z-React-Component-Library",
  description: "It's React Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: ReactNode;
}>) {
  return (
    <html lang="en" className={"h-full"}>
      <body className={"flex flex-col h-full"}>{children}</body>
    </html>
  );
}
