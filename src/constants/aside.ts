interface IAsideItemCore {
  id: string;
  name: string;
}

interface IAsideListChildrenItem extends IAsideItemCore {
  href: string;
}

export interface IAsideListItem extends IAsideItemCore {
  children?: IAsideListChildrenItem[];
}

export const ASIDE_LIST: IAsideListItem[] = [
  { id: "aside_1", name: "ThreeJS", children: [{ id: "aside_map", name: "R3F Map", href: "/three/r3f/map" }] },
];
