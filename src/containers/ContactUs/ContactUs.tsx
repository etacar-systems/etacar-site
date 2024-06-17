import React from 'react';

import { ContactForm } from './components/ContactForm';
import { Footer } from '../../components/Footer';
import { Introduction } from './components/Introduction';
import { Reviews } from '../../commonSections/Reviews';

export const ContactUs = () => {
  return (
    <>
      <Introduction />
      <ContactForm />
      <Reviews textColor={'dark'} theme={'dark'} />
      <Footer />
    </>
  );
};
