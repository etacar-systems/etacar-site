import React, { lazy, Suspense, useEffect } from 'react';
import Loader from '../../components/Loader';

const Introduction = lazy(() => import('./components/Introduction'));
const Services = lazy(() => import('./components/Services'));
const Models = lazy(() => import('./components/Models'));
const Industries = lazy(() => import('../../commonSections/Industries'));
const Footer = lazy(() => import('../../components/Footer'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));

export const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Introduction />
        <Services />
        <Models />
        <Suspense fallback={<Loader />}>
          <Industries textColor={'dark'} theme={'dark'} />
        </Suspense>
        <Reviews textColor={'dark'} theme={'dark'} />
        <Footer />
      </div>
    </Suspense>
  );
};
