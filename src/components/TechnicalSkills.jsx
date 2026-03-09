import { motion } from 'framer-motion';
import { BarChart3, Database, Monitor, Server } from 'lucide-react';
import SectionShell, { revealUp } from './SectionShell';

const iconMap = [BarChart3, Database, Monitor, Server];

function TechnicalSkills({ groups }) {
  return (
    <SectionShell
      id="technical-skills"
      eyebrow="Technical Skills"
      title="Modern analytics, genomics tooling, and systems experience for breeding workflows."
      description="Technical depth spans data analysis, genomic workflows, visualization, reporting, and computing environments commonly used in applied breeding programs."
      className="bg-transparent"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((group, index) => {
          const Icon = iconMap[index] || Database;

          return (
            <motion.article
              key={group.title}
              variants={revealUp}
              whileHover={{ y: -4 }}
              className="card-surface h-full p-7"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-ivory">
                  <Icon size={20} />
                </span>
                <h3 className="text-2xl">{group.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default TechnicalSkills;
