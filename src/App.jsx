import { useEffect, useState } from 'react';
import About from './components/About';
import Awards from './components/Awards';
import CoreSkills from './components/CoreSkills';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Presentations from './components/Presentations';
import Publications from './components/Publications';
import SectionRail from './components/SectionRail';
import ScrollToTop from './components/ScrollToTop';
import TechnicalSkills from './components/TechnicalSkills';
import {
  about,
  awards,
  contact,
  coreSkills,
  education,
  experience,
  footerLinks,
  heroContent,
  navLinks,
  presentations,
  publications,
  technicalSkillGroups,
} from './data/portfolio';

const sectionIds = navLinks.map(({ id }) => id);

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let frameId = null;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      const currentSection =
        [...sectionIds]
          .reverse()
          .find((sectionId) => {
            const element = document.getElementById(sectionId);
            return element && element.offsetTop <= scrollPosition;
          }) || 'home';

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection,
      );
    };

    const requestUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        updateActiveSection();
        frameId = null;
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Navbar activeSection={activeSection} links={navLinks} />
      <SectionRail activeSection={activeSection} links={navLinks.filter(({ id }) => id !== 'home')} />
      <main>
        <Hero content={heroContent} />
        <About content={about} />
        <CoreSkills items={coreSkills} />
        <Experience items={experience} />
        <Education items={education} />
        <TechnicalSkills groups={technicalSkillGroups} />
        <Publications items={publications} />
        <Presentations items={presentations} />
        <Awards items={awards} />
      </main>
      <Footer contact={contact} links={footerLinks} />
      <ScrollToTop />
    </div>
  );
}

export default App;
