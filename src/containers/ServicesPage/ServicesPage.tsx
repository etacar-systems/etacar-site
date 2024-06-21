import React from 'react';
import { Introducion } from './components/Introducion';
import { Services } from './components/Services';
import { Footer } from '../../components/Footer/Footer';

import { Reviews } from '../../commonSections/Reviews';
import { Industries } from '../../commonSections/Industries';
import { Models } from './components/Models';

export const ServicesPage = () => {
  return (
    <div>
      <Introducion />
      <Services />
      <Models />
      <Industries textColor={'dark'} theme={'dark'} />
      <Reviews textColor={'dark'} theme={'dark'} />
      <Footer />
    </div>
  );
};
