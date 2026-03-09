import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import SectionShell, { revealUp } from './SectionShell';

function Publications({ items }) {
  return (
    <SectionShell
      id="publications"
      eyebrow="Publications"
      title="Selected publications in grape breeding, fruit quality genetics, and climate resilience."
      description="A concise publication list keeps the site recruiter-friendly while signaling research output, collaborative scholarship, and subject-matter depth."
      className="bg-white/[0.55]"
    >
      <div className="grid gap-5">
        {items.map((item) => (
          <motion.article
            key={`${item.title}-${item.year}`}
            variants={revealUp}
            whileHover={{ y: -4 }}
            className="card-surface p-7 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/[0.16] text-forest">
                  <BookOpen size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                    {item.outlet}
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-charcoal/[0.72]">{item.authors}</p>
                </div>
              </div>
              <div className="rounded-full border border-forest/10 bg-white px-4 py-2 text-sm font-medium text-forest/70">
                {item.year}
              </div>
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.18em] text-forest/[0.55]">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

export default Publications;
