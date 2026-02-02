import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import style from './ContactUs.module.scss';

import Reviews from '../../commonSections/Reviews';
import Footer from '../../components/Footer';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import HeroSection from './components/HeroSection';

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
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
        <Reviews />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};
