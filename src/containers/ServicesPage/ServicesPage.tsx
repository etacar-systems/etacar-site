import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';

import Footer from '../../components/Footer';
import ServicesHero from './components/ServicesHero';
import { AIStrategy } from './components/AIStrategy';
import { AIEngineering } from './components/AIEngineering';
import { AIDecisions } from './components/AIDecisions';
import { Capabilities } from './components/Capabilities';
import { HowWork } from './components/HowWork';
import { FlagshipServices } from './components/FlagshipServices';

export const ServicesPage = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      const id = hash ? hash.replace('#', '') : '';
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
          return;
        }
      }
      window.scrollTo(0, 0);
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div>
      <FadeInSection>
        <ServicesHero />
      </FadeInSection>
      <FadeInSection>
        <FlagshipServices />
      </FadeInSection>
      <FadeInSection>
        <Capabilities />
      </FadeInSection>
      <FadeInSection>
        <HowWork />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};
