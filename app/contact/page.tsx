"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage(){
  const [status, setStatus] = useState<string| null>(null);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const res = await fetch("/api/contact", { method: "POST", body: formData });
    setStatus(res.ok ? "Thanks! We’ll be in touch." : "Something went wrong. Try again.");
    form.reset();
  }
  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Contact us</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-3">
            <Input name="name" placeholder="Your name" required />
            <Input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" placeholder="How can we help?" className="w-full px-3 py-2 border rounded-2xl text-sm h-32" required />
            <Button type="submit" className="rounded-2xl">Send</Button>
          </form>
          {status && <p className="text-sm mt-3">{status}</p>}
        </CardContent>
      </Card>
    </main>
  );
}
