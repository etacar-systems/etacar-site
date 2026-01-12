import React from 'react';
import ServiceDetail from './ServiceDetail';

export const DocumentIntelligence: React.FC = () => {
  return (
    <ServiceDetail
      id='knowledge-intelligence'
      title='Process-Aware Knowledge AI'
      oneLiner={
        <>
          Turn enterprise knowledge into <strong>trusted, process-aware answers</strong>
          teams can <em>act on immediately</em>.
        </>
      }
      bestFor={
        <>
          <strong>Teams and leaders</strong> working with large volumes of
          <strong> policies, contracts, and technical documentation</strong>.
        </>
      }
      problemWeSolve={
        <>
        <strong>Enterprise knowledge is disconnected</strong> from real workflows — leaving answers slow, inconsistent, and hard to trace.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>Process-aware knowledge models</strong> that link documents, data,
          and decisions
        </>,
        <>
          <strong>Context-scoped answers</strong> with references and traceability
        </>,
        <>
          <strong>Comparative reasoning</strong> across documents within a shared
          process context
        </>,
      ]}
      exampleKPIs={[
        'Up to 70% faster access to critical information',
        '30–60% less manual document review',
        '25–50% fewer documentation and compliance errors',
      ]}
    />
  );
};

export default DocumentIntelligence;
