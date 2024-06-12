import React from "react";

import { Home } from "../containers/Home";
import  { CASE_STUDY } from './routes';

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: CASE_STUDY,
    element: <div>case study</div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
];
