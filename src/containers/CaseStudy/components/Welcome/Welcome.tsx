import styles from './Welcome.module.scss';
export const Welcome = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>We create effective software for enterprises and startups</div>
          <div className={styles.description}>
            We engage in numerous projects but due to NDAs we are unable to publish details. References can be obtained
            upon request.
          </div>
        </div>
      </div>
    </div>
  );
};
