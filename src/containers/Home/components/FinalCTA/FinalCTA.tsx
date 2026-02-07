import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../../../../components/Button';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { CONTACT } from '../../../../routes';
import styles from './FinalCTA.module.scss';

export const FinalCTA: React.FC = () => {
  const router = useRouter();

  return (
    <SectionWrapper>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Discuss your business-critical processes
        </h2>

        <p className={styles.text}>
          We don’t pursue “AI everywhere”. We help you focus on
          <strong> 1–3 initiatives</strong>, define <strong>measurable success</strong>,
          and move them into production.
        </p>

        <p className={styles.text}>
          Starts with a focused <strong>30-minute conversation</strong>.
        </p>

        <div className={styles.buttons}>
          <Button
            type='solid'
            title='Schedule a discussion'
            onClick={() => router.push(CONTACT)}
          />
          <Button
            type='bordered'
            title='Share your use case'
            onClick={() => router.push(CONTACT)}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FinalCTA;
