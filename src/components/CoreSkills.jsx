import { motion } from 'framer-motion';
import {
  BarChart3,
  Code2,
  Crosshair,
  Dna,
  FlaskConical,
  Handshake,
  Leaf,
  LineChart,
  Sprout,
} from 'lucide-react';
import SectionShell, { revealUp } from './SectionShell';

const iconMap = {
  sprout: Sprout,
  leaf: Leaf,
  seedling: Sprout,
  chart: LineChart,
  dna: Dna,
  flask: FlaskConical,
  target: Crosshair,
  field: BarChart3,
  team: Handshake,
  code: Code2,
};

function CoreSkills({ items }) {
  return (
    <SectionShell
      id="core-skills"
      eyebrow="Core Skills"
      title="A breeder-focused skill set built for applied research and commercial advancement."
      description="Core strengths are organized around the workflows that matter most in modern cultivar development, from population design through field evaluation and data-driven selection."
      className="bg-white/[0.55]"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const Icon = iconMap[item.icon] || Sprout;

          return (
            <motion.article
              key={item.title}
              variants={revealUp}
              whileHover={{ y: -6 }}
              className="card-surface h-full p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-ivory">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-2xl leading-tight">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-charcoal/[0.72]">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default CoreSkills;
