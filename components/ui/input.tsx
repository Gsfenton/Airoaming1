import * as React from "react"; import clsx from "clsx";
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({className,...props},ref)=>(
  <input ref={ref} className={clsx("w-full px-3 py-2 border rounded-2xl text-sm outline-none focus:ring-2 focus:ring-gray-200", className)} {...props}/>
)); Input.displayName="Input";
