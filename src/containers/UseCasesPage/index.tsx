import React, { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import styles from './UseCasesPage.module.scss';

import Footer from '../../components/Footer';
import Hero from './components/Hero';
import OperationalProofMeaning from './components/OperationalProofMeaning';
import FlagshipOperationalCase from './components/FlagshipOperationalCase';
import TargetEnvironments from './components/TargetEnvironments';
import BeforeAfter from './components/BeforeAfter';
import WhatThisProves from './components/WhatThisProves';
import FinalStatement from './components/FinalStatement';

const UseCasesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection>
        <OperationalProofMeaning />
      </FadeInSection>
      <FadeInSection>
        <FlagshipOperationalCase />
      </FadeInSection>
      <FadeInSection>
        <TargetEnvironments />
      </FadeInSection>
      <FadeInSection>
        <BeforeAfter />
      </FadeInSection>
      <FadeInSection>
        <WhatThisProves />
      </FadeInSection>
      <FadeInSection>
        <FinalStatement />
      </FadeInSection>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
