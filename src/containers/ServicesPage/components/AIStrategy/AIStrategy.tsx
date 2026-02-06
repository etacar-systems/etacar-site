import React from 'react';

import ServiceDetail from '../ServiceDetail';

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
