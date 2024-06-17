import React from 'react';

// Alplabetical order is REQUIRED!

import { CaseStudies } from './components/CaseStudies';
import { Development } from './components/Development';
import { Footer } from '../../components/Footer';
import { Mission } from './components/Mission';
import { Services } from './components/Services';
import { Welcome } from './components/Welcome';

import { Industries } from '../../commonSections/Industries';
import { Reviews } from '../../commonSections/Reviews';

export const Home = () => {
  return (
    <div>
      <Welcome />
      <Mission />
      <Development />
      <CaseStudies />
      <Services />
      <Industries />
      <Reviews arrowColor='dark' />
      <Footer />
    </div>
  );
};
