import React from 'react';

import styles from './Welcome.module.scss';
export const Welcome = () => {
  return (
    <div className={styles.welcome_container}>
      <div className={styles.title}>
        <span>Orchestrating Intelligence. Navigating Complexity.</span>
      </div>
      <div className={styles.description}>
        We design and build AI‑native products, agents, and workflows that turn complex data and processes into predictable business outcomes.
      </div>
    </div>
  );
};
