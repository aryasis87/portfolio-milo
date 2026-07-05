// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { profile, stats, services, projects, clients, process, testimonials } from '@/lib/data';

export default function Home() {
  return (
    <main className="px-4 pt-8">
      {/* Bento hero */}
      <section className="mx-auto max-w-6xl">
        <div className="grid auto-rows-[minmax(150px,auto)] grid-cols-2 gap-4 md:grid-cols-4">
          {/* Intro */}
          <div className="tile col-span-2 row-span-2 flex flex-col justify-between bg-violet-500 p-7 text-white md:p-9">
            <span className="inline-block w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide">{profile.role}</span>
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                Hi, I’m Milo — I make things <span className="text-amber-300">playful</span>. ✨
              </h1>
              <p className="mt-4 max-w-md text-white/85">{profile.intro}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/work" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-violet-600 transition hover:bg-amber-100 active:scale-95">
                See my work <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold transition hover:bg-white/10">Say hi 👋</Link>
            </div>
          </div>
          {/* Photo */}
          <div className="tile relative col-span-2 row-span-2 overflow-hidden">
            <Image src={profile.avatar} alt={profile.name} fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
          </div>
          {/* Stats */}
          {stats.map((s, i) => {
            const colors = ['bg-amber-100', 'bg-emerald-100', 'bg-rose-100', 'bg-sky-100'];
            return (
              <div key={s.label} className={`tile ${colors[i % 4]} flex flex-col items-center justify-center p-5 text-center`}>
                <p className="text-3xl font-extrabold text-slate-900">{s.value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">{s.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl py-16">
        <Reveal><h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">What I can do for you 🚀</h2></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className={`tile tile-hover h-full ${s.color} p-7`}>
                <span className="text-4xl">{s.emoji}</span>
                <h3 className="mt-4 text-xl font-extrabold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work preview */}
      <section className="mx-auto max-w-6xl py-8">
        <div className="flex items-end justify-between">
          <Reveal><h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Recent fun 🎨</h2></Reveal>
          <Link href="/work" className="inline-flex items-center gap-1 text-sm font-bold text-violet-600 hover:underline">See all <ArrowUpRight size={16} /></Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <Link href="/work" className={`tile tile-hover group block overflow-hidden ${p.color}`}>
                <div className="relative m-3 h-44 overflow-hidden rounded-2xl">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="px-5 pb-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-slate-900">{p.title}</h3>
                    <span className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-bold text-slate-600">{p.category}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-6xl py-8">
        <p className="text-center text-sm font-bold uppercase tracking-wide text-slate-400">Loved by fun teams</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {clients.map((c) => <span key={c} className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-slate-500 shadow-sm">{c}</span>)}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl py-12">
        <Reveal><h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">How it works 🛠️</h2></Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => {
            const colors = ['bg-violet-100', 'bg-amber-100', 'bg-emerald-100', 'bg-rose-100'];
            return (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className={`tile h-full ${colors[i % 4]} p-6`}>
                  <span className="text-3xl font-extrabold text-slate-900/30">{p.step}</span>
                  <h3 className="mt-2 text-lg font-extrabold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl py-12">
        <Reveal><h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Happy people 💛</h2></Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="tile h-full bg-white p-6">
                <p className="text-yellow-400">★★★★★</p>
                <p className="mt-3 font-medium text-slate-700">“{t.quote}”</p>
                <p className="mt-4 font-extrabold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
