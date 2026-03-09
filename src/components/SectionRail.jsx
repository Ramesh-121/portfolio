import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Microscope,
  Sparkles,
  UserRound,
  Wrench,
} from 'lucide-react';

const iconMap = {
  about: UserRound,
  'core-skills': Sparkles,
  experience: Briefcase,
  education: GraduationCap,
  'technical-skills': Wrench,
  publications: BookOpen,
  presentations: Microscope,
  awards: Award,
};

function SectionRail({ links, activeSection }) {
  return (
    <aside className="fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 2xl:right-3 xl:block">
      <motion.nav
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[1.5rem] border border-white/70 bg-ivory/[0.72] p-2 shadow-soft backdrop-blur-sm"
        aria-label="Section navigation"
      >
        <div className="grid gap-2">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            const Icon = iconMap[link.id] || Sparkles;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                title={link.label}
                aria-label={link.label}
                className={`group relative flex h-11 w-11 items-center justify-center rounded-2xl transition duration-200 ${
                  isActive
                    ? 'bg-forest text-ivory shadow-md'
                    : 'text-forest/[0.72] hover:bg-forest/[0.08] hover:text-forest'
                }`}
              >
                <Icon size={18} strokeWidth={2} />
                <span className="pointer-events-none absolute right-[calc(100%+0.7rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/70 bg-charcoal px-3 py-1.5 text-xs font-medium text-ivory shadow-lg group-hover:block">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </motion.nav>
    </aside>
  );
}

export default SectionRail;
