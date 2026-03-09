import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

function Navbar({ links, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}Ramesh-Pilli-Resume.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shellClass = isScrolled
    ? 'border-forest/10 bg-ivory/[0.92] shadow-soft backdrop-blur-md'
    : 'border-white/40 bg-ivory/[0.78] shadow-soft backdrop-blur-md';

  const mobileLinks = links.filter(({ id }) => id !== 'home');

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4 md:px-6">
      <div className={`mx-auto max-w-7xl rounded-[1.75rem] border transition-all duration-300 ${shellClass}`}>
        <div className="flex min-w-0 items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Ramesh Pilli home">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-semibold tracking-[0.3em] text-ivory sm:h-11 sm:w-11">
              RP
            </span>
            <div className="min-w-0">
              <div className="truncate font-display text-lg font-semibold text-forest sm:text-xl">
                Ramesh Pilli
              </div>
              <div className="hidden text-xs uppercase tracking-[0.18em] text-forest/60 sm:block md:hidden xl:block">
                Plant Science PhD Candidate
              </div>
            </div>
          </a>

          <div className="hidden sm:flex sm:items-center sm:gap-3">
            <a
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                activeSection === 'home'
                  ? 'bg-forest text-ivory shadow-md'
                  : 'bg-white/65 text-forest hover:bg-white'
              }`}
              href="#home"
            >
              Home
            </a>
            <a className="btn-secondary" href={resumeUrl} download>
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/10 bg-white/80 text-forest xl:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-forest/10 px-3 pb-3 sm:px-4 sm:pb-4 xl:hidden">
            <nav className="grid gap-2 pt-4">
              {mobileLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                      isActive ? 'bg-forest text-ivory' : 'bg-white/70 text-forest'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                className="btn-secondary mt-2"
                href={resumeUrl}
                download
                onClick={() => setIsOpen(false)}
              >
                <Download size={16} />
                Download Resume
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
