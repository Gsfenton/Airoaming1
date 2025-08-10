export async function POST(req: Request) {
  const form = await req.formData();
  const payload = { name: String(form.get("name")||""), email: String(form.get("email")||""), message: String(form.get("message")||""), at: new Date().toISOString() };
  console.log("CONTACT_SUBMISSION", payload);
  return new Response(JSON.stringify({ ok:true }), { status:200 });
}
