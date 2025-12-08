import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';

import Footer from '../../components/Footer';
import Cookies from './components/Cookies';
import InformationSecurity from './components/InformationSecurity';
import Introduction from './components/Introduction';

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
