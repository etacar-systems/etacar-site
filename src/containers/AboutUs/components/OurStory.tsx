import React from 'react';

import { FadeCard } from '@/components/FadeCard';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './OurStory.module.scss';
import { Card } from '@/components/Card';

export const OurStory: React.FC = () => {
  const story = [
    {
      title: 'Our Roots',
      description: (
        <>
          We worked with AI before it was mainstream, building systems where <strong>reliability</strong> outweighed trends.
        </>
      ),
    },
    {
      title: 'Early Experience',
      description: (
        <>
          We built large-scale search and decision systems for <strong>mission-critical operations</strong>.
        </>
      ),
    },
    {
      title: 'Building Systems',
      description: (
        <>
          We shifted from AI features to <strong>structuring real decisions</strong>.
        </>
      ),
    },
    {
      title: 'Modern AI Expertise',
      description: (
        <>
          We design systems for environments shaped by <strong>uncertainty</strong> and evolving constraints.
        </>
      ),
    },
    {
      title: 'Human Decision Science',
      description: (
        <>
          Our approach keeps <strong>human accountability</strong> central and decisions defensible.
        </>
      ),
    },
    {
      title: 'Your AI Partner',
      description: (
        <>
          We build systems that evolve with organizations, ensuring <strong>consistent decisions</strong> over time.
        </>
      ),
    },
  ];

  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>Our story</h2>

        <p className={styles.subtext}>
          Since the early 2000s, we’ve built <strong>enterprise AI platforms</strong>. Today, we focus on <strong>production systems</strong> with <strong>clear ownership</strong> and <strong>governance</strong>.
        </p>

        <div className={styles.grid}>
          {story.map((item, index) => (
            <Card key={index} title={item.title} content={item.description} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurStory;
