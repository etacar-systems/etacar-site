import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import { Location } from '../../components/Location';

import Reviews from '../../commonSections/Reviews';
import Footer from '../../components/Footer';
import AIPhilosophy from './components/AIPhilosophy';
import BroaderTeam from './components/BroaderTeam';
import ClientWork from './components/ClientWork';
import Expirience from './components/Experience';
import Introduction from './components/Introduction';
import Mission from './components/Mission';
import NeuroscienceSection from './components/NeuroscienceSection';
import OurStory from './components/OurStory';
import TeamHero from './components/TeamHero';
import WhoWeAre from './components/WhoWeAre';

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FadeInSection>
        <TeamHero />
      </FadeInSection>

      <FadeInSection>
        <OurStory />
      </FadeInSection>

      <FadeInSection>
        <Introduction />
        <Expirience />
      </FadeInSection>

      <FadeInSection>
        <WhoWeAre />
        <NeuroscienceSection />
      </FadeInSection>

      <FadeInSection>
        <AIPhilosophy />
      </FadeInSection>

      <FadeInSection>
        <BroaderTeam />
      </FadeInSection>

      <FadeInSection>
        <ClientWork />
      </FadeInSection>

      <FadeInSection>
        <Mission />
      </FadeInSection>

      <FadeInSection>
        <Location />
      </FadeInSection>

      <FadeInSection>
        <Reviews />
      </FadeInSection>

      <Footer />
    </div>
  );
};
