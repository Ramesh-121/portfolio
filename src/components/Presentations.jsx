import { motion } from 'framer-motion';
import { Microscope, Sparkles } from 'lucide-react';
import SectionShell, { revealUp } from './SectionShell';

function Presentations({ items }) {
  return (
    <SectionShell
      id="presentations"
      eyebrow="Presentations & Achievements"
      title="Conference and research communication focused on actionable breeding insights."
      description="This section highlights presentation topics that reinforce Ramesh's expertise in genomic analysis, trait discovery, and breeding-relevant interpretation."
      className="bg-transparent"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.article
            key={`${item.title}-${index}`}
            variants={revealUp}
            whileHover={{ y: -5 }}
            className="card-surface h-full p-7"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-ivory">
                {index === 0 ? <Microscope size={20} /> : <Sparkles size={20} />}
              </span>
              <span className="rounded-full bg-gold/[0.12] px-3 py-1 text-sm font-medium text-forest">
                {item.year}
              </span>
            </div>
            <h3 className="mt-6 text-2xl leading-tight">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-charcoal/[0.72]">{item.event}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

export default Presentations;
