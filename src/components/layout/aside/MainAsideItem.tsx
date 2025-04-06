import React from "react";
import { IAsideListItem } from "@/constants/aside";

interface Props {
  listItem: IAsideListItem;
}

export default function MainAsideItem({ listItem }: Props) {
  const { name } = listItem;

  return (
    <li
      className={
        "w-full py-4 px-[20px] block font-bold text-[24px] transition-all duration-200 cursor-pointer rounded-md hover:bg-gray-100"
      }
    >
      {name}
    </li>
  );
}
