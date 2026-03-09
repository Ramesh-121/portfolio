import { Github, GraduationCap, Linkedin } from 'lucide-react';

function Footer({ contact, links }) {
  return (
    <footer className="border-t border-forest/10 bg-forest text-ivory">
      <div className="section-frame py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-3xl text-ivory">{contact.name}</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-ivory/[0.72]">
              Plant Science PhD Candidate focused on breeding strategy, genomics, field trials, and cultivar advancement for research-driven and commercial breeding programs.
            </p>
            <p className="mt-4 text-sm text-ivory/[0.55]">
              © {new Date().getFullYear()} {contact.name}. All rights reserved.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-gold">Quick Links</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-ivory/[0.78] hover:border-gold/30 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-gold">Profiles</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-ivory/[0.78]">
                  <Linkedin className="mr-2 inline-block" size={14} />
                  LinkedIn
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-ivory/[0.78]">
                  <GraduationCap className="mr-2 inline-block" size={14} />
                  Google Scholar
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-ivory/[0.78]">
                  <Github className="mr-2 inline-block" size={14} />
                  GitHub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
