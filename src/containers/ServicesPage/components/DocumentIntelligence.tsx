import React from 'react';
import ServiceDetail from './ServiceDetail';

export const DocumentIntelligence: React.FC = () => {
  return (
    <ServiceDetail
      id='knowledge-intelligence'
      title='Knowledge Intelligence'
      oneLiner='From scattered documents to trusted, context-aware answers that cut search time by up to 70% and support real decisions.'
      bestFor="Teams working with large volumes of documents, policies, contracts, technical documentation, and internal knowledge."
      problemWeSolve="Critical information is locked inside documents and siloed systems. Searching is slow, answers are inconsistent, and decisions lack traceability."
      whatWeDeliver={[
        'Deep semantic understanding of documents and knowledge bases',
        'Context-aware answers with references and citations',
        'Side-by-side comparison and reasoning across documents',
        'Secure access to internal knowledge across teams',
      ]}
      exampleKPIs={[
        'Up to 70% faster information retrieval',
        '30–60% reduction in manual document review time',
        '25–50% fewer compliance or documentation errors',
      ]}
    />
  );
};

export default DocumentIntelligence;
