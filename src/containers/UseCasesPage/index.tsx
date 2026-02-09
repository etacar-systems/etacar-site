import React, { useEffect } from 'react';
import { FadeInSection } from '../../components/FadeInSection/FadeInSection';
import styles from './UseCasesPage.module.scss';

import Footer from '../../components/Footer';
import Hero from './components/Hero';
import IndustrySection from './components/IndustrySection';
import UseCasesCTA from './components/UseCasesCTA';
import { groups } from './data';
import { CardSection } from '@/components/CardSection';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AcrossIndustries } from './components/AcrossIndustries';

const UseCasesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <FadeInSection>
        <Hero />
      </FadeInSection>
      {groups.map((group, index) => (
        <FadeInSection key={index}>
          <IndustrySection {...group} />
        </FadeInSection>
      ))}
      <FadeInSection>
        <AcrossIndustries />
      </FadeInSection>
      <FadeInSection>
        <SectionWrapper>
          <CardSection
            text={
              'EtaCar supports these decision scenarios through structured decision-support systems designed for professional environments — emphasizing clarity, control, and accountability over automation.'
            }
            title={'How these use cases are addressed'}
          />
        </SectionWrapper>
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
