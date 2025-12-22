import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AIGovernance: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-risk'
      title='AI Risk, Evaluation & Governance'
      oneLiner={
        <>
          From unmanaged AI risk to <strong>secure, auditable systems</strong> with near-zero leakage risk and
          enterprise-grade control.
        </>
      }
      bestFor={
        <>
          <strong>Security</strong>, <strong>compliance</strong>, <strong>risk</strong>, and leadership teams
          responsible for AI oversight and regulatory readiness.
        </>
      }
      problemWeSolve={
        <>
          <strong>AI systems introduce new risks</strong> — data leakage, malware exposure, and unpredictable behavior —
          without sufficient visibility, ownership, or control.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>Continuous AI risk evaluation</strong> and monitoring
        </>,
        <>
          <strong>Security controls</strong> across data, models, and workflows
        </>,
        <>
          <strong>Governance frameworks</strong> aligned with enterprise and regulatory standards
        </>,
        <>
          <strong>Clear ownership and accountability</strong> for AI systems
        </>,
      ]}
      exampleKPIs={[
        '100% visibility and ownership for all business-critical AI systems',
        '40–60% faster approval cycle for new AI initiatives',
        '50–70% reduction in unapproved or untracked AI usage across the organization',
      ]}
    />
  );
};

export default AIGovernance;
