"use client";

import React from "react";
import { IAsideListItem } from "@/constants/aside";
import MainAsideInnerItem from "@/components/layout/aside/MainAsideInnerItem";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  listItem: IAsideListItem;
}

export default function MainAsideItem({ listItem }: Props) {
  const { name, children } = listItem;

  const router = useRouter();

  function handleAccordion() {
    router.replace();
  }

  return (
    <li>
      <button
        type={"button"}
        className={
          "text-start w-full py-4 px-[20px] block font-bold text-[24px] transition-all duration-200 cursor-pointer rounded-md hover:bg-sky-100"
        }
        onClick={() => handleAccordion()}
      >
        {name}
      </button>
      {children?.length && (
        <ul className={"text-[18px] p-[12px] bg-gray-100 rounded-sm"}>
          {children.map((item) => {
            return <MainAsideInnerItem key={item.id} item={item} />;
          })}
        </ul>
      )}
    </li>
  );
}
