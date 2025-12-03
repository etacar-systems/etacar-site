import { ABOUT, CASE_STUDY, CONTACT, HOME, SERVICES, RESULTS, USE_CASES } from '../../routes';

interface NavItem {
  title: string;
  route: string;
}

export const navItems: NavItem[] = [
  {
    title: 'Home',
    route: HOME,
  },
  {
    title: 'Services',
    route: SERVICES,
  },
  {
    title: 'Results',
    route: RESULTS,
  },
  {
    title: 'Use cases',
    route: USE_CASES,
  },
  {
    title: 'Case study',
    route: CASE_STUDY,
  },
  {
    title: 'About us',
    route: ABOUT,
  },
  {
    title: 'Contact us',
    route: CONTACT,
  },
];
