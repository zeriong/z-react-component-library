export default function MainAsideInnerItem({ item }) {
  const { name, href } = item;
  return (
    <li>
      <Link href={href} className={"bg-red-500 text-white rounded-md px-[20px] py-[12px] block"}>
        {name}
      </Link>
    </li>
  );
}

import Link from "next/link";
