"use client";
import * as React from "react";
export function Switch({checked,onCheckedChange}:{checked?:boolean,onCheckedChange?:(v:boolean)=>void}){
  return (<button onClick={()=>onCheckedChange && onCheckedChange(!checked)} aria-pressed={checked} className={`w-12 h-6 rounded-full border transition ${checked?'bg-brand':'bg-gray-200'}`}>
    <div className={`w-5 h-5 rounded-full bg-white mt-0.5 transition ${checked?'translate-x-6':'translate-x-1'}`} /></button>);
}
