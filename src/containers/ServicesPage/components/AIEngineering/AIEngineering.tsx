import React from 'react';

import ServiceDetail from '../ServiceDetail';

export const AIEngineering: React.FC = () => {
  return (
    <ServiceDetail
      id={'al_for_engineering'}
      title={'Al for Engineering'}
      subtitle={'Al applied to engineering decisions, specifications, and execution.'}
      text={
        <>
          This flagship service applies Al across the engineering decision lifecycle - from requirements and system
          design to validation and production execution.{' '}
          <em>Al operates as a disciplined engineering actor, producing traceable</em>.
        </>
      }
    />
  );
};
