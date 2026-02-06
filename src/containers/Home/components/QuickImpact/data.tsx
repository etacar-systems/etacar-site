import { Divider } from '@/components/Divider';
import { ReactNode } from 'react';

export type Key =
  | 'goal'
  | 'select_process'
  | 'workflow'
  | 'achitecture'
  | 'launch'
  | 'kpis'
  | 'scaling'
  | 'optimization';

type Card = {
  id: Key;
  background?: string;
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
      <ul style={{ paddingLeft: 24 }}>
        <li>Back-office</li>
        <li>Routine decisions</li>
        <li>KPI impact</li>
      </ul>
    ),
  },
  {
    id: 'workflow',
    background: 'var(--color-primary)',
    title: 'AI-Workflow',
    content: (
      <div style={{ minWidth: 'max-content', maxWidth: '100%' }}>
        <strong>30–50% faster decision cycles</strong>
        <br />
        <strong>Up to 40% fewer production errors</strong>
      </div>
    ),
  },
  {
    id: 'achitecture',
    title: 'AI-Ready Architecture',
    content: (
      <>
        <strong>2—3x</strong> faster product delivery
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
    content: <div style={{ minWidth: 204 }} >3—5 key indicators</div>,
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
