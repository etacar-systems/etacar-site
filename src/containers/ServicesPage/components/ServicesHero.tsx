import React from 'react';
import styles from './ServicesHero.module.scss';

export const ServicesHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Services</h1>
        
        <p className={styles.subheadline}>
          We design, build and operate AI solutions for business-critical operations — 
          from strategy and architecture to copilots, automation and governance.
        </p>
        
        <p className={styles.intro}>
          Below are our flagship services. Each is designed to solve a specific class of problems 
          for C-level, operations, IT and risk leaders — with clear KPIs and ownership.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
