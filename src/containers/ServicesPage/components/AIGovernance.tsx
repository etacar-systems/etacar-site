import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AIGovernance: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-risk'
      title='AI Risk, Evaluation & Governance'
      oneLiner={
        <>
          Put <strong>control and accountability</strong> around AI systems
          <em> before risk escalates</em>.
        </>
      }
      bestFor={
        <>
          <strong>Security</strong>, <strong>risk</strong>, <strong>compliance</strong>,
          and <strong>executive leaders</strong> accountable for AI oversight and
          regulatory readiness.
        </>
      }
      problemWeSolve={
        <>
          <strong>AI risk grows invisibly</strong> without clear ownership and controls.
          Data leakage, misuse, and unpredictable behavior surface too late to manage.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>Continuous AI evaluation</strong> with visibility across models,
          data, and workflows
        </>,
        <>
          <strong>Built-in security controls</strong> to prevent leakage, misuse,
          and unauthorized access
        </>,
        <>
          <strong>Governance frameworks</strong> aligned with enterprise and
          regulatory standards
        </>,
      ]}
      exampleKPIs={[
        'Full visibility and ownership across business-critical AI systems',
        '40–60% faster approval cycles for new AI initiatives',
        '50–70% reduction in untracked or unauthorized AI usage',
      ]}
    />
  );
};

export default AIGovernance;
