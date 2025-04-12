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

  function getParam(key: string) {
    return routerAction(key);
  }

  function setSingleParam(key: string, value: string) {
    routerAction(`${pathname}?${key}=${value}`);
  }

  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    routerAction(`${pathname}?${params.toString()}`);
  }

  function deleteParam(key: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);

    const queryStr = params.toString();
    const url = queryStr ? `${pathname}?${queryStr}` : pathname;

    routerAction(url);
  }

  function clearAllParams() {
    routerAction(pathname);
  }

  return {
    getParam,
    setParam,
    setSingleParam,
    deleteParam,
    clearAllParams,
    allParams: searchParams,
  };
};
