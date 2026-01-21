import { ReactNode } from 'react';

type Card = {
  title: string;
  subtitle: ReactNode;
  bestFor: ReactNode;
  problemWeSolve: ReactNode;
  whatWeDeliver: ReactNode;
  exampleKPI: ReactNode;
};

export const cards: Array<Card> = [
  {
    title: 'AI for Decision Support in Critical Roles',
    subtitle: (
      <>
        Decision support for <strong>high-stakes roles</strong> operating under uncertainty.
      </>
    ),
    bestFor: 'Executives, risk owners, operational leaders.',
    problemWeSolve: (
      <>
        Critical decisions are made with <strong>incomplete context</strong> and inconsistent reasoning, increasing risk
        and overrides.
      </>
    ),
    whatWeDeliver: (
      <>
        Grounded decision rationales, <strong>confidence signals</strong>, and explicit uncertainty boundaries.
      </>
    ),
    exampleKPI: 'Decision cycle time, override rate, uncertainty detection accuracy.',
  },
  {
    title: 'Decision-Centric Process Orchestration',
    subtitle: (
      <>
        Orchestrating operations around <strong>explicit decisions</strong>, not opaque automation.
      </>
    ),
    bestFor: 'Operations, compliance-driven and regulated environments.',
    problemWeSolve: (
      <>
        Processes execute without clear <strong>decision ownership</strong>, hiding risk and breaking accountability.
      </>
    ),
    whatWeDeliver: (
      <>
        Decision-anchored workflows, <strong>escalation paths</strong>, and controlled execution logic.
      </>
    ),
    exampleKPI: 'Exception rate, escalation frequency, process deviation incidents.',
  },
  {
    title: 'Decision-Aware Knowledge Systems',
    subtitle: (
      <>
        Knowledge systems grounded in <strong>decision and process context</strong>.
      </>
    ),
    bestFor: 'Organizations with long-running initiatives and high staff turnover.',
    problemWeSolve: (
      <>
        Institutional knowledge is lost as <strong>decisions and rationale</strong> are not retained over time.
      </>
    ),
    whatWeDeliver: (
      <>
        Persistent decision context, <strong>rationale capture</strong>, and context-aware retrieval.
      </>
    ),
    exampleKPI: 'Knowledge reuse rate, decision recall accuracy, time to context recovery.',
  },
];
