import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionShell, { revealUp } from './SectionShell';

function Contact({ content }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Open to academic, industry, and breeder-facing opportunities."
      description="The contact section is designed as a polished front-end form UI. Direct outreach by email or phone is the fastest way to connect."
      className="bg-transparent"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.aside variants={revealUp} className="card-surface p-8 md:p-10">
          <h3 className="text-3xl">Contact Details</h3>
          <div className="mt-8 grid gap-4">
            <a
              href={`mailto:${content.email}`}
              className="flex items-center gap-4 rounded-2xl border border-forest/10 bg-white px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-gold/[0.35]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-ivory">
                <Mail size={18} />
              </span>
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-forest/50">Email</div>
                <div className="font-medium text-charcoal">{content.email}</div>
              </div>
            </a>
            <a
              href={`tel:${content.phone}`}
              className="flex items-center gap-4 rounded-2xl border border-forest/10 bg-white px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-gold/[0.35]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-ivory">
                <Phone size={18} />
              </span>
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-forest/50">Phone</div>
                <div className="font-medium text-charcoal">{content.phone}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-forest/10 bg-white px-5 py-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-ivory">
                <MapPin size={18} />
              </span>
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-forest/50">Location</div>
                <div className="font-medium text-charcoal">{content.location}</div>
              </div>
            </div>
          </div>

          <div className="soft-divider mt-8 pt-8">
            <div className="text-sm uppercase tracking-[0.18em] text-forest/50">Profile Slots</div>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.socialPlaceholders.map((item) => (
                <span key={item} className="tag-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.aside>

        <motion.div variants={revealUp} className="card-surface p-8 md:p-10">
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-forest/[0.55]" htmlFor="name">
                Name
              </label>
              <input id="name" className="input-shell" type="text" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-forest/[0.55]" htmlFor="email">
                Email
              </label>
              <input id="email" className="input-shell" type="email" placeholder="your.email@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-forest/[0.55]" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="input-shell min-h-40 resize-y"
                placeholder="Tell me about the role, collaboration, or project."
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="btn-primary">
                Send Message
                <Send size={16} />
              </button>
              <p className="text-sm leading-6 text-charcoal/[0.58]">
                No backend is connected here yet. This UI is ready for Formspree, Resend, or a custom API route.
              </p>
            </div>
            {submitted ? (
              <p className="rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-medium text-forest">
                Message UI submitted. For now, please reach out directly at {content.email}.
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </SectionShell>
  );
}

export default Contact;
