import React from 'react';
import ServiceDetail from './ServiceDetail';

export const SoftwareDelivery: React.FC = () => {
  return (
    <ServiceDetail
      id="software-delivery"
      title="AI-Augmented Software Delivery"
      oneLiner="Faster architecture, code, testing and modernization for your core systems — without lowering your standards."
      bestFor="CTOs and Heads of Engineering who need to deliver faster while managing technical debt and risk in complex platforms."
      whatWeDeliver={[
        'Architecture support: from requirements to design options and trade-off analysis',
        'AI-assisted implementation: code, tests and migrations aligned with your stack and guidelines',
        'Safe refactoring: modernization of existing services with tests and impact analysis',
        'Integration with your existing CI/CD and review processes',
      ]}
      exampleKPIs={[
        '30–50% faster delivery for selected features and services',
        'Reduced defect rates in early production releases',
        'Lower time spent on repetitive tasks such as boilerplate, tests and migrations',
      ]}
    />
  );
};

export default SoftwareDelivery;
