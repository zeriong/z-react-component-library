import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  name: string;
  href: string;
}

export default function MainAsideItem(props: Props) {
  const { name, href } = props;

  return (
    <li
      className={
        "py-4 px-[20px] font-bold text-[24px] transition-all duration-200 cursor-pointer rounded-md hover:bg-gray-100"
      }
    >
      <Link href={href}>{name}</Link>
    </li>
  );
}
