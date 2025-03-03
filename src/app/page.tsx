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
      {/* root header */}
      <MainHeader />

      {/* aside + content wrapper  */}
      <div className={"flex h-full grow"}>
        <>
          {/* main content */}
          <main>{props.children}</main>

          {/* root aside bar */}
          <MainAside />
        </>
      </div>
    </>
  );
}
