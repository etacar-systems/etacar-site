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
        High-stakes roles operate under <strong>pressure and uncertainty</strong>.<br />
        We provide <strong>structured decision support</strong> aligned to role responsibility, making assumptions{' '}
        <strong>explicit</strong> and outputs <strong>auditable and explainable</strong>.
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
        Failures occur when <strong>uncertainty is ignored</strong>.<br />
        We model <strong>scenarios and trade-offs</strong>, defining clear <strong>risk boundaries</strong> so decisions
        degrade safely as conditions change.
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
        We build <strong>decision-aware systems</strong> that retain assumptions and constraints, keeping future
        decisions <strong>consistent and grounded</strong>.
      </>
    ),
  },
];
