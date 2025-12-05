'use client';

import { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

const HeroSection = lazy(() => import('./components/HeroSection'));
const ContactInfo = lazy(() => import('./components/ContactInfo'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('../../components/Footer'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <ContactInfo />
      </FadeInSection>
      <FadeInSection>
        <ContactForm />
      </FadeInSection>
      <FadeInSection>
        <Reviews textColor={'dark'} theme={'dark'} />
      </FadeInSection>
      <Footer />
    </Suspense>
  );
};
