/**
 * Sends an enquiry to the Counsellor Platform organisation as a lead (no secret needed: the website's address is whitelisted on the server).
 * Never blocks the form: the visitor still gets the WhatsApp message even when this fails.
 * Configure with VITE_LEADS_API_URL and VITE_LEADS_ORG_SLUG (defaults below are this company's own setup).
 */
const API = (import.meta.env.VITE_LEADS_API_URL || 'https://apicounsellor.jdinfotechsolutions.in').replace(/\/+$/, '');
const SLUG = import.meta.env.VITE_LEADS_ORG_SLUG || 'jd-infotech';

const clean = (v, max) => String(v ?? '').trim().slice(0, max);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sendLead({ name, phone, email, interest, source } = {}) {
  const n = clean(name, 120);
  const p = clean(phone, 20);
  if (n.length < 2 || p.replace(/\D/g, '').length < 10) return Promise.resolve(false);
  const body = { name: n, phone: p, sourceUrl: clean(source ? `${location.href}#${source}` : location.href, 500) };
  const e = clean(email, 160);
  if (EMAIL.test(e)) body.email = e;
  const i = clean(interest, 120);
  if (i) body.interestedCourse = i;
  try {
    const vid = window.FA && typeof window.FA.visitorId === 'function' ? window.FA.visitorId() : '';
    if (vid) body.visitorId = clean(vid, 60);
  } catch {
    /* tracking is optional */
  }
  return fetch(`${API}/public/poptin/${encodeURIComponent(SLUG)}/enquiry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    keepalive: true,
  }).then(
    (r) => r.ok,
    () => false,
  );
}
