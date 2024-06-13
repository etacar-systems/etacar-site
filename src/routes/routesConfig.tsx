import React from 'react';

import { Home } from '../containers/Home';
import { ServicesPage } from '../containers/ServicesPage';
import { CaseStudy } from '../containers/CaseStudy';
import { CASE_STUDY } from './routes';
import { AboutUs } from '../containers/AboutUs';

export const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: CASE_STUDY,
    element: <CaseStudy />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
];
