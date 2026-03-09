import { motion } from 'framer-motion';
import { Handshake, Microscope, Sprout } from 'lucide-react';
import SectionShell, { revealUp } from './SectionShell';

const iconMap = [Sprout, Microscope, Handshake];

function About({ content }) {
  return (
    <SectionShell
      id="about"
      eyebrow="About Me"
      title={content.title}
      description={content.paragraphs[0]}
      className="bg-transparent"
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={revealUp} className="card-surface p-8 md:p-10">
          <p className="section-copy">{content.paragraphs[1]}</p>
          <div className="soft-divider mt-8 pt-8">
            <div className="flex flex-wrap gap-3">
              <span className="tag-pill">Commercially relevant cultivars</span>
              <span className="tag-pill">Hands-on field execution</span>
              <span className="tag-pill">Genomics-informed breeding</span>
              <span className="tag-pill">Decision-ready reporting</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {content.highlights.map((highlight, index) => {
            const Icon = iconMap[index] || Sprout;

            return (
              <motion.article
                key={highlight.title}
                variants={revealUp}
                whileHover={{ y: -4 }}
                className="card-surface p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-ivory">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-2xl">{highlight.title}</h3>
                    <p className="mt-3 text-base leading-7 text-charcoal/[0.72]">{highlight.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

export default About;
