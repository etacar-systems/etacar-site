import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Cookies } from './Cookies';
import { Introduction } from './Introduction';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Introduction />
      <Cookies />
      <Footer />
    </>
  );
};
