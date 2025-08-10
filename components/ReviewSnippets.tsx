import { Card, CardContent } from "@/components/ui/card";
const items = [
  { id: 1, quote: "Everything was upfront—no nasty last‑minute fees.", who: "Hannah, London" },
  { id: 2, quote: "Human support actually fixed my issue while I was boarding.", who: "Amir, Manchester" },
  { id: 3, quote: "Best bundle checkout: flight + hotel + eSIM in minutes.", who: "Ines, Lisbon" },
];
export default function ReviewSnippets(){
  return <div className="grid md:grid-cols-3 gap-3 mt-8">
    {items.map(i=> (
      <Card key={i.id} className="rounded-2xl">
        <CardContent className="p-4 text-sm">“{i.quote}”<div className="text-xs text-gray-500 mt-2">— {i.who}</div></CardContent>
      </Card>
    ))}
  </div>;
}
