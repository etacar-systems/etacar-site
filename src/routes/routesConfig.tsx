import React from 'react';

import { ABOUT, CASE_STUDY, CONTACT, SERVICES, TERMS_OF_USE } from './routes';
import { AboutUs } from '../containers/AboutUs/AboutUs';
import { CaseStudy } from '../containers/CaseStudy';
import { ContactUs } from '../containers/ContactUs';
import { Home } from '../containers/Home';
import { ServicesPage } from '../containers/ServicesPage';
import { TermsOfUse } from '../containers/TermsOfUse/TermsOfUse';

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
  {
    path: CONTACT,
    element: <ContactUs />,
  },
  {
    path: TERMS_OF_USE,
    element: <TermsOfUse />,
  },
];
