import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AIGovernance: React.FC = () => {
  return (
    <ServiceDetail
      id="ai-governance"
      title="AI Risk, Evaluation & Governance"
      oneLiner="Bring all your AI initiatives under one governance and monitoring umbrella."
      problemWeSolve="As AI projects multiply, it becomes difficult to answer simple questions: How many AI systems do we have? Who owns them? How do we know they are working as intended — and safely?"
      whatWeDeliver={[
        'An inventory of AI systems and use cases across the organization',
        'A risk classification for each system and corresponding controls',
        'A set of metrics and dashboards: quality, cost, usage, incidents and drift',
        'Processes for review, approval and rollback of AI changes',
        'Documentation you can show to risk committees, auditors and boards',
      ]}
      exampleKPIs={[
        '100% of business-critical AI use cases with named owners, KPIs and logs',
        'Fewer unapproved or undocumented AI systems in production',
        'Faster approval cycles for new AI initiatives due to clearer documentation',
      ]}
    />
  );
};

export default AIGovernance;
