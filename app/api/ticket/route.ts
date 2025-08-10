export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}));
  const ticket = { id: Math.random().toString(36).slice(2,8).toUpperCase(), ...body, at: new Date().toISOString(), status: "open" };
  console.log("SUPPORT_TICKET", ticket);
  return new Response(JSON.stringify({ ok:true, ticket }), { status:200 });
}
