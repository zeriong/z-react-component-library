"use client";

import React, { ReactNode } from "react";
import MainHeader from "@/components/layout/MainHeader";
import MainAside from "@/components/layout/MainAside";

interface IProps {
  children?: ReactNode;
}

export default function RootPage(props: IProps) {
  return (
    <>
      {/* main content */}
      <main>{props.children}</main>

      {/* root header */}
      <MainHeader />

      {/* root aside bar */}
      <MainAside />
    </>
  );
}
