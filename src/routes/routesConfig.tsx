import React from "react";

import { Home } from "../containers/Home";

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
];
