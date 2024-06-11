import React from "react";
import { Mission } from "./components/Mission";
import { Welcome } from "./components/Welcome";

export const Home = () => {
  return (
    <div>
      <Welcome />
      <Mission />
    </div>
  );
};
