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
        <em>Role-aware, review-ready decision support where accountability matters.</em>
      </>
    ),
    content: (
      <>
        High-stakes roles operate under pressure, incomplete information, and irreversible impact. We provide{' '}
        <strong>structured decision support</strong> tailored to role-specific responsibility, making assumptions
        explicit and outputs <strong>auditable, explainable, and safe to act upon</strong>.
      </>
    ),
  },
  {
    title: 'Risk-Bounded Decision Modeling',
    subtitle: (
      <>
        <em>Scenario analysis, trade-offs, and explicit uncertainty handling for high-stakes decisions.</em>
      </>
    ),
    content: (
      <>
        Most failures stem from decisions made as if uncertainty did not exist. We model{' '}
        <strong>scenarios, trade-offs, and confidence boundaries</strong>, ensuring decisions are made within{' '}
        <strong>clearly defined risk limits</strong> and degrade safely as inputs change.
      </>
    ),
  },
  {
    title: 'Decision-Aware Knowledge Systems',
    subtitle: (
      <>
        <em>Institutional memory that preserves decision context, constraints, and rationale over time.</em>
      </>
    ),
    content: (
      <>
        Knowledge loses value when separated from the decisions it informed. We build{' '}
        <strong>decision-aware knowledge systems</strong> that retain assumptions, constraints, and prior reasoning —
        ensuring future decisions remain <strong>consistent, grounded, and aligned with original intent</strong>.
      </>
    ),
  },
];
