import React from 'react';

import {ABOUT, CASE_STUDY} from './routes';
import { SERVICES } from './routes';
import Home from '../pages/Home';
import {AboutUs} from '../pages/AboutUs';
import {Services} from '../pages/Services';
import {CaseStudy} from '../pages/CaseStudies';


export const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: SERVICES,
    element: <Services />,
  },
  {
    path: ABOUT,
    element: <AboutUs />,
  },
  {
    path: CASE_STUDY,
    element: <CaseStudy />,
  },
];
