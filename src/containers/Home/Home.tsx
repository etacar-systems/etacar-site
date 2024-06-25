import React, { useEffect } from 'react';

// Alplabetical order is REQUIRED!

import { CaseStudies } from './components/CaseStudies';
import { Development } from './components/Development';
import { Footer } from '../../components/Footer';
import { GetEstimationForm } from './components/GetEstimationForm';
import { Industries } from '../../commonSections/Industries';
import { Mission } from './components/Mission';
import { Reviews } from '../../commonSections/Reviews';
import { Services } from './components/Services';
import { Welcome } from './components/Welcome';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Welcome />
      <Mission />
      <Development />
      <CaseStudies />
      <Services />
      <Industries />
      <Reviews arrowColor='dark' theme='blueLight' />
      <GetEstimationForm />
      <Footer />
    </div>
  );
};
