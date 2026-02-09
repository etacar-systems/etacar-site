import React from 'react';

import ServiceDetail from '../ServiceDetail';
import { Divider } from '@/components/Divider';
import { List } from '@/components/List';

const options = [
  'Clear AI roadmap tied to real decision processes',
  'Target architecture and integration plan for production-grade AI systems',
  'Defined risks, constraints, and governance approach from the start',
];

export const AIStrategy: React.FC = () => {
  return (
    <ServiceDetail
      id={'ai_strategy_architecture'}
      title={'AI Strategy & Architecture'}
      subtitle={
        <>
          <strong>Decision architecture</strong> for high-stakes AI systems.
        </>
      }
      content={
        <>
          <Divider title={'Typical outcomes'} />
          <List options={options} />
        </>
      }
      text={
        <>
          We define <strong>how decisions are made</strong>, not just what systems are built — making{' '}
          <strong>assumptions explicit</strong>, managing <strong>uncertainty</strong>, and ensuring{' '}
          <strong>long-term control</strong>.
        </>
      }
    />
  );
};
