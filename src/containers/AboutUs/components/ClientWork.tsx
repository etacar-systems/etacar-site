import React from 'react';

import { HiOutlineUserGroup } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { GrClearOption } from "react-icons/gr";
import { PiLightningFill } from "react-icons/pi";

import { SectionWrapper } from '../../../components/SectionWrapper/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './ClientWork.module.scss';

const ClientWork: React.FC = () => {
  const principles = [
    {
      title: 'Partnership Approach',
      description: (
        <>
          We work as <strong>long-term partners</strong>, grounded in your systems, risks, and culture.
        </>
      ),
      icon: HiOutlineUserGroup,
    },
    {
      title: 'Focused Initiatives',
      description: (
        <>
          We focus on <strong>high-impact initiatives</strong>, not AI everywhere.
        </>
      ),
      icon: FaStar,
    },
    {
      title: 'Clear Alignment',
      description: (
        <>
          We align on <strong>KPIs and decision criteria</strong> before building.
        </>
      ),
      icon: GrClearOption,
    },
    {
      title: 'Sustainable Design',
      description: (
        <>
          We design for <strong>long-term operation</strong>, with clear ownership and governance.
        </>
      ),
      icon: PiLightningFill,
    },
  ];

  return (
    <SectionWrapper className={styles.clientWorkSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>How we work with clients</h2>
        <div className={styles.content}>
          <p className={styles.intro}>
            We see every engagement as a <strong>partnership</strong>, not a one-off project:
          </p>

          <div className={styles.principlesGrid}>
            {principles.map((principle, index) => (
              <Card key={index} content={principle.description} icon={principle.icon} title={principle.title} />
            ))}
          </div>

          <p className={styles.conclusion}>
            This is how we ensure our work is <strong>meaningful for your organization</strong> and safe for{' '}
            <strong>business-critical operations</strong>.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ClientWork;
