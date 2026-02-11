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
          Our team includes <strong>neuroscientists</strong> studying how systems fail.
        </>
      ),
      icon: GiMaterialsScience,
    },
    {
      title: 'Why It Matters',
      description: (
        <>
          We design AI for <strong>human decision-making</strong>, trust, and cognitive limits.
        </>
      ),
      icon: FaStar,
    },
    {
      title: 'Our Approach',
      description: (
        <>
          We prioritize adoption — <strong>AI teams actually use</strong>, not just models.
        </>
      ),
      icon: FaCheckCircle,
    },
  ];

  return (
    <SectionWrapper className={styles.neuroscienceSection} >
      <div className={styles.content}>
        <h2 className={styles.title}>Neuroscience & AI — why it matters</h2>

        <p className={styles.subtext}>
          Understanding how <strong>complex systems learn</strong> — and how people <strong>decide under constraints</strong>.
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
