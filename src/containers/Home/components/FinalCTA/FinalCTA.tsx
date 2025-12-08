import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../../../../components/Button';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { CONTACT } from '../../../../routes';
import styles from './FinalCTA.module.scss';

export const FinalCTA: React.FC = () => {
  const router = useRouter();

  return (
    <SectionWrapper variant='gradient'>
      <div className={styles.content}>
        <h2 className={styles.title}>Let's talk about your business-critical processes</h2>

        <p className={styles.text}>
          We won't sell you "AI for everything". We will help you choose 1–3 initiatives that really matter, define how
          to measure success, and get from idea to production.
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
