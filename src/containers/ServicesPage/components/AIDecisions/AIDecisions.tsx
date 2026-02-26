import React from 'react';

import ServiceDetail from '../ServiceDetail';
import { Divider } from '@/components/Divider';
import { List } from '@/components/List';

const options = ['Explicit risk model', 'Escalation and human oversight design', 'Audit-ready documentation'];

export const AIDecisions: React.FC = () => {
  return (
    <ServiceDetail
      id={'al_for_decisions_operations'}
      title={'Governance & Risk Frameworks'}
      subtitle={<>Embedding compliance and auditability into system logic — not as an afterthought.</>}
      content={
        <>
          <Divider title={'Deliverables'} />
          <List options={options} />
        </>
      }
    />
  );
};
