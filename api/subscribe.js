// Vercel serverless function: subscribes an email to Moodboard via the Beehiiv
// API and enrolls it in the prompt-pack delivery automation (no welcome email).
//
// Requires the BEEHIIV_API_KEY environment variable, set in the Vercel
// dashboard (Project > Settings > Environment Variables).

const PUBLICATION_ID = "pub_327a60d7-6f28-488a-bd66-65f5c47c26a1";
const AUTOMATION_ID = "aut_0e6df79d-8a34-4422-8ba6-64a9c5fdb3c6";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server not configured" });
  }

  const email = (req.body?.email || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const r = await fetch(
    `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: false,
        utm_source: "prompt-pack-landing",
        utm_medium: "referral",
        utm_campaign: "email-prompt-pack",
        referring_site: "tailwindstudio.co/prompts",
        automation_ids: [AUTOMATION_ID],
      }),
    }
  );

  if (!r.ok) {
    const detail = await r.text().catch(() => "");
    console.error("Beehiiv error", r.status, detail);
    return res.status(502).json({ error: "Subscription failed" });
  }

  return res.status(200).json({ ok: true });
}
