import Link from "next/link";
import React from "react";
import { IAsideListItem } from "@/constants/aside";

export default function MainAsideItem({ listItem }: Props) {
  const { name, href } = listItem;

  return (
    <li className={"w-full"}>
      <Link
        className={
          "py-4 px-[20px] w-full block font-bold text-[24px] transition-all duration-200 cursor-pointer rounded-md hover:bg-gray-100"
        }
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}

interface Props {
  listItem: IAsideListItem;
}
