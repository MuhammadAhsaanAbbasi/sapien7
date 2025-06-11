import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Input = (
  {
    title,
    className,
    required,
    light,
    wrapperClasses,
    error,
    inputClasses,
    startIcon,
    endIcon,
    labelIcon,
    titleClasses = "",
    ...rest
  },
  ref
) => {
  return (
    <div className={`flex-1 flex flex-col ${wrapperClasses}`}>
      {title && (
        <label
          htmlFor={rest.id}
          className={twMerge("text-[16px] font-normal flex gap-1 items-center px-1", titleClasses)}
        >
         {labelIcon && labelIcon}  {title}
          {required && "*"}
        </label>
      )}
      <div
        className={twMerge(
          `w-full border-[1px] border-solid border-[#FFFFFF33] ${className} p-3 rounded-2xl ${
            title ? "mt-[5px]" : ""
          } flex gap-3 items-center text-white bg-[radial-gradient(98.37%_109.43%_at_50%_50%,rgba(255,255,255,0)_36.6%,rgba(255,255,255,0.2)_100%)]`,
          inputClasses
        )}
      >
        {startIcon}
        <input
          ref={ref}
          {...rest}
          className={`w-full bg-transparent h-full !border-none !outline-none`}
        />
        {endIcon}
      </div>
      {error && (
        <span className="w-full block text-[12px] text-red-500">{error}</span>
      )}
    </div>
  );
};

export default forwardRef(Input);
