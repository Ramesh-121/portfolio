import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionShell, { revealUp } from './SectionShell';

function Awards({ items }) {
  return (
    <SectionShell
      id="awards"
      eyebrow="Awards & Scholarships"
      title="Recognition for research quality, academic excellence, and professional development."
      description="Scholarships and travel support emphasize both sustained performance and active engagement with the plant breeding research community."
      className="bg-white/[0.55]"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <motion.article
            key={`${item.title}-${item.date}`}
            variants={revealUp}
            whileHover={{ y: -4 }}
            className="card-surface h-full p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/[0.16] text-forest">
                <Award size={20} />
              </span>
              <span className="rounded-full border border-forest/10 bg-white px-3 py-1 text-sm font-medium text-forest/70">
                {item.date}
              </span>
            </div>
            <h3 className="mt-6 text-2xl leading-tight">{item.title}</h3>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

export default Awards;
