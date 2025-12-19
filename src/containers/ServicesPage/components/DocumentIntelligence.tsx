import React from 'react';
import ServiceDetail from './ServiceDetail';

export const DocumentIntelligence: React.FC = () => {
  return (
    <ServiceDetail
      id='knowledge-intelligence'
      title='Process-Aware Knowledge AI'
      oneLiner='From scattered documents to process-aware, trusted answers that cut search time by up to 70%.'
      bestFor='Teams and leaders working with large volumes of documents, policies, contracts, technical documentation, and internal knowledge.'
      problemWeSolve='Critical information is locked inside documents and siloed systems, detached from how business processes actually run. Searching is slow, answers are inconsistent, and decisions lack traceability.'
      whatWeDeliver={[
        <>
          Ontology-driven <strong>semantic understanding of documents</strong>, data, and knowledge bases
        </>,
        <>
          <strong>Context-aware answers</strong> scoped to business processes and decision contexts, with references and
          citations
        </>,
        'Side-by-side comparison and reasoning across documents within a shared business process context',
        'Secure, role-based access to internal knowledge across teams and workflows',
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
