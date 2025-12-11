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
          <h2 className={styles.title}>Let’s map this to your reality</h2>
          <p className={styles.text}>
            If you recognize your own challenges in these examples, we start with a 60–90 minute workshop: mapping your
            current processes, identifying 2–3 high-impact AI initiatives and agreeing on how to measure success
          </p>
          <div className={styles.buttonWrapper}>
            <Button
              title='Book an AI use case workshop'
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
