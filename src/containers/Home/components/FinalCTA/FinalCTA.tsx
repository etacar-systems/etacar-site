import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../../../components/Section';
import { Button } from '../../../../components/Button';
import styles from './FinalCTA.module.scss';

export const FinalCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <div className={styles.finalCTA}>
        <h2>Let’s talk about your business‑critical processes</h2>
        <p>
          We won’t sell you “AI for everything”. We will help you choose 1–3 initiatives that really matter, define how to measure success, and get from idea to production.
        </p>
        <div className={styles.buttons}>
          <Button onClick={() => navigate('/contact')} title={'Book a discovery call'} type={'solid'} />
          <Button onClick={() => navigate('/results')} title={'Send us your use case'} type={'bordered'} />
        </div>
      </div>
    </Section>
  );
};