import { motion } from 'framer-motion';
import { ArrowRight, Download, FlaskConical, Leaf, LineChart, Mail } from 'lucide-react';
import { revealUp } from './SectionShell';

const focusIconMap = {
  'Commercial breeding pipelines': Leaf,
  'Multi-environment trial design': LineChart,
  'Marker-assisted and genomic selection': FlaskConical,
  'Field-based advancement strategies': ArrowRight,
};

function Hero({ content }) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-12 pt-24 md:px-6 md:pb-16 md:pt-28">
      <div className="hero-texture absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />
      <div className="section-frame relative">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="max-w-3xl"
          >
            <motion.span variants={revealUp} className="inline-flex items-center rounded-full border border-white/[0.15] bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ivory/90 backdrop-blur-sm">
              {content.eyebrow}
            </motion.span>
            <motion.h1
              variants={revealUp}
              className="mt-5 max-w-4xl text-4xl leading-[0.96] text-ivory sm:text-5xl lg:text-6xl"
            >
              {content.headline}
            </motion.h1>
            <motion.p variants={revealUp} className="mt-5 max-w-3xl text-lg leading-7 text-ivory/[0.78] md:text-xl md:leading-8">
              {content.subheadline}
            </motion.p>
            <motion.p variants={revealUp} className="mt-5 max-w-2xl text-base leading-7 text-ivory/[0.68] md:text-lg md:leading-8">
              {content.summary}
            </motion.p>
            <motion.div variants={revealUp} className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary bg-gold text-forest hover:bg-[#c8ab65]" href="#experience">
                View Experience
                <ArrowRight size={16} />
              </a>
              <a className="btn-secondary border-white/20 bg-white/10 text-ivory hover:border-white/40 hover:bg-white/[0.15] hover:text-white" href="#contact">
                Contact Me
                <Mail size={16} />
              </a>
              <a className="btn-secondary border-white/20 bg-white/10 text-ivory hover:border-white/40 hover:bg-white/[0.15] hover:text-white" href="/Ramesh-Pilli-Resume.pdf" download>
                Download Resume
                <Download size={16} />
              </a>
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="card-surface overflow-hidden border-white/[0.12] bg-white/10 p-5 text-ivory shadow-panel md:p-6"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-gold">Research + Industry Lens</p>
              <h2 className="mt-3 text-2xl text-ivory md:text-3xl">Advancing selection decisions from field to pipeline.</h2>
              <p className="mt-3 text-sm leading-6 text-ivory/[0.72] md:text-base md:leading-7">
                Breeding programs need scientific rigor, operational clarity, and commercially relevant decisions. This portfolio is built around that intersection.
              </p>
            </div>
            <div className="mt-5 grid gap-3">
              {content.focusAreas.map((focus) => {
                const Icon = focusIconMap[focus] || Leaf;

                return (
                  <motion.div
                    key={focus}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/[0.18] text-gold">
                      <Icon size={18} />
                    </span>
                    <div className="text-sm font-medium leading-6 text-ivory/[0.88]">{focus}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4"
        >
          {content.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={revealUp}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/[0.12] bg-white/10 p-5 text-ivory backdrop-blur-sm"
            >
              <div className="text-2xl font-semibold text-gold md:text-3xl">{stat.value}</div>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ivory/[0.72]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
