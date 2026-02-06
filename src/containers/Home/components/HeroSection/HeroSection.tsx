import React from 'react';

import { FaGear } from 'react-icons/fa6';
import { FaBrain } from 'react-icons/fa';
import { IoShieldCheckmark } from 'react-icons/io5';

import { useRouter } from 'next/navigation';
import { Button } from '../../../../components/Button';
import { FadeCard } from '../../../../components/FadeCard';
import { SectionWrapper } from '../../../../components/SectionWrapper';
import { CONTACT, RESULTS } from '../../../../routes';
import { IconConfig } from '@/config/IconConfig';
import styles from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <SectionWrapper>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <strong>Decisions need infrastructure</strong> — not an assistant.
          </h1>
          <h2 className={styles.subtitle}>
            We build <strong>cognitive infrastructure</strong> for reliable decisions under <strong>risk</strong>.
          </h2>

          <div className={styles.cta}>
            <div className={styles.ctaButtons}>
              <Button type='solid' title='See Value in 30 Minutes' onClick={() => router.push(CONTACT)} />
              <Button type='bordered' title='See Real Results' onClick={() => router.push(RESULTS)} />
            </div>
          </div>

          <div className={styles.quickFacts}>
            <FadeCard className={styles.fact}>
              <div className={styles.icon}>
                <FaBrain {...IconConfig} />
              </div>
              <span>
                <strong>20+ years</strong> building AI-driven products
              </span>
            </FadeCard>

            <FadeCard className={styles.fact}>
              <div className={styles.icon}>
                <FaGear {...IconConfig} />
              </div>
              <span>
                <strong>From strategy to production</strong> — architecture, implementation, governance
              </span>
            </FadeCard>

            <FadeCard className={styles.fact}>
              <div className={styles.icon}>
                <IoShieldCheckmark {...IconConfig} />
              </div>
              <span>
                Designed for <strong>regulated and high-stakes environments</strong>
              </span>
            </FadeCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
