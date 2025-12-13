import React from 'react';
import ServiceDetail from './ServiceDetail';

export const ProcessAutomation: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-orchestration'
      title='AI Process Orchestration'
      oneLiner='From fragmented automation to end-to-end AI-orchestrated workflows that move decisions and processes 20–40% faster.'
      bestFor="Organizations with complex, multi-step workflows spanning documents, systems, and teams."
      problemWeSolve="Traditional automation breaks at scale. Isolated AI models create bottlenecks, slow handoffs, and limited visibility across end-to-end business processes."
      whatWeDeliver={[
        'AI-driven orchestration across entire workflows, not isolated tasks',
        'Integration of documents, systems, and decisions into unified pipelines',
        'Human-in-the-loop controls with full observability and audit trails',
        'SLA-aware automation for business-critical operations',
      ]}
      exampleKPIs={[
        '30–60% reduction in manual workload across target processes',
        '20–40% decrease in operational errors and exceptions',
        'Up to 70% reduction in search and retrieval time',
      ]}
    />
  );
};

export default ProcessAutomation;
