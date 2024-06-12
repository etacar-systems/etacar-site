import React from 'react';

import { CaseStudies } from './components/CaseStudies';
import { Development } from './components/Development';
import { Footer } from '../../components/Footer';
import { Mission } from './components/Mission';
import { Reviews } from './components/Reviews';
import { Services } from './components/Services';
import { Welcome } from './components/Welcome';
import { Industries } from '../../commonSections/Industries';

export const Home = () => {
  return (
    <div>
      <Welcome />
      <Mission />
      <Development />
      <CaseStudies />
      <Services />
      <Industries />
      <Reviews />
      <Footer />
    </div>
  );
};
