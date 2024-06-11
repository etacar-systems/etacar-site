import React from "react";

import styles from "./Welcome.module.scss";
export const Welcome = () => {
  return (
    <div className={styles.welcome_container}>
      <div className={styles.title}>
        <span>Your Digital</span>
        <span>Product Development</span>
        <span>Partner</span>
      </div>
      <div className={styles.description}>
        Expand your business capabilities with comprehensive world-class
        software development, including thoughtful strategy, UX/UI design
        and on-demand development
      </div>
    </div>
  );
};
