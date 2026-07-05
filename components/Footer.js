import Link from 'next/link';
import { profile, nav } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="tile mb-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 p-8 text-white md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">Let’s make something fun! 🎉</h2>
              <p className="mt-2 text-white/85">Got a playful idea? I’d love to hear it.</p>
            </div>
            <Link href="/contact" className="shrink-0 rounded-full bg-white px-7 py-3 font-bold text-violet-600 transition hover:bg-violet-50">
              Start a project →
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-extrabold text-violet-700">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-500 text-sm text-white">M</span> Milo
            </h3>
            <p className="mt-3 max-w-xs text-sm text-slate-500">{profile.role} · {profile.location}.</p>
            <a href={`mailto:${profile.email}`} className="mt-3 inline-block text-sm font-bold text-violet-600 hover:underline">{profile.email}</a>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Menu</p>
            <ul className="mt-3 space-y-2">
              {nav.map((l) => <li key={l.href}><Link href={l.href} className="text-sm font-medium text-slate-600 transition hover:text-violet-600">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Say hi on</p>
            <ul className="mt-3 space-y-2">
              {profile.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 transition hover:text-violet-600">{s.label}</a></li>)}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-slate-400">© {new Date().getFullYear()} Milo. Made with love & coffee. ☕</p>
      </div>
    </footer>
  );
}
