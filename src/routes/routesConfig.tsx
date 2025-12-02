import { AboutUs } from '../containers/AboutUs/AboutUs';
import { CaseStudy } from '../containers/CaseStudy';
import { ContactUs } from '../containers/ContactUs';
import { Home } from '../containers/Home';
import { NotFoundPage } from '../containers/NotFoundPage';
import { PrivacyPolicy } from '../containers/PrivacyPolicy';
import { Results } from '../containers/Results';
import { ServicesPage } from '../containers/ServicesPage';
import { TermsOfUse } from '../containers/TermsOfUse/TermsOfUse';
import { ABOUT, CASE_STUDY, CONTACT, NOT_FOUND_PAGE, PRIVACY_POLICY, RESULTS, SERVICES, TERMS_OF_USE } from './routes';

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
    element: <Results />,
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
