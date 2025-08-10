import * as React from "react";
import clsx from "clsx";
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>){ return <div className={clsx("bg-white border rounded-2xl", className)} {...props}/>; }
export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>){ return <div className={clsx("p-4", className)} {...props}/>; }
export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>){ return <div className={clsx("text-xl font-semibold", className)} {...props}/>; }
export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>){ return <div className={clsx("p-4", className)} {...props}/>; }
