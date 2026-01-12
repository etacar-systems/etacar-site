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
        <h2 className={styles.title}>
          Discuss your <strong>business-critical processes</strong>
        </h2>

        <p className={styles.text}>
          We don’t pursue <em>“AI everywhere.”</em> We help you focus on
          <strong> 1–3 initiatives</strong>, define <strong>measurable success</strong>,
          and move them into <em>production</em>.
        </p>

        <p className={styles.text}>
          It starts with a <strong>focused 30-minute conversation</strong>.
        </p>

        <div className={styles.buttons}>
          <Button
            type='solid'
            title='Schedule a focused discussion'
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
