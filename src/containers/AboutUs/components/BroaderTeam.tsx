import React from 'react';

import { FaBrain } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { GiMaterialsScience } from 'react-icons/gi';
import { HiOutlineUserGroup } from 'react-icons/hi';

import { SectionWrapper } from '../../../components/SectionWrapper/SectionWrapper';
import { Card } from '@/components/Card';
import { List } from '@/components/List';
import styles from './BroaderTeam.module.scss';

const BroaderTeam: React.FC = () => {
  const teamMembers = [
    {
      title: 'AI Engineers & Data Scientists',
      description: 'Production AI architecture. Structured decision logic. Controlled deployment',
      icon: FaBrain,
    },
    {
      title: 'Software Engineers & Architects',
      description: 'System integrity. Resilient integration. Long-term maintainability',
      icon: FaGear,
    },
    {
      title: 'Neuroscience Experts',
      description: 'Cognitive rigor. Explicit accountability. Defensible reasoning',
      icon: GiMaterialsScience,
    },
    {
      title: 'Product & Delivery Leads',
      description: 'Executive alignment. Measurable outcomes. Governance-driven execution',
      icon: HiOutlineUserGroup,
    },
  ];

  return (
    <SectionWrapper className={styles.broaderTeamSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our broader team</h2>
        <div className={styles.content}>
          <p className={styles.intro}>
            Senior cross-functional unit for mission-critical AI.
          </p>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                content={
                  <div className={styles.list}>
                    <List options={member.description.split('.')} />
                  </div>
                }
                icon={member.icon}
                title={member.title}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BroaderTeam;
