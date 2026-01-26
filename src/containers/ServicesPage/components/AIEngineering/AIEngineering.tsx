import React from 'react';

import ServiceDetail from '../ServiceDetail';

export const AIEngineering: React.FC = () => {
  return (
    <ServiceDetail
      id={'al_for_engineering'}
      title={'Al for Engineering'}
      subtitle={
        <>
          <em>Decision continuity for complex engineering systems.</em>
        </>
      }
      text={
        <>
          Engineering breaks down when{' '}
          <strong>design decisions drift, assumptions get lost, and constraints are no longer explicit.</strong> 
          <br></br>
          We apply AI to support <strong>engineering decisions</strong>, preserving intent, trade-offs, and validation
          logic across long-running systems — ensuring execution remains{' '}
          <strong>coherent, explainable, and production-ready</strong>.
        </>
      }
    />
  );
};
