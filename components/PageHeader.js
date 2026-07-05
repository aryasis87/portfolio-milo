import Reveal from './ui/Reveal';

// Header halaman milo: playful, pill badge, judul tebal + aksen ungu.
export default function PageHeader({ kicker, title, accent, sub }) {
  return (
    <section className="px-4 pt-14 pb-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          {kicker && <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-violet-700">{kicker}</span>}
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
            {title} {accent && <span className="text-violet-500">{accent}</span>}
          </h1>
          {sub && <p className="mt-5 max-w-2xl text-lg text-slate-500">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}
