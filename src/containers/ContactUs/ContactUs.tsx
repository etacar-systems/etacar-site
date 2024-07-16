import React, { lazy, Suspense, useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

const ContactForm = lazy(() => import('./components/ContactForm'));
const Introduction = lazy(() => import('./components/Introduction'));
const Footer = lazy(() => import('../../components/Footer'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));
export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <FadeInSection>
        <Introduction />
        <ContactForm />
        <Reviews textColor={'dark'} theme={'dark'} />
      </FadeInSection>
      <Footer />
    </Suspense>
  );
};
