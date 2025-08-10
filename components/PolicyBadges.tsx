export default function PolicyBadges({ cancel="Free 24h", baggage="1 carry‑on", refund="Refundable option" }){
  const Badge = ({ text }:{ text:string }) => <span className="badge ok">{text}</span>;
  return <div className="flex flex-wrap gap-2 text-xs mt-2">
    <Badge text={`Cancel: ${cancel}`} />
    <Badge text={`Baggage: ${baggage}`} />
    <Badge text={refund} />
  </div>
}
