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
          We’ve been working with AI since the <strong>early 2000s</strong>, long before it became mainstream.
        </>
      ),
    },
    {
      title: 'Early Experience',
      description: (
        <>
          We began on <strong>enterprise AI platforms</strong>, building large-scale search and decision systems.
        </>
      ),
    },
    {
      title: 'Building Systems',
      description: (
        <>
          We design and run <strong>AI systems in production</strong> across real business environments.
        </>
      ),
    },
    {
      title: 'Modern AI Expertise',
      description: (
        <>
          Today, we focus on <strong>production AI</strong>, not experiments or prototypes.
        </>
      ),
    },
    {
      title: 'Neuroscience & Human Factors',
      description: (
        <>
          Our work is informed by <strong>neuroscience</strong> and how people actually make decisions.
        </>
      ),
    },
    {
      title: 'Your AI Partner',
      description: (
        <>
          We embed AI into <strong>core workflows</strong> to deliver real, measurable value.
        </>
      ),
    },
  ];

  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>Our story</h2>

        <p className={styles.subtext}>
          We started in the <strong>early 2000s</strong> with hands-on work on <strong>enterprise AI platforms</strong>.
          That experience shaped our approach to AI today — production systems with clear ownership, measurable KPIs,
          and strong governance, rooted in <strong>neuroscience and complex systems</strong>.
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
