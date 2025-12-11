import React from 'react';
import FinalCTA from '../../../components/FinalCTA/FinalCTA';
import { SectionWrapper } from '../../../components/SectionWrapper/SectionWrapper';
import styles from './LeadershipTeam.module.scss';

const LeadershipTeam: React.FC = () => {
  return (
    <SectionWrapper className={styles.teamSection} variant='gradient'>
      <div className={styles.container}>
        <h2 className={styles.title}>Meet our team</h2>
        <FinalCTA />
      </div>
    </SectionWrapper>
  );
};

export default LeadershipTeam;
