export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email || !/.+@.+\..+/.test(email)) return new Response(JSON.stringify({ ok:false }), { status:400 });
  console.log("NEWSLETTER_SUBSCRIBE", { email, at: new Date().toISOString() });
  return new Response(JSON.stringify({ ok:true }), { status:200 });
}
