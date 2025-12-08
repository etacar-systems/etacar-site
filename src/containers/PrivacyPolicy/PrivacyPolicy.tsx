'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import Loader from '../../components/Loader';

const Introduction = dynamic(() => import('./components/Introduction'), { ssr: false, loading: () => <Loader /> });
const Cookies = dynamic(() => import('./components/Cookies'), { ssr: false });
const InformationSecurity = dynamic(() => import('./components/InformationSecurity'), {
  ssr: false,
});
const Footer = dynamic(() => import('../../components/Footer'), { ssr: false });

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FadeInSection>
        <Introduction />
        <Cookies />
        <InformationSecurity />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};
