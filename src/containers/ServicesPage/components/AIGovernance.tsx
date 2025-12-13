import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AIGovernance: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-risk'
      title='AI Risk, Evaluation & Governance'
      oneLiner='From unmanaged AI risk to secure, auditable systems with near-zero leakage risk and enterprise-grade control.'
      bestFor="Security, compliance, risk, and leadership teams responsible for AI oversight and regulatory readiness."
      problemWeSolve='AI systems introduce new risks — data leakage, malware exposure, and unpredictable behavior — without sufficient visibility, ownership, or control.'
      whatWeDeliver={[
        'Continuous AI risk evaluation and monitoring',
        'Security controls across data, models, and workflows',
        'Governance frameworks aligned with enterprise and regulatory standards',
        'Clear ownership and accountability for AI systems'
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
