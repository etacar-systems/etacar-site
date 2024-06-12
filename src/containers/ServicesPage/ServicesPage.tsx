import React from 'react';
import { Introducion } from './components/Introducion';
import { Services } from './components/Services';
import { Footer } from '../../components/Footer/Footer';

import { Reviews } from '../../commonSections/Reviews';
import { Industries } from '../../commonSections/Industries';

export const ServicesPage = () => {
  return (
    <div>
      <Introducion />
      <Services />
      <Industries textColor={'dark'} theme={'dark'} />
      <Reviews textColor={'dark'} theme={'dark'} />
      <Footer />
    </div>
  );
};
