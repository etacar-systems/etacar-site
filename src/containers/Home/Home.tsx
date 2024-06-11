import React from "react";

import { Development } from "./components/Development";
import { Mission } from "./components/Mission";
import { Services } from "./components/Services";
import { Welcome } from "./components/Welcome";

export const Home = () => {
  return (
    <div>
      <Welcome />
      <Mission />
      <Development />
      <Services />
    </div>
  );
};
