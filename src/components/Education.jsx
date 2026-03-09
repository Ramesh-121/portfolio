import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionShell, { revealUp } from './SectionShell';

function Education({ items }) {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Academic training shaped by plant breeding, genomics, and applied cultivar development."
      description="Formal education and research experience reflect a trajectory grounded in breeding genetics, quantitative analysis, and translational field research."
      className="bg-white/[0.55]"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <motion.article
            key={`${item.degree}-${item.institution}`}
            variants={revealUp}
            whileHover={{ y: -5 }}
            className="card-surface h-full p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/[0.16] text-forest">
                <GraduationCap size={22} />
              </span>
              <span className="rounded-full border border-forest/10 bg-white px-3 py-1 text-sm font-medium text-forest/70">
                {item.date}
              </span>
            </div>
            <h3 className="mt-6 text-2xl leading-tight">{item.degree}</h3>
            <p className="mt-2 text-lg font-semibold text-gold">{item.institution}</p>
            <p className="mt-4 text-base leading-7 text-charcoal/[0.72]">{item.details}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

export default Education;
