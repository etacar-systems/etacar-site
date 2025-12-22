import React from 'react';
import ServiceDetail from './ServiceDetail';

export const SoftwareDelivery: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-software'
      title='AI-Accelerated Software Delivery'
      oneLiner={
        <>
          From <strong>slow, manual delivery</strong> to AI-accelerated engineering built for faster, more reliable
          software delivery.
        </>
      }
      bestFor={
        <>
          <strong>CTOs</strong> and <strong>Heads of Engineering</strong> who need to deliver faster while managing
          technical debt and risk in <strong>complex platforms</strong>.
        </>
      }
      problemWeSolve={
        <>
          <strong>Software delivery is slowed</strong> by manual processes, fragmented tooling, and late-stage quality
          issues. AI is often added without improving delivery fundamentals.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>AI-assisted architecture</strong>, development, and modernization workflows
        </>,
        <>
          <strong>Automated quality</strong>, security, and testing integrated into CI/CD
        </>,
        <>
          <strong>Support</strong> for legacy system modernization and refactoring
        </>,
        <>
          <strong>Guardrails</strong> that improve speed without sacrificing reliability
        </>,
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
