import React from "react";
import Link from "next/link";
import { ASIDE_LIST } from "@/constants/aside";
import MainAsideItem from "@/components/layout/aside/MainAsideItem";

export default function MainAside() {
  return (
    <aside className={"max-w-[360px] w-full h-full shadow-2xl border-r border-gray-300"}>
      <ul className={"p-[16px] flex flex-col gap-[16px]"}>
        {ASIDE_LIST.map((item) => {
          return <MainAsideItem key={item.id} listItem={item} />;
        })}

        <li>
          <p>ThreeJS</p>
        </li>
      </ul>
    </aside>
  );
}
