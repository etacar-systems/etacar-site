import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AIStrategy: React.FC = () => {
  return (
    <ServiceDetail
      id='enterprise-ai'
      title='AI Strategy & Architecture'
      oneLiner={
        <>
          Define the <strong>AI operating model</strong> your organization can
          <em> own, govern, and scale</em>.
        </>
      }
      bestFor={
        <>
          <strong>C-level leaders</strong>, <strong>CIOs</strong>, and <strong>CTOs</strong>{' '}
          accountable for AI decisions in <strong>high-stakes environments</strong>.
        </>
      }
      problemWeSolve={
        <>
          <strong>AI fails at scale</strong> when ownership, decision logic, and
          architecture are unclear. Risk is discovered late, and outcomes
          become unpredictable.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>Decision-centric AI strategy</strong> aligned with business
          priorities and accountability
        </>,
        <>
          <strong>Enterprise AI architecture</strong> built for scale, risk, and
          long-term control
        </>,
        <>
          <strong>Scenario validation</strong> to test decisions before production
        </>,
      ]}
      exampleKPIs={[
        '20–40% faster move from strategy to production',
        '40–60% fewer critical issues discovered post-deployment',
        'Clear ownership across AI, data, and decisions',
      ]}
    />
  );
};

export default AIStrategy;
