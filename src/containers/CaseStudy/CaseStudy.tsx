import React, { useEffect } from 'react';

import { Welcome } from './components/Welcome';
import { Location } from '../../components/Location';
import { Reviews } from '../../commonSections/Reviews';
import { Footer } from '../../components/Footer';
import { CaseStudies } from './components/CaseStudies';

export const CaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Welcome />
      <CaseStudies />
      <Location  />
      <Reviews textColor='dark' theme='dark' />
      <Footer />
    </div>
  );
};
