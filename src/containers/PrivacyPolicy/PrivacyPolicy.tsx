import { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';

import Footer from '../../components/Footer';
import Introduction from './components/Introduction';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FadeInSection>
        <Introduction />
      </FadeInSection>
      <Footer />
    </>
  );
};
