import React from 'react';

import ServiceDetail from '../ServiceDetail';
import { Divider } from '@/components/Divider';
import { List } from '@/components/List';

const options = [
  'Modular system architecture',
  'Risk-aware orchestration layer',
  'Integration into enterprise infrastructure',
];

export const AIEngineering: React.FC = () => {
  return (
    <ServiceDetail
      id={'al_for_engineering'}
      title={'Controlled AI System Engineering'}
      subtitle={
        <>
          Building production-grade AI systems with traceable logic and measurable accountability.
        </>
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
