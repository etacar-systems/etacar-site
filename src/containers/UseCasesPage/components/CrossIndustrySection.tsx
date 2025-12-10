import { FadeCard } from '@/components/FadeCard';
import { useRouter } from 'next/navigation';

import React from 'react';
import { SectionWrapper } from '../../../components/SectionWrapper';
import { SERVICES } from '../../../routes';
import styles from './CrossIndustrySection.module.scss';

interface UseCase {
  title: string;
  whatItIs: string;
  whoItsFor: string[];
  whatItDelivers?: string[];
  impact: string[];
  services: { title: string; sectionId: string }[];
  exampleProcesses?: string[];
}

interface CrossIndustrySectionProps {
  useCases: UseCase[];
  sectionId: string;
}

const CrossIndustrySection: React.FC<CrossIndustrySectionProps> = ({ useCases, sectionId }) => {
  return (
    <SectionWrapper id={sectionId} variant='gradient'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Cross‑industry use cases</h2>
          <p className={styles.intro}>
            While each industry has its specifics, many of the most valuable AI initiatives repeat across domains. Below
            are cross‑industry patterns we see most often.
          </p>
        </div>

        <div className={styles.grid}>
          {useCases.map((useCase, index) => (
            <FadeCard key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{useCase.title}</h3>

              <div className={styles.content}>
                <div className={styles.section}>
                  <h4 className={styles.label}>What it is:</h4>
                  <p className={styles.text}>{useCase.whatItIs}</p>
                </div>

                <div className={styles.section}>
                  <h4 className={styles.label}>Who it’s for:</h4>
                  <ul className={styles.list}>
                    {useCase.whoItsFor.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {useCase.exampleProcesses && (
                  <div className={styles.section}>
                    <h4 className={styles.label}>Example processes:</h4>
                    <ul className={styles.list}>
                      {useCase.exampleProcesses.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {useCase.whatItDelivers && (
                  <div className={styles.section}>
                    <h4 className={styles.label}>What it delivers:</h4>
                    <ul className={styles.list}>
                      {useCase.whatItDelivers.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={styles.section}>
                  <h4 className={styles.label}>Typical impact:</h4>
                  <ul className={styles.list}>
                    {useCase.impact.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.servicesSection}>
                <h4 className={styles.label}>Main services:</h4>
                <div className={styles.tags}>
                  {useCase.services.map((service, i) => (
                    <ServiceTag key={i} title={service.title} sectionId={service.sectionId} />
                  ))}
                </div>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ServiceTag: React.FC<{ title: string; sectionId: string }> = ({ title, sectionId }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${SERVICES}#${sectionId}`);
  };

  return (
    <button type='button' className={styles.tag} onClick={handleClick}>
      {title}
    </button>
  );
};

export default CrossIndustrySection;
