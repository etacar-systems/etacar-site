import { ReactNode } from 'react';

type Card = {
  title: string;
  subtitle: ReactNode;
  content: ReactNode;
};


export const cards: Array<Card> = [
  {
    title: 'AI for Decision Support in Critical Roles',
    subtitle: (
      <>
        <strong>Role-aware support</strong> where accountability matters.
      </>
    ),
    content: (
      <>
        <strong>High-stakes roles</strong> operate under pressure.<br />
        We deliver <strong>structured, auditable support</strong>.
      </>
    ),
  },
  {
    title: 'Risk-Bounded Decision Modeling',
    subtitle: (
      <>
        <strong>Explicit uncertainty</strong> for high-stakes decisions.
      </>
    ),
    content: (
      <>
        <strong>Ignored uncertainty</strong> drives failure.<br />
        We model <strong>scenarios and risk boundaries</strong> for safe decisions.
      </>
    ),
  },
  {
    title: 'Decision-Aware Knowledge Systems',
    subtitle: (
      <>
        <strong>Decision context</strong> preserved over time.
      </>
    ),
    content: (
      <>
        Knowledge loses value when <strong>detached from decisions</strong>.<br />
        We build <strong>decision-aware systems</strong> for consistent outcomes.
      </>
    ),
  },
];
