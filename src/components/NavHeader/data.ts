import { ABOUT, CONTACT, HOME, RESULTS, SERVICES, USE_CASES } from '../../routes';

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
    title: 'Use cases',
    route: USE_CASES,
  },
  {
    title: 'Results',
    route: RESULTS,
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
