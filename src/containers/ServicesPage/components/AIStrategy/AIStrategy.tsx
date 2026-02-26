import React from 'react';

import ServiceDetail from '../ServiceDetail';
import { Divider } from '@/components/Divider';
import { List } from '@/components/List';

const options = [
  'Decision map tied to real workflows',
  'Production architecture blueprint',
  'Governance model embedded from day one',
];

export const AIStrategy: React.FC = () => {
  return (
    <ServiceDetail
      id={'ai_strategy_architecture'}
      title={'AI Strategy & Decision Architecture'}
      subtitle={
        <>Designing decision logic aligned with business objectives, risk tolerance, and operational constraints.</>
      }
      content={
        <>
          <Divider title={'Deliverables'} />
          <List options={options} />
        </>
      }
    />
  );
};
