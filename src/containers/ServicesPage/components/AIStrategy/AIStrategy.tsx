import React from 'react';

import ServiceDetail from '../ServiceDetail';

export const AIStrategy: React.FC = () => {
  return (
    <ServiceDetail
      id={'ai_strategy_architecture'}
      title={'AI Strategy & Architecture'}
      subtitle={
        <>
          Designing <strong>decision-centric AI architectures</strong> for long-term reliability.
        </>
      }
      text={
        <>
          AI initiatives often fail due to <strong>fragmented architectures</strong> and unclear constraints. <br></br>
          We design AI systems around <strong>explicit decisions and trade-offs</strong>, ensuring they remain coherent,
          governable, and adaptable over time.
        </>
      }
    />
  );
};
