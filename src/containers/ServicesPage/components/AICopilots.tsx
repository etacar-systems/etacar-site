import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AICopilots: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-copilots'
      title='AI Copilots for Critical Roles'
      oneLiner='From generic assistants to role-specific AI copilots that teams can rely on for critical decisions.'
      bestFor='Operations, risk, compliance, engineering, and leadership teams making frequent, high-impact decisions.'
      problemWeSolve='Generic AI tools lack context, hallucinate, and create operational and compliance risk. Teams spend time validating outputs or escalating issues instead of acting on insights.'
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
        'Built-in controls for auditability and accountability',
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
