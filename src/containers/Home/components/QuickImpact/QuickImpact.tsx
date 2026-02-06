import { ReactElement } from 'react';
import styles from './QuickImpact.module.scss';

import { SectionWrapper } from '@/components/SectionWrapper';
import { useViewportSize } from '@/hooks/useViewportSize';
import { MobileLayout } from './MobileLayout';
import { DesktopLayout } from './DesktopLayout';

export const QuickImpact = (): ReactElement => {
  const { width } = useViewportSize();

  return (
    <SectionWrapper className={styles.container}>
      <h2 className={styles.title}>Achieving Quick Impact with AI</h2>
      <p className={styles.subtext}>Measured in weeks, not years</p>
      {width > 1145 ? <DesktopLayout /> : <MobileLayout />}
    </SectionWrapper>
  );
};
