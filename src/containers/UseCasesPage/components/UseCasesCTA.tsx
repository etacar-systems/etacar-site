import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../../../components/Button';
import { SectionWrapper } from '../../../components/SectionWrapper';
import styles from './UseCasesCTA.module.scss';

const UseCasesCTA: React.FC = () => {
  const router = useRouter();

  return (
    <SectionWrapper>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Not sure which use case fits your situation?</h2>
          <p className={styles.text}>
            We start with a focused assessment of decision contexts, constraints, and risk profiles — before proposing
            any system or implementation.
          </p>
          <div className={styles.buttonWrapper}>
            <Button
              title='Request a decision assessment'
              onClick={() => router.push('/contact')}
              icon={true}
              type='solid'
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default UseCasesCTA;
