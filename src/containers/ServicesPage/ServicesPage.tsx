import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';

import Footer from '../../components/Footer';
import AICopilots from './components/AICopilots';
import AIGovernance from './components/AIGovernance';
import AIStrategy from './components/AIStrategy';
import DocumentIntelligence from './components/DocumentIntelligence';
import Models from './components/Models';
import ProcessAutomation from './components/ProcessAutomation';
import ServicesHero from './components/ServicesHero';
import SoftwareDelivery from './components/SoftwareDelivery';

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
        <AIStrategy />
      </FadeInSection>
      <FadeInSection>
        <AICopilots />
      </FadeInSection>
      <FadeInSection>
        <ProcessAutomation />
      </FadeInSection>
      <FadeInSection>
        <DocumentIntelligence />
      </FadeInSection>
      <FadeInSection>
        <SoftwareDelivery />
      </FadeInSection>
      <FadeInSection>
        <AIGovernance />
      </FadeInSection>
      <FadeInSection>
        <Models />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};
