import React from 'react';
import ServiceDetail from './ServiceDetail';

export const SoftwareDelivery: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-software'
      title='AI-Accelerated Software Delivery'
      oneLiner={
        <>
          Accelerate <strong>software delivery</strong> with AI that
          <em> improves speed without breaking reliability</em>.
        </>
      }
      bestFor={
        <>
          <strong>CTOs</strong> and <strong>engineering leaders</strong> responsible
          for delivery speed, quality, and risk across
          <strong> complex platforms</strong>.
        </>
      }
      problemWeSolve={
        <>
        <strong>Delivery slows down</strong> due to manual workflows, fragmented tooling,
        and late quality checks. AI is added without fixing the fundamentals.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>AI-assisted engineering workflows</strong> across architecture,
          development, and modernization
        </>,
        <>
          <strong>Built-in quality and security</strong> integrated directly into
          CI/CD pipelines
        </>,
        <>
          <strong>Guardrails and automation</strong> that increase speed while
          preserving system reliability
        </>,
      ]}
      exampleKPIs={[
        '30–50% faster delivery of AI-enabled features and systems',
        '40–70% fewer defects through automated testing and code quality checks',
        'Up to 2× improvement in deployment reliability',
      ]}
    />
  );
};

export default SoftwareDelivery;
