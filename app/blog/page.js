import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { posts } from '@/lib/data';

export const metadata = { title: 'Blog — Milo' };

export default function BlogPage() {
  return (
    <main>
      <PageHeader kicker="Blog" title="Happy little" accent="notes ✍️" sub="Thoughts on playful design, illustration, and making people smile." />
      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <a href="#" className={`tile tile-hover group block h-full ${p.color} p-7`}>
                <div className="mb-3 flex items-center gap-3 text-xs font-bold text-slate-500">
                  <span className="rounded-full bg-white/70 px-2.5 py-1 text-violet-600">{p.category}</span>
                  <span>{p.date}</span><span>·</span><span>{p.read}</span>
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">{p.title}</h2>
                <p className="mt-2 text-slate-600">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-violet-600">Read <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5" /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
