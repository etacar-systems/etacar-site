'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: false, loading: () => <Loader /> });
const ContactInfo = dynamic(() => import('./components/ContactInfo'), { ssr: false });
const ContactForm = dynamic(() => import('./components/ContactForm'), { ssr: false });
const Reviews = dynamic(() => import('../../commonSections/Reviews'), { ssr: false });
const Footer = dynamic(() => import('../../components/Footer'), { ssr: false });

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
        <Reviews textColor='dark' theme='dark' />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};
