import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main>
      <PageHeader kicker="Error 404" title="Oops, this page" accent="wandered off." sub="It doesn't exist, or it moved somewhere else. The work and the notes are still right here." />
      <section className="px-4 pb-24">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-700 active:scale-95">
            <ArrowLeft size={16} aria-hidden="true" /> Back home
          </Link>
          <Link href="/work" className="rounded-full bg-violet-100 px-6 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-200 active:scale-95">
            See the work
          </Link>
        </div>
      </section>
    </main>
  );
}
