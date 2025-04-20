import type { Metadata } from "next";
import "../style/globals.css";
import React, { ReactNode } from "react";
import MainHeader from "@/components/layout/header/MainHeader";
import MainAside from "@/components/layout/aside/MainAside";

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
      <body className={"flex flex-col h-full"}>
        {/* root header */}
        <MainHeader />

        {/* aside + content wrapper  */}
        <div className={"flex h-full grow"}>
          {/* root aside bar */}
          <MainAside />

          {/* main content */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
