import React from "react";

import styles from "./App.module.scss";
import { NavHeader } from "../../components/NavHeader";

export const App = () => {
  return (
    <div className={styles.App}>
      <NavHeader />
      <h1>HELLO ETACAR</h1>
    </div>
  );
};
