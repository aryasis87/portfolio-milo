'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return; setSent(true); };
  const field = 'w-full rounded-2xl border-2 border-violet-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400';

  return (
    <main>
      <PageHeader kicker="Contact" title="Let’s be" accent="friends! 👋" sub="Got a fun project or just want to say hi? Drop me a line." />
      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} color="bg-amber-100" />
            <Info icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} color="bg-emerald-100" />
            <Info icon={MapPin} label="Location" value={profile.location} color="bg-sky-100" />
            <div className="tile bg-violet-100 p-5">
              <span className="flex items-center gap-2 text-sm font-bold text-violet-700">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-violet-500" /> Open for new projects
              </span>
              <p className="mt-2 text-sm text-slate-600">Booking fun work for next quarter!</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-1">
              {profile.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-500 transition hover:text-violet-600">{s.label}</a>)}
            </div>
          </div>
          <div>
            {sent ? (
              <div className="tile bg-white p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-500 text-white"><Check size={28} /></div>
                <h2 className="mt-4 text-2xl font-extrabold text-slate-900">Yay, got it! 🎉</h2>
                <p className="mt-1 text-slate-600">Thanks {form.name}! I’ll reply to {form.email} super soon.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-6 rounded-full border-2 border-violet-200 px-6 py-2.5 text-sm font-bold text-violet-600 transition hover:bg-violet-50">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="tile space-y-4 bg-white p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" value={form.name} onChange={handle} placeholder="Your name" required className={field} />
                  <input type="email" name="email" value={form.email} onChange={handle} placeholder="Your email" required className={field} />
                </div>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell me about your fun idea…" rows={6} required className={`${field} resize-none`} />
                <button type="submit" className="w-full rounded-full bg-violet-500 py-3.5 font-bold text-white transition hover:bg-violet-600">Send it! 🚀</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href, color }) {
  const inner = (
    <div className={`tile tile-hover flex items-start gap-4 ${color} p-5`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-slate-700"><Icon size={20} /></span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
        <p className="mt-0.5 font-extrabold text-slate-900">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
