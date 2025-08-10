"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SupportCenter(){
  const [status,setStatus] = useState<string | null>(null);
  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const res = await fetch("/api/ticket",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
    setStatus(res.ok ? "Ticket created. We’ll be in touch shortly." : "Unable to create ticket.");
    form.reset();
  }
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Support Center</CardTitle></CardHeader>
        <CardContent className="grid gap-3">
          <p className="text-sm text-gray-600">Track issues, request refunds, or get help rebooking.</p>
          <form onSubmit={submit} className="grid gap-3">
            <Input name="email" type="email" placeholder="Your email" required/>
            <Input name="bookingRef" placeholder="Booking reference (if any)"/>
            <textarea name="message" placeholder="What happened?" className="w-full px-3 py-2 border rounded-2xl text-sm h-32" required />
            <Button type="submit" className="rounded-2xl">Open ticket</Button>
          </form>
          {status && <p className="text-sm mt-2">{status}</p>}
        </CardContent>
      </Card>
    </main>
  );
}
