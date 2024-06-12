import React from "react";

import { CaseStudies } from "./components/CaseStudies";
import { Development } from "./components/Development";
import { Industries } from "./components/Industries";
import { Mission } from "./components/Mission";
import { Services } from "./components/Services";
import { Welcome } from "./components/Welcome";

export const Home = () => {
  return (
    <div>
      <Welcome />
      <Mission />
      <Development />
      <CaseStudies />
      <Services />
      <Industries />
    </div>
  );
};
