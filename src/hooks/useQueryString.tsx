// app/hooks/useQueryString.ts
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryString = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function routerAction(urlString: string, isReplace?: boolean) {
    if (isReplace) router.replace(urlString);
    else router.push(urlString);
  }

  function getParam(key: string) {
    return routerAction(key);
  }

  function setSingleParam(key: string, value: string, isReplace?: boolean) {
    routerAction(`${pathname}?${key}=${value}`, isReplace);
  }

  function setParam(key: string, value: string, isReplace?: boolean) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    routerAction(`${pathname}?${params.toString()}`, isReplace);
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
