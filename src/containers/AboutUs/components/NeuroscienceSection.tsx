import React from 'react';

import { GiMaterialsScience } from "react-icons/gi";
import { FaStar, FaCheckCircle } from "react-icons/fa";


import { SectionWrapper } from '../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './NeuroscienceSection.module.scss';

const NeuroscienceSection: React.FC = () => {
  const neuroPoints = [
    {
      title: 'Neuroscience Roots',
      description: (
        <>
          Our team includes <strong>professional neuroscientists</strong> studying how complex systems learn and fail.
        </>
      ),
      icon: GiMaterialsScience,
    },
    {
      title: 'Why It Matters',
      description: (
        <>
          We design AI around <strong>human decision-making</strong>, trust, and real-world cognitive limits.
        </>
      ),
      icon: FaStar,
    },
    {
      title: 'Our Approach',
      description: (
        <>
          We focus on adoption — not just models, but <strong>AI that teams actually use</strong>.
        </>
      ),
      icon: FaCheckCircle,
    },
  ];

  return (
    <SectionWrapper className={styles.neuroscienceSection} >
      <div className={styles.content}>
        <h2 className={styles.title}>Neuroscience and AI - why it matters</h2>

        <p className={styles.subtext}>
          Understanding how complex systems learn, adapt and interact with human behavior.
        </p>

        <div className={styles.grid}>
          {neuroPoints.map((point, index) => (
            <Card key={index} content={point.description} icon={point.icon} title={point.title} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NeuroscienceSection;
