'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { nav } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => (href === '/' ? pathname === '/' : !!pathname && pathname.startsWith(href));
  const links = nav.slice(0, -1);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-violet-100 bg-white/90 px-5 py-3 shadow-[0_10px_30px_-12px_rgba(80,60,160,0.2)] backdrop-blur">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-violet-700">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-500 text-sm text-white">M</span> Milo
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${isActive(l.href) ? 'bg-violet-100 text-violet-700' : 'text-slate-500 hover:bg-slate-100'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-1 rounded-full bg-violet-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-violet-600">
            Say hi 👋
          </Link>
        </div>

        <button className="text-violet-700 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-violet-100 bg-white p-3 shadow-lg md:hidden"
          >
            {nav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block rounded-xl px-3 py-2.5 text-sm font-semibold ${isActive(l.href) ? 'bg-violet-100 text-violet-700' : 'text-slate-600 hover:bg-slate-100'}`}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
