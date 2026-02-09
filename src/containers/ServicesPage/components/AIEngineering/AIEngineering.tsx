import React from 'react';

import ServiceDetail from '../ServiceDetail';
import { Divider } from '@/components/Divider';
import { List } from '@/components/List';

const options = [
  'Production-ready AI architecture aligned with existing systems',
  'Clear ownership and lifecycle management',
  'Monitoring and quality controls for AI behavior in production',
  'Reduced operational and technical risk',
];

export const AIEngineering: React.FC = () => {
  return (
    <ServiceDetail
      id={'al_for_engineering'}
      title={'AI for Engineering'}
      subtitle={
        <>
          <strong>Decision continuity</strong> for complex systems.
        </>
      }
      content={
        <>
          <Divider title={'Engineering outcomes'} />
          <List options={options} />
        </>
      }
      text={
        <>
          This service is designed for engineering teams who need AI systems that work reliably in production — not
          demos or isolated experiments. We apply AI to preserve <strong>intent and trade-offs</strong>, keeping execution{' '}
          <strong>coherent and production-ready</strong> over time.
        </>
      }
    />
  );
};
