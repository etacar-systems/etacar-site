import styles from './Development.module.scss';

import { SectionWrapper } from '../../../../components/SectionWrapper';
// import { MobileLayout } from '../QuickImpact/MobileLayout';

export const Development = () => {
  return (
    <SectionWrapper className={styles.content}>
      <h2 className={styles.title}>Achieving Quick Impact with AI</h2>
      <p className={styles.intro}>Measured in weeks, not years</p>
      {/* <MobileLayout /> */}
    </SectionWrapper>
  );
};
