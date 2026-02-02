import { Divider } from '@/components/Divider';
import { ReactNode } from 'react';

export type Key = 'goal' | 'select_process' | 'workflow' | 'achitecture' | 'launch' | 'kpis' | 'scaling' | 'optimization';

type Card = {
  id: Key;
  title: string | ReactNode;
  content: ReactNode;
};

export const cards: Card[] = [
  {
    id: 'goal',
    title: (
      <>
        <strong>Goal:</strong> Quick measurable impact
      </>
    ),
    content: null,
  },
  {
    id: 'select_process',
    title: 'Select Process',
    content: (
      <ul>
        <li>Back-office</li>
        <li>Routine decisions</li>
        <li>KPI impact</li>
      </ul>
    ),
  },
  {
    id: 'workflow',
    title: 'AI-Workflow',
    content: (
      <>
        <strong>+30—50%</strong> Faster cycles
        <Divider />
        Up to <strong>~40%</strong> Fewer errors
      </>
    ),
  },
  {
    id: 'achitecture',
    title: 'AI-Ready Architecture',
    content: (
      <>
        <strong>2—3x</strong> Faster product delivery
      </>
    ),
  },
  {
    id: 'launch',
    title: 'Production Launch',
    content: <>First working process</>,
  },
  {
    id: 'kpis',
    title: 'Measurable KPIs',
    content: <>3—5 Key indicators</>,
  },
  {
    id: 'scaling',
    title: 'Scaling',
    content: <>Success — Expansion</>,
  },
  {
    id: 'optimization',
    title: 'Optimization',
    content: <>Repeat process</>,
  },
];
