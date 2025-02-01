import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMsg?: string;
  className?: string;
}

export default function CustomInput({ errorMsg, className = "", ...rest }: Props) {
  const mergedClassName = twMerge(
    "py-[6px] px-[12px] border border-gray-100 focus:border-brand-4 placeholder-gray-200 font-medium rounded-[6px]",
    className,
  );
  return (
    <div className="">
      <input className={mergedClassName} {...rest} />
      {errorMsg && <div className="w-full h-[18px] ml-[12px] py-[6px] text-[12px] text-error-1">{errorMsg}</div>}
    </div>
  );
}
