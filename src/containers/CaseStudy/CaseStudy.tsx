import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import { Location } from '../../components/Location';

import Reviews from '../../commonSections/Reviews';
import Footer from '../../components/Footer';
import CaseStudies from './components/CaseStudies';
import Welcome from './components/Welcome';

export const CaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FadeInSection>
        <Welcome />
      </FadeInSection>
      <FadeInSection>
        <CaseStudies />
      </FadeInSection>
      <FadeInSection>
        <Location />
      </FadeInSection>
      <FadeInSection>
        <Reviews textColor='dark' theme='dark' />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};
