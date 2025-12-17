import React, { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import styles from './UseCasesPage.module.scss';

import Footer from '../../components/Footer';
import CrossIndustrySection from './components/CrossIndustrySection';
import Hero from './components/Hero';
import IndustrySection from './components/IndustrySection';
import UseCasesCTA from './components/UseCasesCTA';
import { crossIndustryUseCases, industries } from './data';

const UseCasesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <FadeInSection>
        <Hero />
      </FadeInSection>
      {industries.map((industry, index) => (
        <FadeInSection key={index}>
          <IndustrySection {...industry} isEven={index % 2 === 0} index={index} />
        </FadeInSection>
      ))}
      <FadeInSection>
        <CrossIndustrySection useCases={crossIndustryUseCases} sectionId='cross-industry' />
      </FadeInSection>
      <FadeInSection>
        <UseCasesCTA />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
};

export default UseCasesPage;
