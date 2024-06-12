import React from "react";

import { Development } from "./components/Development";
import { Mission } from "./components/Mission";
import { Services } from "./components/Services";
import { Welcome } from "./components/Welcome";
import { CaseStudies } from "./components/CaseStudies";

export const Home = () => {
  return (
    <div>
      <Welcome />
      <Mission />
      <Development />
      <CaseStudies />
      <Services />
    </div>
  );
};
