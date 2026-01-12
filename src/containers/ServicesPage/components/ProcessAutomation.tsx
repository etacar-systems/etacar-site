import React from 'react';
import ServiceDetail from './ServiceDetail';

export const ProcessAutomation: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-orchestration'
      title='AI Process Orchestration'
      oneLiner={
        <>
          Orchestrate <strong>end-to-end AI workflows</strong> your organization can
          <em> run, monitor, and control</em>.
        </>
      }
      bestFor={
        <>
          Organizations operating <strong>complex, multi-step processes</strong>{' '}
          across <strong>systems, documents, and teams</strong>.
        </>
      }
      problemWeSolve={
        <>
        <strong>Automation breaks at scale</strong> when AI operates in silos.
        Fragmented models create bottlenecks, slow handoffs, and limit end-to-end visibility.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>End-to-end AI orchestration</strong> across complete business
          workflows, not isolated tasks
        </>,
        <>
          <strong>Unified pipelines</strong> connecting documents, systems, and
          decisions
        </>,
        <>
          <strong>Human-in-the-loop controls</strong> with full observability and
          auditability
        </>,
      ]}
      exampleKPIs={[
        '30–60% reduction in manual workload across target processes',
        '20–40% fewer operational errors and exceptions',
        'Up to 70% faster information retrieval within workflows',
      ]}
    />
  );
};

export default ProcessAutomation;
