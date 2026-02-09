import { RelationType } from 'react-archer/lib/types';

import { Key } from '../data';

export const relations: Array<Partial<Record<Key, Array<RelationType>>>> = [
  {
    goal: [
      {
        targetId: 'select_process',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
        style: {
          lineStyle: 'angle',
        },
      },
    ],
  },
  {
    select_process: [
      {
        targetId: 'workflow',
        targetAnchor: 'left',
        sourceAnchor: 'right',
      },
      {
        targetId: 'support',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
        style: {
          endMarker: false,
          lineStyle: 'angle',
        },
      },
    ],
    workflow: [
      {
        targetId: 'achitecture',
        targetAnchor: 'left',
        sourceAnchor: 'right',
      },
    ],
    achitecture: [
      {
        targetId: 'kpis',
        targetAnchor: 'left',
        sourceAnchor: 'right',
      },
    ],
    kpis: [
      {
        targetId: 'optimization',
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
      },
    ],
  },
  {
    support: [
      {
        targetId: 'scaling',
        targetAnchor: 'left',
        sourceAnchor: 'right',
      },
    ],
    scaling: [
      {
        targetId: 'launch',
        targetAnchor: 'left',
        sourceAnchor: 'right',
      },
    ],
    launch: [
      {
        targetId: 'optimization',
        targetAnchor: 'left',
        sourceAnchor: 'right',
      },
    ],
    optimization: [],
  },
];
