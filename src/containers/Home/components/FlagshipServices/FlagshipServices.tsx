import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../../../components/Section';
import { Button } from '../../../../components/Button';
import { flagshipServices } from './data';
import styles from './FlagshipServices.module.scss';

export const FlagshipServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <div className={styles.flagshipServices}>
        <h2>Flagship services</h2>
        <div className={styles.cards}>
          {flagshipServices.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button onClick={() => navigate(service.link)} title={'Learn More'} type={'bordered'} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};