"use client";
import * as React from "react"; import clsx from "clsx";
export function Tabs({ value, onValueChange, children, className, id }:{value:string,onValueChange:(v:string)=>void,children:React.ReactNode,className?:string,id?:string}){
  return <div className={className} id={id}>{React.Children.map(children,(c:any)=>React.cloneElement(c,{value,onValueChange}))}</div>
}
export function TabsList({ children, className }:{children:React.ReactNode,className?:string}){
  const kids = React.Children.toArray(children);
  return <div className={clsx("inline-grid gap-2 p-1 bg-gray-100 rounded-2xl",className)} style={{gridTemplateColumns:`repeat(${kids.length},minmax(0,1fr))`}}>{kids}</div>
}
export function TabsTrigger({ value:myVal, children, className, value, onValueChange }:{value?:string,myVal?:string,children:React.ReactNode,className?:string,onValueChange?:(v:string)=>void}){
  const selected = (value===myVal);
  return <button onClick={()=>onValueChange && myVal && onValueChange(myVal)} className={clsx("px-3 py-2 rounded-xl text-sm border transition flex items-center justify-center", selected?"bg-white border-gray-200 shadow-sm":"border-transparent hover:bg-white/60")}>{children}</button>
}
export function TabsContent({ value:myVal, value, children, className }:{value?:string,myVal?:string,children:React.ReactNode,className?:string}){
  if(value!==myVal) return null;
  return <div className={className}>{children}</div>
}
