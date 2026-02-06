import React from 'react';

import ServiceDetail from '../ServiceDetail';

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
      text={
        <>
          Engineering breaks when <strong>decisions drift</strong> and assumptions are lost.
          <br />
          We apply AI to preserve <strong>intent and trade-offs</strong>, keeping execution{' '}
          <strong>coherent and production-ready</strong> over time.
        </>
      }
    />
  );
};
