import React from 'react';
import ServiceDetail from './ServiceDetail';

export const ProcessAutomation: React.FC = () => {
  return (
    <ServiceDetail
      id='ai-powered'
      title='AI Process Orchestration'
      oneLiner='End-to-end AI workflows for complex, high-impact processes - with humans still in control.'
      typicalProcesses={[
        'KYC/AML and periodic customer reviews',
        'Incident and major incident management',
        'Complex deal / proposal creation',
        'Claims and exception handling',
      ]}
      whatWeDeliver={[
        'A mapped process with clear AI vs human responsibilities',
        'An AI-enabled workflow that collects data, drafts decisions and routes cases',
        'Integration with existing systems (CRM, ticketing, core platforms)',
        'Dashboards and alerts for performance, bottlenecks and risk',
      ]}
      exampleKPIs={[
        '30–60% reduction in manual workload across target processes',
        '20–40% decrease in operational errors and exceptions',
        '25–50% faster throughput for data-heavy or approval-driven workflows',
      ]}
    />
  );
};

export default ProcessAutomation;
