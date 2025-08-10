import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Airoaming — Plan, book, and go—stress‑free",
  description: "AI travel concierge with total price transparency, real human support, and verified listings.",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-b from-white via-white to-gray-50 text-brand">
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-2xl bg-brand text-white grid place-items-center font-bold">AR</div>
              <span className="font-semibold text-lg tracking-tight">Airoaming</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link className="hover:opacity-80" href="/#features">Features</Link>
              <Link className="hover:opacity-80" href="/#search">Search</Link>
              <Link className="hover:opacity-80" href="/support">Support</Link>
              <Link className="hover:opacity-80" href="/safety">Safety</Link>
              <Link className="hover:opacity-80" href="/contact">Contact</Link>
            </nav>
            <Link href="/account" className="text-sm hover:opacity-80">Sign in</Link>
          </div>
        </header>
        {children}
        <footer className="border-t bg-white mt-10">
          <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold">Airoaming</div>
              <p className="text-gray-600 mt-2">© {new Date().getFullYear()} Airoaming. All rights reserved.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link className="hover:opacity-80" href="/privacy">Privacy</Link>
              <Link className="hover:opacity-80" href="/terms">Terms</Link>
              <Link className="hover:opacity-80" href="/safety">Safety</Link>
              <Link className="hover:opacity-80" href="/support">Support</Link>
            </div>
            <form className="flex items-center gap-3" action="/api/subscribe" method="post" onSubmit={(e)=>{e.preventDefault(); fetch('/api/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:(e.currentTarget.querySelector('#newsletter') as HTMLInputElement)?.value})}).then(r=>alert(r.ok?'Thanks! Check your inbox.':'Please enter a valid email.'));}}>
              <input id="newsletter" placeholder="Your email" className="w-full px-3 py-2 border rounded-2xl text-sm outline-none focus:ring-2 focus:ring-gray-200"/>
              <button className="px-4 py-2 rounded-2xl text-sm font-medium transition border bg-brand text-white border-brand hover:opacity-90" type="submit">Subscribe</button>
            </form>
          </div>
        </footer>
      </body>
    </html>
  );
}
