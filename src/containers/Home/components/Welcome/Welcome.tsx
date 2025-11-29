import styles from './Welcome.module.scss';
export const Welcome = () => {
  return (
    <div className={styles.welcome_container}>
      <div className={styles.title}>
        <span>Orchestrating Intelligence. Navigating Complexity.</span>
      </div>
      <div className={styles.description}>
        <i>
          EtaCar Systems builds AI-native solutions that automate complex processes, augment your teams, and turn
          fragmented data into decisions.
        </i>
      </div>
    </div>
  );
};
