import { Shield, CheckCircle2, Eye, Lock } from "lucide-react";
export default function TrustBar(){
  const Item = ({icon:Icon, text}:{icon:any, text:string})=>(
    <div className="flex items-center gap-2 text-xs"><Icon className="w-4 h-4"/>{text}</div>
  );
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
      <Item icon={Eye} text="Total price shown upfront" />
      <Item icon={CheckCircle2} text="Free 24h cancellation where available" />
      <Item icon={Shield} text="Happy Path Promise" />
      <Item icon={Lock} text="Security-first, audited platform" />
    </div>
  );
}
