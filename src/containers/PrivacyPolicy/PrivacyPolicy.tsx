import { lazy, Suspense, useEffect } from 'react';
import Loader from '../../components/Loader';

const Cookies = lazy(() => import('./components/Cookies'));
const InformationSecurity = lazy(() => import('./components/InformationSecurity'));
const Introduction = lazy(() => import('./components/Introduction'));
const Footer = lazy(() => import('../../components/Footer'));
export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <Introduction />
      <Cookies />
      <InformationSecurity />
      <Footer />
    </Suspense>
  );
};
