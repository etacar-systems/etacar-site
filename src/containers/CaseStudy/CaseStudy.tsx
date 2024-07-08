import React, { lazy, Suspense, useEffect } from 'react';
import Loader from '../../components/Loader';

import { Location } from '../../components/Location';

const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Footer = lazy(() => import('../../components/Footer'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));
const Welcome = lazy(() => import('./components/Welcome'));
export const CaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Welcome />
        <CaseStudies />
        <Location />
        <Reviews textColor='dark' theme='dark' />
        <Footer />
      </div>
    </Suspense>
  );
};
