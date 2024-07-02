// import React, { lazy, useEffect } from 'react';

// // Alplabetical order is REQUIRED!

// import { CaseStudies } from './components/CaseStudies';
// import { Development } from './components/Development';
// import { Footer } from '../../components/Footer';
// import { GetEstimationForm } from './components/GetEstimationForm';
// import { Industries } from '../../commonSections/Industries';
// import { Mission } from './components/Mission';
// import { Reviews } from '../../commonSections/Reviews';
// import { Services } from './components/Services';
// import { Welcome } from './components/Welcome';

// export const Home = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div>
//       <Welcome />
//       <Mission />
//       <Development />
//       <CaseStudies />
//       <Services />
//       <Industries />
//       <Reviews arrowColor='dark' theme='blueLight' />
//       <GetEstimationForm />
//       <Footer />
//     </div>
//   );
// };

import React, { lazy, Suspense, useEffect } from 'react';
import Loader from '../../components/Loader';

// Alplabetical order is REQUIRED!

const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Development = lazy(() => import('./components/Development'));
const Footer = lazy(() => import('../../components/Footer'));
const GetEstimationForm = lazy(() => import('./components/GetEstimationForm'));
const Industries = lazy(() => import('../../commonSections/Industries'));
const Mission = lazy(() => import('./components/Mission'));
const Reviews = lazy(() => import('../../commonSections/Reviews'));
const Services = lazy(() => import('./components/Services'));
const Welcome = lazy(() => import('./components/Welcome'));

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};
