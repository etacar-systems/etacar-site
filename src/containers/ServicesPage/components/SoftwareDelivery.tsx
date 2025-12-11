import React from 'react';
import ServiceDetail from './ServiceDetail';

export const SoftwareDelivery: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-augmented'
      title='AI-Augmented Software Delivery'
      oneLiner='Faster architecture, code, testing and modernization for your core systems — without lowering your standards.'
      bestFor='CTOs and Heads of Engineering who need to deliver faster while managing technical debt and risk in complex platforms.'
      whatWeDeliver={[
        'Architecture support: from requirements to design options and trade-off analysis',
        'AI-assisted implementation: code, tests and migrations aligned with your stack and guidelines',
        'Safe refactoring: modernization of existing services with tests and impact analysis',
        'Integration with your existing CI/CD and review processes',
        'Claims handling, customer onboarding, KYC reviews, exception handling',
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
