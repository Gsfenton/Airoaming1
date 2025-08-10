import { Button } from "@/components/ui/button";
export default function SupportCTA(){
  return (
    <div className="p-4 border rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3 bg-gray-50">
      <div className="text-sm">Need help before or after booking? Our 24/7 humans are one tap away.</div>
      <div className="flex gap-2">
        <Button className="rounded-2xl" onClick={()=>location.href='/support'}>Open Support</Button>
        <Button className="rounded-2xl" variant="outline" onClick={()=>location.href='/contact'}>Contact</Button>
      </div>
    </div>
  );
}
