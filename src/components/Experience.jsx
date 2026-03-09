import { motion } from 'framer-motion';
import { Briefcase, CalendarDays } from 'lucide-react';
import SectionShell, { revealUp } from './SectionShell';

function Experience({ items }) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Applied breeding experience across university research and commercial crop improvement."
      description="Experience spans field execution, breeding pipeline support, genomic analysis, and cultivar advancement decisions in both academic and industry environments."
      className="bg-transparent"
    >
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-forest/[0.12] md:block" />
        <div className="grid gap-6">
          {items.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.organization}`}
              variants={revealUp}
              whileHover={{ y: -4 }}
              className="card-surface relative p-7 md:ml-12"
            >
              <div className="absolute -left-[3.2rem] top-8 hidden h-5 w-5 rounded-full border-4 border-ivory bg-gold md:block" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-forest/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                    <Briefcase size={14} />
                    Role {index + 1}
                  </div>
                  <h3 className="mt-4 text-3xl">{item.role}</h3>
                  <p className="mt-2 text-lg font-semibold text-gold">{item.organization}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white px-4 py-2 text-sm font-medium text-forest/[0.72]">
                  <CalendarDays size={16} />
                  {item.dates}
                </div>
              </div>
              <ul className="mt-6 grid gap-3 text-base leading-7 text-charcoal/[0.78]">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export default Experience;
