import React from 'react';
import ServiceDetail from './ServiceDetail';

export const DocumentIntelligence: React.FC = () => {
  return (
    <ServiceDetail
      id='document'
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
        '40–70% faster retrieval of critical documents, facts and decisions',
        '30–60% reduction in manual document review time',
        '25–50% fewer compliance or documentation errors',
      ]}
    />
  );
};

export default DocumentIntelligence;
