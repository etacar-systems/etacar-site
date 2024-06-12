import React from 'react';
import { Introducion } from './components/Introducion';
import { Services } from './components/Services';
import { Footer } from '../../components/Footer/Footer';
import { Industries } from '../../commonSections/Industries';

export const ServicesPage = () => {
  return (
    <div>
      <Introducion />
      <Services />
      <Industries titleColor={'dark'} theme={'dark'} />
      <Footer />
    </div>
  );
};
