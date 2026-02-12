import React from 'react';

import { FaBrain } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { GiMaterialsScience } from 'react-icons/gi';
import { HiOutlineUserGroup } from 'react-icons/hi';

import { SectionWrapper } from '../../../components/SectionWrapper/SectionWrapper';
import { Card } from '@/components/Card';
import styles from './BroaderTeam.module.scss';

const BroaderTeam: React.FC = () => {
  const teamMembers = [
    {
      title: 'AI engineers and data scientists',
      description: (
        <>
          Design and implement <strong>AI components</strong> and integrations with existing systems.
        </>
      ),
      icon: FaBrain,
    },
    {
      title: 'Software engineers and architects',
      description: (
        <>
          Ensure solutions fit <strong>existing systems and standards</strong>, preserving architectural integrity.
        </>
      ),
      icon: FaGear,
    },
    {
      title: 'Professional neuroscientists experts',
      description: (
        <>
          Provide insight into <strong>human decision-making</strong>, cognition, and behaviour.
        </>
      ),
      icon: GiMaterialsScience,
    },
    {
      title: 'Product and delivery specialists',
      description: (
        <>
          Align work with <strong>business goals and KPIs</strong> for reliable delivery.
        </>
      ),
      icon: HiOutlineUserGroup,
    },
  ];

  return (
    <SectionWrapper className={styles.broaderTeamSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our broader team</h2>
        <div className={styles.content}>
          <p className={styles.intro}>
            Alongside the leadership team, a <strong>small group of senior specialists</strong> works in
            cross-functional squads.
          </p>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <Card key={index} content={member.description} icon={member.icon} title={member.title} />
            ))}
          </div>

          <p className={styles.conclusion}>
            We keep the team <strong>compact and senior</strong>. For each project, we form a small, cross-functional
            squad working end-to-end — from strategy to scaling.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BroaderTeam;
