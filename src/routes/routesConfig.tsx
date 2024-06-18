import React from 'react';

import {ABOUT, CASE_STUDY, SERVICES} from './routes';
import {Home} from '../pages/Home';
import {Services} from '../pages/Services';
import {CaseStudies} from '../pages/CaseStudies';
import {AboutUs} from '../pages/AboutUs';


export const routesConfig = [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: SERVICES,
    element: <Services/>,
  },
  {
    path: CASE_STUDY,
    element: <CaseStudies/>,
  },
  {
    path: ABOUT,
    element: <AboutUs/>,
  },
];
