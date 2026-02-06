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
          Fits into <strong>existing systems and workflows</strong> without unnecessary disruption.
        </>
      ),
      icon: MdIntegrationInstructions,
    },
    {
      title: 'Risk & Compliance',
      description: (
        <>
          Designed to meet <strong>regulatory, security, and audit</strong> requirements from day one.
        </>
      ),
      icon: IoShieldCheckmark,
    },
    {
      title: 'Human-centered',
      description: (
        <>
          Supports <strong>human decision-making</strong> with explainable, trustworthy AI.
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
          We design around <strong>real workflows and decisions</strong>, selecting models that support clear outcomes.
        </>
      ),
      icon: PiTreeStructureFill,
    },
    {
      title: 'Clear Roles',
      description: (
        <>
          We define <strong>clear responsibilities</strong> so AI, people, and systems work predictably together.
        </>
      ),
      icon: GrClearOption,
    },
    {
      title: 'Measure & Govern',
      description: (
        <>
          We set <strong>KPIs and governance</strong> early to track value and ensure accountability.
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
          We do <strong>not</strong> treat AI as a magic layer you can
          sprinkle on top of everything.
        </p>
        <div className={styles.content}>
          <p className={styles.intro}>We see it as an additional capability inside your organization that must:</p>

          <div className={styles.requirementsList}>
            {requirements.map((item, index) => (
              <Card key={index} content={item.description} icon={item.icon} title={item.title} />
            ))}
          </div>

          <p className={styles.intro}>That is why we:</p>

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
