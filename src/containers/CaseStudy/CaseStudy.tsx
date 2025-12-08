'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';
import { Location } from '../../components/Location';

const Welcome = dynamic(() => import('./components/Welcome'), { ssr: false, loading: () => <Loader /> });
const CaseStudies = dynamic(() => import('./components/CaseStudies'), { ssr: false });
const Reviews = dynamic(() => import('../../commonSections/Reviews'), { ssr: false });
const Footer = dynamic(() => import('../../components/Footer'), { ssr: false });

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
