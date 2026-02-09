import React from 'react';

import { RiTeamFill } from 'react-icons/ri';
import { FaBrain } from 'react-icons/fa';
import { IoBusiness } from 'react-icons/io5';

import { SectionWrapper } from '../../../components/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './WhoWeAre.module.scss';

const WhoWeAre: React.FC = () => {
  const teamPoints = [
    {
      title: 'Our Team',
      description: (
        <>
          A focused team of <strong>senior AI engineers and product leaders</strong> building real-world intelligent
          systems.
        </>
      ),
      icon: RiTeamFill,
    },
    {
      title: 'Our Expertise',
      description: (
        <>
          Deep experience in <strong>AI products</strong>, organizational reality, and modern AI infrastructure.
        </>
      ),
      icon: FaBrain,
    },
    {
      title: 'Our Focus',
      description: (
        <>
          We work on <strong>business-critical workflows</strong> that impact revenue, risk, and operations.
        </>
      ),
      icon: IoBusiness,
    },
  ];

  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>Who we are today</h2>

        <p className={styles.subtext}>A focused team of senior AI engineers, architects and product leaders.</p>

        <div className={styles.grid}>
          {teamPoints.map((point, index) => (
            <Card key={index} content={point.description} icon={point.icon} title={point.title} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhoWeAre;
