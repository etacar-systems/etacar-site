import React from "react";

import styles from "./App.module.scss";
import { NavHeader } from "../../components/NavHeader";
import { Home } from "../Home";

export const App = () => {
  return (
    <div className={styles.App}>
      <NavHeader />
      <Home />
    </div>
  );
};
