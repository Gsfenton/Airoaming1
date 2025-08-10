import * as React from "react";
import clsx from "clsx";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"outline"|"ghost" };
export function Button({ className, variant="default", ...props }: Props){
  return <button className={clsx(
    "px-4 py-2 rounded-2xl text-sm font-medium transition border",
    variant==="default" && "bg-brand text-white border-brand hover:opacity-90",
    variant==="outline" && "bg-white text-brand border-gray-200 hover:bg-gray-50",
    variant==="ghost" && "bg-transparent text-brand border-transparent hover:bg-gray-100",
    className)} {...props}/>;
}
