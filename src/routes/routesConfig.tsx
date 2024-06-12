import React from "react";

import { Home } from "../containers/Home";
import { ServicesPage } from "../containers/ServicesPage";
import  { CASE_STUDY } from './routes';

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <ServicesPage/>,
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
