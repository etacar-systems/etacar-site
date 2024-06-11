import React from "react";

import { Mission } from "./components/Mission";
import { Services } from "./components/Services";
import { Welcome } from "./components/Welcome";

export const Home = () => {
  return (
    <div>
      <Welcome />
      <Mission />
      <Services />
    </div>
  );
};
