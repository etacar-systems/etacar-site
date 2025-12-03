import React from 'react';

import { ABOUT, CASE_STUDY, CONTACT, NOT_FOUND_PAGE, PRIVACY_POLICY, SERVICES, TERMS_OF_USE, RESULTS, USE_CASES } from './routes';
import { AboutUs } from '../containers/AboutUs/AboutUs';
import { CaseStudy } from '../containers/CaseStudy';
import { ContactUs } from '../containers/ContactUs';
import { Home } from '../containers/Home';
import { ServicesPage } from '../containers/ServicesPage';
import { ResultsPage } from '../containers/ResultsPage/ResultsPage';
import UseCasesPage from '../containers/UseCasesPage';
import { TermsOfUse } from '../containers/TermsOfUse/TermsOfUse';
import { PrivacyPolicy } from '../containers/PrivacyPolicy';
import { NotFoundPage } from '../containers/NotFoundPage';

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
    path: RESULTS,
    element: <ResultsPage />,
  },
  {
    path: USE_CASES,
    element: <UseCasesPage />,
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
  {
    path: PRIVACY_POLICY,
    element: <PrivacyPolicy />,
  },
  {
    path: NOT_FOUND_PAGE,
    element: <NotFoundPage />,
  },
];
