import style from './Services.module.scss';

import { servicePageIcons } from '../../../../assets/icons/servicesPage';

export const Services = () => {
  return (
    <section className={style.services}>
      <div className={style.container}>
        <div className={style.service}>
          <div className={style.title}>
            <div>AI Strategy &amp; Discovery</div>
            <img src={servicePageIcons.pm} alt='AI Strategy Icon' />
          </div>
          <div className={style.description}>
            We help you understand where AI can create real value in your organisation. Together we frame business goals,
            assess data readiness, and define a pragmatic roadmap for AI agents, copilots, and decision-support tools.
          </div>
          <div className={style.subtitle}>We help you:</div>
          <div className={style.list}>
            <div>Identify high-impact AI opportunities across teams and processes</div>
            <div>Prioritise use cases by value, feasibility, and risk</div>
            <div>Define target workflows, user journeys, and guardrails</div>
            <div>Align AI initiatives with your existing architecture and tools</div>
          </div>
          <div className={style.subtitle}>Typical activities</div>
          <div className={style.tags}>
            <div>AI discovery workshops</div>
            <div>Use case prioritisation</div>
            <div>Architecture blueprints</div>
            <div>Risk &amp; governance review</div>
          </div>
        </div>

        <div className={style.service}>
          <div className={style.title}>
            <div>AI Product Engineering</div>
            <img src={servicePageIcons.computer} alt='AI Product Engineering Icon' />
          </div>
          <div className={style.description}>
            We design and build AI-native products end to end: from backend, APIs, and integrations to front-end
            experiences that make agents and copilots part of your daily workflows.
          </div>
          <div className={style.subtitle}>We deliver:</div>
          <div className={style.list}>
            <div>Task-focused AI agents and internal copilots</div>
            <div>In-product assistants for SaaS and digital platforms</div>
            <div>Custom integrations with CRMs, ticketing, and back-office systems</div>
            <div>Production-ready APIs and services around your AI capabilities</div>
          </div>
          <div className={style.subtitle}>Typical stack</div>
          <div className={style.tags}>
            <div>TypeScript / JavaScript</div>
            <div>Python</div>
            <div>Node.js</div>
            <div>React</div>
            <div>REST / GraphQL APIs</div>
            <div>Cloud-native deployment</div>
          </div>
        </div>

        <div className={style.service}>
          <div className={style.title}>
            <div>Data &amp; Knowledge Engineering</div>
            <img src={servicePageIcons.design} alt='Data & Knowledge Engineering Icon' />
          </div>
          <div className={style.description}>
            Reliable AI starts with well-structured, well-governed data. We build the pipelines, document processing,
            and knowledge layers that power search, retrieval, and decision-making.
          </div>
          <div className={style.subtitle}>We help you:</div>
          <div className={style.list}>
            <div>Prepare and structure documents, contracts, and knowledge bases</div>
            <div>Design retrieval pipelines for grounded, explainable answers</div>
            <div>Implement access control and data governance in AI workflows</div>
            <div>Connect multiple data sources into a single AI interface</div>
          </div>
          <div className={style.subtitle}>Typical stack</div>
          <div className={style.tags}>
            <div>ETL &amp; data pipelines</div>
            <div>Vector databases</div>
            <div>Search &amp; retrieval</div>
            <div>Document processing</div>
            <div>Knowledge modelling</div>
          </div>
        </div>

        <div className={style.service}>
          <div className={style.title}>
            <div>AI Platform, LLMOps &amp; AgentOps</div>
            <img src={servicePageIcons.support} alt='AI Platform Icon' />
          </div>
          <div className={style.description}>
            We help you operate AI safely at scale: observability, evaluation, and governance for the models, tools, and
            agents you run in production.
          </div>
          <div className={style.subtitle}>We implement:</div>
          <div className={style.list}>
            <div>Centralised AI gateways and orchestration layers</div>
            <div>Evaluation and monitoring of agents and models</div>
            <div>Guardrails, policies, and access control for AI workflows</div>
            <div>Deployment pipelines for rapid but safe iteration</div>
          </div>
          <div className={style.subtitle}>Platform capabilities</div>
          <div className={style.tags}>
            <div>LLMOps / AgentOps</div>
            <div>Observability &amp; logging</div>
            <div>Quality evaluation</div>
            <div>Policy &amp; safety checks</div>
            <div>Model &amp; tool registry</div>
          </div>
        </div>
      </div>
    </section>
  );
};
