// app/hooks/useQueryString.ts
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  isReplace: boolean;
}
export const useQueryString = ({ isReplace }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function routerAction(urlString: string) {
    if (isReplace) router.replace(urlString);
    else router.push(urlString);
  }

  const getParam = (key: string) => {
    return routerAction(key);
  };

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    routerAction(`${pathname}?${params.toString()}`);
  };

  const deleteParam = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    const queryStr = params.toString();
    const url = queryStr ? `${pathname}?${queryStr}` : pathname;

    routerAction(url);
  };

  const clearAllParams = () => {
    routerAction(pathname);
  };

  return {
    getParam,
    setParam,
    deleteParam,
    clearAllParams,
    allParams: searchParams,
  };
};
