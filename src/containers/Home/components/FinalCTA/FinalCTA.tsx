import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../../../../components/Button';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { CONTACT } from '../../../../routes';
import styles from './FinalCTA.module.scss';

export const FinalCTA: React.FC = () => {
  const router = useRouter();

  return (
    <SectionWrapper variant='light'>
      <div className={styles.content}>
        <h2 className={styles.title}>Let's talk about your business-critical processes</h2>

        <p className={styles.text}>
          We don’t push “AI everywhere”. We help you choose 1–3 initiatives that truly matter, define how to measure
          success, and take them from idea to production.
        </p>
        <p className={styles.text}>
          Starting with a focused 30-minute conversation about your most critical processes.
        </p>

        <div className={styles.buttons}>
          <Button type='solid' title='Book a discovery call' onClick={() => router.push(CONTACT)} />
          <Button type='bordered' title='Send us your use case' onClick={() => router.push(CONTACT)} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FinalCTA;
