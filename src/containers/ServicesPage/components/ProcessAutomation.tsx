'use client';

import React from 'react';
import ServiceDetail from './ServiceDetail';

export const ProcessAutomation: React.FC = () => {
  return (
    <ServiceDetail
      id='process-automation'
      title='AI-Powered Process Automation'
      oneLiner='End-to-end AI workflows for complex, high-impact processes — with humans still in control.'
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
        '20–40% reduction in end-to-end cycle time for selected processes',
        '30–60% fewer manual touches per case',
        'Lower rework rate due to missing data or inconsistent decisions',
      ]}
    />
  );
};

export default ProcessAutomation;
