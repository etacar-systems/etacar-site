import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AICopilots: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-copilots'
      title='AI Copilots for Critical Roles'
      oneLiner={
        <>
          From generic assistants to <strong>role-specific AI copilots</strong> that teams can rely on for critical
          decisions.
        </>
      }
      bestFor={
        <>
          <strong>Operations</strong>, risk, compliance, <strong>engineering</strong>, and leadership teams making
          frequent, <strong>high-impact decisions</strong>.
        </>
      }
      problemWeSolve={
        <>
          <strong>Generic AI tools lack context</strong>, resulting in hallucinations or unnecessary issue escalation
          instead of informed decisions.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>Role-specific AI copilots</strong> embedded into existing tools and workflows
        </>,
        <>
          <strong>Context-aware reasoning</strong> grounded in verified enterprise data
        </>,
        <>
          Clear boundaries, escalation paths, and <strong>explainable outputs</strong>
        </>,
        <>
          <strong>Built-in controls</strong> for auditability and accountability
        </>,
      ]}
      exampleKPIs={[
        '40–60% reduction in hallucinations',
        '30–50% fewer escalations to human experts',
        '2× improvement in decision turnaround time for complex, multi-step tasks',
      ]}
    />
  );
};

export default AICopilots;
