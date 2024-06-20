import { ABOUT, CASE_STUDY, CONTACT, HOME, SERVICES } from '../../routes';

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
