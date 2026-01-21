import React from 'react';

import ServiceDetail from '../ServiceDetail';

export const AIEngineering: React.FC = () => {
  return (
    <ServiceDetail
      id={'al_for_engineering'}
      title={'Al for Engineering'}
      subtitle={
        <>
          Applying AI to <strong>engineering decisions</strong>, not just delivery speed.
        </>
      }
      text={
        <>
          Engineering teams struggle with <strong>decision consistency and traceability</strong> across complex systems
          and long-running initiatives.<br></br>
          We apply AI across the engineering lifecycle to support{' '}
          <strong>specifications, design trade-offs, and validation</strong>, ensuring disciplined execution and
          production-ready outcomes.
        </>
      }
    />
  );
};
