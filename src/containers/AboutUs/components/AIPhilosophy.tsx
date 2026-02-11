import React from 'react';

import { MdIntegrationInstructions } from "react-icons/md";
import { IoShieldCheckmark, IoPerson } from "react-icons/io5";
import { PiTreeStructureFill } from 'react-icons/pi';
import { GrClearOption } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";

import { SectionWrapper } from '../../../components/SectionWrapper/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './AIPhilosophy.module.scss';

const AIPhilosophy: React.FC = () => {
  const requirements = [
    {
      title: 'Integration',
      description: (
        <>
          Fit into <strong>existing systems and workflows</strong> without disruption.
        </>
      ),
      icon: MdIntegrationInstructions,
    },
    {
      title: 'Risk & Compliance',
      description: (
        <>
          Meet <strong>regulatory, security, and audit</strong> requirements from day one.
        </>
      ),
      icon: IoShieldCheckmark,
    },
    {
      title: 'Human-centered',
      description: (
        <>
          Support <strong>human decision-making</strong> with explainable, trusted AI.
        </>
      ),
      icon: IoPerson,
    },
  ];

  const approaches = [
    {
      title: 'Workflow-first',
      description: (
        <>
          Design around <strong>real workflows and decisions</strong> to deliver clear outcomes.
        </>
      ),
      icon: PiTreeStructureFill,
    },
    {
      title: 'Clear Roles',
      description: (
        <>
          Define <strong>clear responsibilities</strong> so AI and people work predictably.
        </>
      ),
      icon: GrClearOption,
    },
    {
      title: 'Measure & Govern',
      description: (
        <>
          Set <strong>KPIs and governance</strong> early to track value and accountability.
        </>
      ),
      icon: SiGoogleanalytics,
    },
  ];

  return (
    <SectionWrapper className={styles.philosophySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>How we think about AI in organizations</h2>
        <p className={styles.subtitle}>
          We do <strong>not</strong> treat AI as a layer you simply add on top.
        </p>
        <div className={styles.content}>
          <p className={styles.intro}>We see AI as an organizational capability that must:</p>

          <div className={styles.requirementsList}>
            {requirements.map((item, index) => (
              <Card key={index} content={item.description} icon={item.icon} title={item.title} />
            ))}
          </div>

          <p className={styles.intro}>That’s why we:</p>

          <div className={styles.approachesList}>
            {approaches.map((item, index) => (
              <Card key={index} content={item.description} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AIPhilosophy;
