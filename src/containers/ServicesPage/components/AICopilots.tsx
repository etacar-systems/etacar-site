import React from 'react';
import ServiceDetail from './ServiceDetail';

export const AICopilots: React.FC = () => {
  return (
    <ServiceDetail
      id="ai-copilots"
      title="AI Copilots for Critical Roles"
      oneLiner="Role-specific AI assistants for people who make high-stakes decisions every day."
      bestFor="Heads of risk, operations, sales, customer service and other leaders who need their teams to decide faster and with better use of existing knowledge."
      whatWeDeliver={[
        'Design of role-specific workflows: how the copilot helps in daily decisions',
        'Integration with your tools: email, chat, CRM, BI, ticketing, internal systems',
        'Explainable recommendations: summaries, options and flags with clear references',
        'Safety and boundaries: what the copilot can decide, suggest or only prepare',
      ]}
      exampleKPIs={[
        'Time to prepare key decisions or responses reduced by 20–40%',
        'Higher coverage of relevant documents/data in each decision',
        'Fewer escalations due to missing information or inconsistent decisions',
      ]}
    />
  );
};

export default AICopilots;
