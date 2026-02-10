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
        <strong>High-stakes roles</strong> operate under pressure and uncertainty.<br />
        We provide <strong>structured decision support</strong> with explicit, auditable outputs.
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
        We model <strong>scenarios and trade-offs</strong> with clear <strong>risk boundaries</strong> for safe decision degradation.
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
        We build <strong>decision-aware systems</strong> that preserve assumptions and constraints for consistent decisions.
      </>
    ),
  },
];
