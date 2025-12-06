'use client';

import React from 'react';
import ServiceDetail from './ServiceDetail';

export const DocumentIntelligence: React.FC = () => {
  return (
    <ServiceDetail
      id='document-intelligence'
      title='Document & Knowledge Intelligence'
      oneLiner='Turn your contracts, policies and technical documentation into a trusted knowledge layer.'
      problemWeSolve="Critical knowledge is often buried in documents, shared drives and legacy systems. People spend hours searching, or simply guess. That doesn't work when regulators, customers or partners expect clear answers."
      whatWeDeliver={[
        'A unified knowledge layer across contracts, policies, procedures and technical docs',
        'Search and Q&A with answers backed by citations and document snippets',
        'Tools for comparing versions, spotting changes and detecting potential risks',
        'Optional alerts on changes in key documents (e.g. policies, SLAs, regulations)',
      ]}
      exampleKPIs={[
        '50–70% less time spent searching and reading documents for recurring questions',
        'Higher consistency of answers across teams and regions',
        'Fewer missed clauses or outdated references in critical decisions',
      ]}
    />
  );
};

export default DocumentIntelligence;
