"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PriceBreakdown({ base=100, taxes=20, fees=10 }:{base?:number,taxes?:number,fees?:number}){
  const [carryOn, setCarryOn] = useState(true);
  const [refund, setRefund] = useState(false);
  const total = base + taxes + fees + (carryOn?0:30) + (refund?15:0);
  return (
    <Card className="rounded-2xl">
      <CardHeader><CardTitle>Transparent pricing</CardTitle></CardHeader>
      <CardContent className="text-sm">
        <div className="grid grid-cols-2 gap-2">
          <div>Base fare</div><div className="text-right">£{base}</div>
          <div>Taxes</div><div className="text-right">£{taxes}</div>
          <div>Platform fee</div><div className="text-right">£{fees}</div>
          <div className="col-span-2 border-t my-2"></div>
          <div className="flex items-center gap-2"><input type="checkbox" checked={!carryOn} onChange={()=>setCarryOn(!carryOn)}/> Add checked bag</div><div className="text-right">{!carryOn?"+ £30":"£0"}</div>
          <div className="flex items-center gap-2"><input type="checkbox" checked={refund} onChange={()=>setRefund(!refund)}/> Refundable fare</div><div className="text-right">{refund?"+ £15":"£0"}</div>
          <div className="col-span-2 border-t my-2"></div>
          <div className="font-semibold">Total</div><div className="text-right font-semibold">£{total}</div>
        </div>
        <Button className="rounded-2xl mt-3 w-full">Continue</Button>
      </CardContent>
    </Card>
  );
}
