"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plane, Hotel, Umbrella, Car, Clock, Globe, SlidersHorizontal, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import PolicyBadges from "@/components/PolicyBadges";
import PriceBreakdown from "@/components/PriceBreakdown";
import TrustBar from "@/components/TrustBar";
import ReviewSnippets from "@/components/ReviewSnippets";
import SupportCTA from "@/components/SupportCTA";

const mockResults = {
  flights: [
    { id: 1, origin: "LON", destination: "BCN", price: 42, carrier: "Ryanair", stops: 0, duration: "2h 10m", date: "2025-09-02" },
    { id: 2, origin: "LON", destination: "BCN", price: 68, carrier: "Vueling", stops: 0, duration: "2h 5m", date: "2025-09-02" },
  ],
  hotels: [
    { id: 1, name: "Port Vell Boutique", rating: 4.5, price: 129, location: "Gothic Quarter" },
    { id: 2, name: "Barceloneta Breeze", rating: 4.2, price: 102, location: "Barceloneta" },
  ],
  activities: [
    { id: 1, name: "Sagrada Família Fast-Track", price: 28, provider: "GetYourGuide" },
    { id: 2, name: "Tapas Walking Tour", price: 39, provider: "Viator" },
  ],
};

const Feature = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
  <Card className="rounded-2xl shadow-sm">
    <CardHeader className="flex flex-row items-center gap-3">
      <div className="p-2 rounded-xl bg-gray-100"><Icon className="w-5 h-5" /></div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-gray-600">{text}</CardContent>
  </Card>
);

const ResultCard = ({ children }: { children: React.ReactNode }) => (
  <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">{children}</Card>
);

export default function AiroamingApp() {
  const [tab, setTab] = useState("flights");
  const [from, setFrom] = useState("London");
  const [to, setTo] = useState("Barcelona");
  const [date, setDate] = useState("");
  const [carryOnOnly, setCarryOnOnly] = useState(true);
  const results = useMemo(() => (mockResults as any)[tab] || [], [tab]);

  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold leading-tight">
              Plan, book, and go—<span className="underline decoration-wavy decoration-gray-300">stress‑free</span>.
            </motion.h1>
            <p className="mt-4 text-gray-600 max-w-prose">
              Airoaming is your AI travel concierge. Compare flights & hotels, add taxis, bikes, activities, insurance, and eSIMs—then checkout with fewer tabs and zero headaches.
            </p>
            <TrustBar />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-2xl">Start planning</Button>
              <Button variant="outline" className="rounded-2xl">Watch demo</Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4"/>Price guard</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4"/>24/7 help</div>
              <div className="flex items-center gap-2"><Globe className="w-4 h-4"/>Global coverage</div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white border rounded-3xl p-4 shadow-sm">
            <Tabs value={tab} onValueChange={setTab} className="w-full" id="search">
              <TabsList className="grid grid-cols-4 rounded-2xl">
                <TabsTrigger value="flights"><div className="flex gap-2 items-center"><Plane className="w-4 h-4"/>Flights</div></TabsTrigger>
                <TabsTrigger value="hotels"><div className="flex gap-2 items-center"><Hotel className="w-4 h-4"/>Hotels</div></TabsTrigger>
                <TabsTrigger value="activities"><div className="flex gap-2 items-center"><Umbrella className="w-4 h-4"/>Activities</div></TabsTrigger>
                <TabsTrigger value="transfers"><div className="flex gap-2 items-center"><Car className="w-4 h-4"/>Transfers</div></TabsTrigger>
              </TabsList>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <div><Label>From</Label><Input value={from} onChange={(e)=>setFrom(e.target.value)} placeholder="City or airport" /></div>
                <div><Label>To</Label><Input value={to} onChange={(e)=>setTo(e.target.value)} placeholder="City or airport" /></div>
                <div><Label>Depart</Label><Input type="date" value={date} onChange={(e)=>setDate(e.target.value)} /></div>
                <div className="col-span-1 md:col-span-2 flex items-center justify-between border rounded-2xl p-3">
                  <div className="flex items-center gap-2 text-sm"><SlidersHorizontal className="w-4 h-4"/>Carry-on only</div>
                  <Switch checked={carryOnOnly} onCheckedChange={setCarryOnOnly} />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-gray-500">Flexible dates</div>
                <Button className="rounded-2xl">Search</Button>
              </div>
              <TabsContent value="flights" className="mt-6 grid gap-3">
                {results.map((r: any) => (
                  <ResultCard key={r.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Plane className="w-5 h-5"/>
                          <div>
                            <div className="font-medium">{r.origin} → {r.destination} • {r.carrier}</div>
                            <div className="text-xs text-gray-500">{r.duration} • {r.stops===0?"Direct":`${r.stops} stops`} • {r.date}</div>
                            <PolicyBadges />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold">£{r.price}</div>
                          <div className="text-xs text-gray-500">incl. taxes</div>
                        </div>
                      </div>
                      <div className="mt-4"><PriceBreakdown base={r.price} taxes={12} fees={5} /></div>
                    </CardContent>
                  </ResultCard>
                ))}
              </TabsContent>
              <TabsContent value="hotels" className="mt-6 grid gap-3">
                {results.map((h: any) => (
                  <ResultCard key={h.id}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Hotel className="w-5 h-5"/>
                        <div>
                          <div className="font-medium">{h.name}</div>
                          <div className="text-xs text-gray-500">{h.location} • ⭐ {h.rating}</div>
                          <PolicyBadges cancel="Free until 48h" baggage="N/A" refund="Flexible rate available" />
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold">£{h.price}/night</div>
                        <div className="text-xs text-gray-500">free cancel</div>
                      </div>
                    </CardContent>
                  </ResultCard>
                ))}
              </TabsContent>
              <TabsContent value="activities" className="mt-6 grid gap-3">
                {results.map((a: any) => (
                  <ResultCard key={a.id}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Umbrella className="w-5 h-5"/>
                        <div>
                          <div className="font-medium">{a.name}</div>
                          <div className="text-xs text-gray-500">via {a.provider}</div>
                          <PolicyBadges cancel="Free up to 24h" baggage="-" refund="Instant ticket" />
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold">£{a.price}</div>
                        <div className="text-xs text-gray-500">instant ticket</div>
                      </div>
                    </CardContent>
                  </ResultCard>
                ))}
              </TabsContent>
              <TabsContent value="transfers" className="mt-6">
                <Card className="rounded-2xl"><CardContent className="p-4 text-sm text-gray-600">Add airport taxis, car hire, or bikes after selecting your flight/hotel.</CardContent></Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
        <div id="features" className="grid md:grid-cols-3 gap-4 mt-12">
          <Feature icon={Globe} title="All-in-one checkout" text="Bundle flights, stays, transfers, activities, insurance, and eSIMs in one flow." />
          <Feature icon={Shield} title="Price guard" text="We flag baggage gotchas and bad cancel policies before you book." />
          <Feature icon={Clock} title="On-trip assistant" text="Live alerts, rebooking help, and offline tickets." />
        </div>
        <ReviewSnippets />
        <div className="mt-8"><SupportCTA /></div>
      </section>
    </div>
  );
}
