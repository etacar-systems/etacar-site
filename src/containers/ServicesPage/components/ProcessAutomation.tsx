import React from 'react';
import ServiceDetail from './ServiceDetail';

export const ProcessAutomation: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-orchestration'
      title='AI Process Orchestration'
      oneLiner={
        <>
          From fragmented automation to <strong>end-to-end AI-orchestrated workflows</strong> for mission-critical
          decisions and processes.
        </>
      }
      bestFor={
        <>
          Organizations with <strong>complex, multi-step workflows</strong> spanning{' '}
          <strong>documents, systems, and teams</strong>.
        </>
      }
      problemWeSolve={
        <>
          <strong>Traditional automation breaks at scale.</strong> Isolated AI models create bottlenecks, slow handoffs,
          and limited visibility across end-to-end business processes.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>AI-driven orchestration</strong> across entire workflows, not isolated tasks
        </>,
        <>
          <strong>Integration</strong> of documents, systems, and decisions into unified pipelines
        </>,
        <>
          <strong>Human-in-the-loop controls</strong> with full observability and audit trails
        </>,
        <>
          <strong>SLA-aware automation</strong> for business-critical operations
        </>,
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
