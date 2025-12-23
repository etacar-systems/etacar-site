import React from 'react';
import { FadeCard } from '../../../../components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import styles from './WhatWeDo.module.scss';

export const WhatWeDo: React.FC = () => {
  const focusAreas = [
    {
      title: 'AI Strategy & Architecture',
      description: (
        <>
          We define <em>realistic roadmaps</em> and <strong>enterprise-ready architectures</strong> that accelerate
          deployment by up to <em>40% faster cycle times</em> with <strong>governance baked in</strong> from day one.
        </>
      ),
    },
    {
      title: 'AI for Decisions & Operations',
      description: (
        <>
          <strong>Role-specific AI copilots</strong> that reduce <em>decision errors</em> and <em>escalations</em> by up
          to <strong>50%</strong>, improving <em>throughput</em> and <em>operational consistency</em>.
        </>
      ),
    },
    {
      title: 'AI for Engineering',
      description: (
        <>
          Embed AI into <strong>engineering processes</strong> to deliver features <em>30–50% faster</em> with{' '}
          <strong>significantly less manual rework</strong>.
        </>
      ),
    },
  ];

  return (
    <SectionWrapper variant='light'>
      <div className={styles.content}>
        <h2 className={styles.title}>What we do</h2>

        <p className={styles.subtext}>
          We focus on <strong>AI where it truly matters</strong>: <em>high-stakes decisions</em>,{' '}
          <em>core operations</em>, and the <strong>systems that run your business</strong>.
        </p>

        <div className={styles.grid}>
          {focusAreas.map((area, index) => (
            <FadeCard key={index} className={styles.card}>
              <div className={styles.cardItem}>
                <div className={styles.number}>{index + 1}</div>
                <h3 className={styles.cardTitle}>{area.title}</h3>
                <p className={styles.cardDescription}>{area.description}</p>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatWeDo;
