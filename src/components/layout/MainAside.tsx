import React from "react";
import Link from "next/link";

export default function MainAside() {
  return (
    <aside className={"max-w-[360px] w-full h-full shadow-2xl border-r border-gray-300"}>
      <ul className={"p-[16px] flex flex-col gap-[16px]"}>
        <li className={"p-4 font-bold text-[24px]"}>
          <Link href={"/three/r3f/map"}>ThreeJS Map</Link>
        </li>

        <li>
          <p>ThreeJS</p>
        </li>
      </ul>
    </aside>
  );
}
