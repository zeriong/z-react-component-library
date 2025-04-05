import React from "react";
import Link from "next/link";

export default function MainAside() {
  return (
    <aside className={"max-w-[360px] w-full h-full shadow-2xl border-r border-gray-300"}>
      <ul className={"p-[16px] flex flex-col gap-[16px]"}>
        <li
          className={
            "py-4 px-[20px] font-bold text-[24px] transition-all duration-200 cursor-pointer rounded-md hover:bg-gray-100"
          }
        >
          <Link href={"/three/r3f/map"}>ThreeJS Map</Link>
        </li>

        <li>
          <p>ThreeJS</p>
        </li>
      </ul>
    </aside>
  );
}
