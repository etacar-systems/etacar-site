import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';

import Footer from '../../components/Footer';
import ServicesHero from './components/ServicesHero';
import { FlagshipServices } from './components/FlagshipServices';
import { BusinessFraming } from './components/BusinessFraming';
import { CorePositioning } from './components/CorePositioning';
import { Difference } from './components/Difference';
import { BusinessImpact } from './components/BusinessImpact';
import { BuildFor } from './components/BuildFor';

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
        <BusinessFraming />
      </FadeInSection>
      <FadeInSection>
        <CorePositioning />
      </FadeInSection>
      <FadeInSection>
        <FlagshipServices />
      </FadeInSection>
      <FadeInSection>
        <Difference />
      </FadeInSection>
      <FadeInSection>
        <BusinessImpact />
      </FadeInSection>
      <FadeInSection>
        <BuildFor />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};
