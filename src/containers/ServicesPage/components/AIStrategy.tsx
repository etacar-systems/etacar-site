import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AIStrategy: React.FC = () => {
  return (
    <ServiceDetail
      id='enterprise-ai'
      title='AI Strategy & Architecture for Business-Critical Processes'
      oneLiner="From AI 'ideas' to a realistic roadmap, architecture and governance model your C-level, IT and risk teams can all agree on."
      bestFor="Organizations that are past the 'AI experimentation' stage and want a coherent plan for mission-critical workflows."
      problemWeSolve='Many organizations experiment with AI in pockets — pilots, PoCs, side projects — without a clear view of where AI truly matters, how it fits existing systems, or who owns the risk. We help you focus AI investments on business-critical processes and design an architecture that can be safely operated at scale.'
      whatWeDeliver={[
        'A prioritized list of 3–5 high-impact AI use cases for your business-critical operations',
        'A target architecture: models, data, integrations and boundaries to your core systems',
        'A governance model: roles, responsibilities, policies and decision-making processes',
        'A 12–24 month roadmap with phases, dependencies and indicative budgets',
      ]}
      exampleKPIs={[
        'Clear alignment between C-level, IT and risk on AI priorities and architecture',
        'Less "random" AI experimentation; more initiatives tied to the agreed roadmap',
        'Faster go/no-go decisions for AI pilots and production rollouts',
      ]}
    />
  );
};

export default AIStrategy;
