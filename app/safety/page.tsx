export const metadata = { title: "Safety Center — Airoaming" };
export default function Safety(){
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
      <h1>Safety Center</h1>
      <p>We actively screen for red flags such as mismatched domains, unusual cancellation terms, and host identity issues.</p>
      <h2>What we do</h2>
      <ul>
        <li>Verified partner integrations—no unvetted listings.</li>
        <li>AI-assisted fraud detection before checkout.</li>
        <li>Account protection (rate limiting, suspicious login alerts).</li>
      </ul>
      <h2>Report a concern</h2>
      <p>Email <a href="mailto:security@airoaming.app">security@airoaming.app</a> or open a ticket via Support.</p>
    </main>
  );
}
