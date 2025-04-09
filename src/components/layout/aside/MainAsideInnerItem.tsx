export default function MainAsideInnerItem({ item }) {
  const { name, href } = item;
  return <li className={"bg-red-500 text-white rounded-md px-[20px] py-[12px]"}>{name}</li>;
}
