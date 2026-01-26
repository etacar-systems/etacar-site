import React from 'react';

import ServiceDetail from '../ServiceDetail';

export const AIStrategy: React.FC = () => {
  return (
    <ServiceDetail
      id={'ai_strategy_architecture'}
      title={'AI Strategy & Architecture'}
      subtitle={<>Decision architecture for high-stakes AI systems.</>}
      text={
        <>
          We help organizations define <strong>how decisions are made</strong>, not just what systems are built — making
          assumptions explicit, managing uncertainty, and ensuring long-term coherence and control.
        </>
      }
    />
  );
};
