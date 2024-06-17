import React from 'react';
import { Reviews } from '../../commonSections/Reviews';
import { Footer } from '../../components/Footer';
import { Introduction } from './components/Introduction/Introduction';

export const ContactUs = () => {
  return (
    <>
      <Introduction />
      <Reviews textColor={'dark'} theme={'dark'} />
      <Footer />
    </>
  );
};
