import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AICopilots: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-copilots'
      title='AI Copilots for Critical Roles'
      oneLiner='Role-specific AI assistants for people who make high-stakes decisions every day.'
      bestFor='Best for leaders and teams who need copilots designed around their actual workflows, systems and risk constraints - not generic chatbots.'
      whatWeDeliver={[
        'Design of role-specific workflows: how the copilot helps in daily decisions',
        'Integration with your tools: email, chat, CRM, BI, ticketing, internal systems',
        'Explainable recommendations: summaries, options and flags with clear references',
        'Safety and boundaries: what the copilot can decide, suggest or only prepare',
      ]}
      exampleKPIs={[
        '20–40% increase in productivity for targeted roles (operations, risk, product)',
        '30–50% reduction in time spent on repetitive cognitive tasks',
        '2× improvement in decision turnaround time for complex, multi-step tasks',
      ]}
    />
  );
};

export default AICopilots;
