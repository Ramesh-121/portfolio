import { motion } from 'framer-motion';

export const revealUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className = '',
  children,
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      variants={sectionVariants}
    >
      <div className="section-frame section-padding">
        <motion.div variants={revealUp} className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          {description ? <p className="section-copy mt-5">{description}</p> : null}
        </motion.div>
        <div className="mt-10">{children}</div>
      </div>
    </motion.section>
  );
}

export default SectionShell;
