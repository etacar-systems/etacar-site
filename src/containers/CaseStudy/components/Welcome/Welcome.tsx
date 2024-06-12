import React from "react";

import styles from "./Welcome.module.scss";
export const Welcome = () => {
  return (
    <div className={styles.welcome_container}>
      <div className={styles.title}>
        We create
        <span /> effective
        <span /> software
        <span /> for enterprises
        <span /> and startups
      </div>
      <div className={styles.description}>
        We engage in numerous projects but due to NDAs we are unable to publish
        details.<span /> References can be obtained upon request.
      </div>
    </div>
  );
};
