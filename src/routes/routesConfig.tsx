import React from 'react';

import { ABOUT } from './routes'
import { AboutUs } from '../containers/AboutUs/AboutUs';
import { Home } from '../containers/Home';
import { SERVICES } from './routes';
import { ServicesPage } from '../containers/ServicesPage';
import { CaseStudy } from '../containers/CaseStudy';
import { CASE_STUDY } from './routes';


export const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: SERVICES,
    element: <ServicesPage />,
  },
  {
    path: CASE_STUDY,
    element: <CaseStudy />,
  },
  {
    path: ABOUT,
    element: <AboutUs />,
  },
];
