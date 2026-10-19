import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    const data = new FormData(form);
    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, String(value)));
    try {
      const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
      if (!response.ok || response.headers.get('content-type')?.includes('text/html') && (location.hostname === 'localhost' || location.hostname === '127.0.0.1')) throw new Error('Submission unavailable');
      setStatus('success'); form.reset();
    } catch { setStatus('error'); }
  }
  return <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit} className="contact-form">
    <input type="hidden" name="form-name" value="contact" />
    <p hidden><label>Leave this empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100}/></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={200}/></label></div>
    <label>What brings you here?<input name="subject" placeholder="A project, an opportunity, an idea…" required maxLength={200}/></label>
    <label>Your message<textarea name="message" placeholder="Tell me a little about it." rows={3} required maxLength={5000}/></label>
    <div className="form-bottom"><span className="micro">GOOD CONVERSATIONS START HERE.</span><button className="pill light" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}<ArrowUpRight size={18}/></button></div>
    <p role="status" className="form-status">{status === 'success' ? 'Thank you. Your message has been sent — I’ll get back to you.' : status === 'error' ? 'Your message could not be sent. Please email iushyadav27@gmail.com directly.' : ''}</p>
  </form>;
}
