import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AICopilots: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-copilots'
      title='AI Copilots for Critical Roles'
      oneLiner={
        <>
          Deploy <strong>role-specific AI copilots</strong> teams can
          <em> trust in high-stakes decisions</em>.
        </>
      }
      bestFor={
        <>
          <strong>Operations</strong>, <strong>risk</strong>, <strong>compliance</strong>,
          <strong> engineering</strong>, and leaders responsible for
          <strong> critical decisions</strong>.
        </>
      }
      problemWeSolve={
        <>
          <strong>Generic AI breaks trust</strong> in critical roles.
          Lacking context and boundaries, it hallucinates, escalates unnecessarily,
          and slows decision-making.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>Role-specific copilots</strong> embedded into existing workflows
        </>,
        <>
          <strong>Context-grounded reasoning</strong> based on verified enterprise data
        </>,
        <>
          <strong>Explicit boundaries</strong>, escalation paths, and explainable outputs
        </>,
      ]}
      exampleKPIs={[
        '40–60% fewer hallucinations in decision workflows',
        '30–50% reduction in unnecessary escalations',
        'Up to 2× faster decision turnaround for complex tasks',
      ]}
    />
  );
};

export default AICopilots;
