interface IAsideItemCore {
  id: string;
  name: string;
  href: string;
}

interface IAsideListChildrenItem extends IAsideItemCore {
  href: string;
}

export interface IAsideListItem extends IAsideItemCore {
  children?: IAsideListChildrenItem[];
}

// * id convention = 케밥 케이스로 queryString 할당할 것
export const ASIDE_LIST: IAsideListItem[] = [
  {
    id: "aside-three",
    href: "/three",
    name: "ThreeJS",
    children: [{ id: "aside-map", name: "R3F Map", href: "/three/r3f/map" }],
  },
];
