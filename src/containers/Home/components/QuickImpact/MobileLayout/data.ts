import { RelationType } from 'react-archer/lib/types';

import { Key } from '../data';

export const relations: Array<Partial<Record<Key, Array<RelationType>>>> = [
  {
    goal: [
      {
        targetId: 'select_process',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
      },
    ],
  },
  {
    select_process: [
      {
        targetId: 'workflow',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
      },
    ],
  },
  {
    workflow: [
      {
        targetId: 'achitecture',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
      },
    ],
  },
  {
    achitecture: [
      {
        targetId: 'launch',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
      },
    ],
  },
  {
    launch: [
      {
        targetId: 'kpis',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
      },
    ],
  },
  {
    kpis: [
      {
        targetId: 'scaling',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
      },
    ],
  },
  {
    scaling: [
      {
        targetId: 'optimization',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
      },
    ],
  },
  {
    optimization: [],
  },
];
