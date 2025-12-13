import React from 'react';
import ServiceDetail from './ServiceDetail';

export const SoftwareDelivery: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-software'
      title='AI-Accelerated Software Delivery'
      oneLiner='From slow, manual delivery to AI-accelerated engineering that ships features 30–50% faster with significantly less rework.'
      bestFor='CTOs and Heads of Engineering who need to deliver faster while managing technical debt and risk in complex platforms.'
      problemWeSolve="Software delivery is slowed by manual processes, fragmented tooling, and late-stage quality issues. AI is often added without improving delivery fundamentals."
      whatWeDeliver={[
        'AI-assisted architecture, development, and modernization workflows',
        'Automated quality, security, and testing integrated into CI/CD',
        'Support for legacy system modernization and refactoring',
        'Guardrails that improve speed without sacrificing reliability'
      ]}
      exampleKPIs={[
        '30–50% reduction in delivery time for AI-enabled features and systems',
        '40–70% decrease in bugs and defects through automated testing & AI code quality checks',
        '2× improvement in deployment reliability across staging and production',
      ]}
    />
  );
};

export default SoftwareDelivery;
