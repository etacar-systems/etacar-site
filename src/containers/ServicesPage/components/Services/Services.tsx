import style from './Services.module.scss';

const fullServices = {
  fullServicesPage: {
    title: 'Engineering Intelligent Systems for the Enterprise',
    subtitle:
      'AI orchestration, autonomous agents, and cognitive automation - built to help organizations operate with greater clarity, efficiency, and intelligence.',
    ctaPrimary: 'Talk to an AI Architect',
    ctaSecondary: 'Request a Demo',
    sections: [
      {
        id: 'ai-orchestration-automation',
        title: 'AI Orchestration & Cognitive Automation',
        description:
          'A new layer of intelligence that transforms complex, multi-step workflows into automated cognitive pipelines.',
        items: [
          'Automates repetitive or knowledge-heavy tasks',
          'Orchestrates tools, APIs, and workflows',
          'Adapts to context, constraints, and objectives',
          'Delivers structured, verifiable outputs',
        ],
        cta: {
          label: 'Explore Orchestration Solutions',
          url: '#',
        },
      },
      {
        id: 'autonomous-enterprise-agents',
        title: 'Autonomous Enterprise Agents',
        description:
          'Software agents capable of planning, reasoning, using tools, and executing tasks - all while maintaining enterprise-grade reliability.',
        items: [
          'Research & summarization',
          'Monitoring, analysis, and diagnostics',
          'Document processing and drafting',
          'Task execution across systems',
          'Interactive support for teams',
        ],
        cta: {
          label: 'View Agent Catalog',
          url: '#',
        },
      },
      {
        id: 'knowledge-intelligence-systems',
        title: 'Knowledge Intelligence Systems',
        description:
          'A unified intelligence layer that understands your documents, data, processes, and domain knowledge.',
        items: [
          'Semantic and hybrid search',
          'Retrieval-augmented reasoning',
          'Data enrichment & contextualization',
          'Document understanding',
          'Knowledge graph integration',
        ],
        cta: {
          label: 'Learn About Knowledge Intelligence',
          url: '#',
        },
      },
      {
        id: 'custom-ai-engineering',
        title: 'Custom AI Engineering & Integration',
        description: 'Tailored AI solutions designed around your infrastructure, processes, and security requirements.',
        items: [
          'Internal AI tools and copilots',
          'API integration & middleware',
          'Cloud/on-prem hybrid deployments',
          'Secure model routing',
          'Full-cycle solution development',
        ],
        cta: {
          label: 'Start a Custom Project',
          url: '#',
        },
      },
      {
        id: 'ai-strategy-advisory',
        title: 'AI Strategy & Advisory',
        description:
          'A strategic consulting and advisory service designed to help organizations understand where AI delivers the highest value - and how to implement it safely, effectively, and sustainably.',
        items: [
          'Identify high-impact opportunities for AI adoption',
          'Assess data, infrastructure, and operational readiness',
          'Build AI transformation roadmaps',
          'Define governance, security, and compliance frameworks',
          'Support executive and technical decision-making',
        ],
        useCases: [
          'Organizations beginning their AI journey',
          'Enterprises modernizing legacy processes',
          'Companies evaluating the feasibility of AI initiatives',
        ],
        cta: {
          label: 'Start with Strategy',
          url: '#',
        },
      },
      {
        id: 'ai-lifecycle-management',
        title: 'AI Lifecycle Management & Optimization',
        description:
          'A continuous management and optimization service for organizations that rely on AI systems in production. We ensure your AI stays efficient, compliant, secure, up to date - and aligned with evolving business needs.',
        items: [
          'Monitor performance, reliability, and quality',
          'Optimize workflows, agents, and orchestration pipelines',
          'Regularly update prompts, rules, and model routing',
          'Manage drift, regressions, and operational risk',
          'Conduct periodic audits, evaluations, and tuning',
          'Provide ongoing support and incident handling',
        ],
        useCases: [
          'Enterprises using AI for mission-critical operations',
          'Organizations with internal AI assistants or agents',
          'Companies scaling multiple AI workflows across teams',
        ],
        cta: {
          label: 'Optimize Your AI Operations',
          url: '#',
        },
      },
    ],
  },
};

export const Services = () => {
  const { sections } = fullServices.fullServicesPage;

  return (
    <section className={style.services}>
      <div className={style.container}>
        {sections.map(section => (
          <div className={style.service} key={section.id}>
            <div className={style.title}>{section.title}</div>

            {section.description && <div className={style.description}>{section.description}</div>}

            {section.items && section.items.length > 0 && (
              <>
                <div className={style.subtitle}>Key points</div>
                <ul className={style.list}>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
