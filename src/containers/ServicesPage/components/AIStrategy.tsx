import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AIStrategy: React.FC = () => {
  return (
    <ServiceDetail
      id='enterprise-ai'
      title='AI Strategy & Architecture'
      oneLiner={
        <>
          From <strong>AI ideas</strong> to a realistic roadmap, architecture and governance model that C-level, IT and
          risk can stand behind.
        </>
      }
      bestFor={
        <>
          <strong>Executives</strong>, <strong>CIOs</strong>, <strong>CTOs</strong>, and strategy teams designing AI
          systems for <strong>complex, high-impact decision environments</strong>.
        </>
      }
      problemWeSolve={
        <>
          <strong>AI initiatives often fail</strong> because they start without structured analysis, realistic
          architecture, or a way to validate decisions before deployment. Enterprises struggle to align AI with business
          priorities, manage risk, and predict outcomes in complex, interdependent systems.
        </>
      }
      whatWeDeliver={[
        <>
          <strong>Structured analysis</strong> to decompose complex business problems into measurable, AI-ready
          components
        </>,
        <>
          <strong>Quantum-inspired modeling</strong> to explore complex constraints, trade-offs, and decision spaces
          beyond linear approaches
        </>,
        <>
          <strong>Predictive simulation</strong> to test scenarios, decisions, and system behavior before production
          rollout
        </>,
        <>
          <strong>Enterprise-grade AI architecture</strong> integrated with existing systems, data, and governance
          frameworks
        </>,
      ]}
      exampleKPIs={[
        '20–40% faster data processing through structured problem decomposition',
        '40–60% fewer AI errors validated through predictive simulation',
        '30–50% faster delivery with less architectural rework',
      ]}
    />
  );
};

export default AIStrategy;
