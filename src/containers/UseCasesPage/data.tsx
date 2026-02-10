import {
  FaChartLine,
  FaShieldHalved,
} from "react-icons/fa6";
import { RiTeamFill } from 'react-icons/ri';
import { GrSystem } from "react-icons/gr";

export const groups = [
  {
    title: 'Operational Decisions in Uncertainty',
    sectionId: 'operational_decisions_under_uncertainty',
    icon: FaChartLine,
    description:
      'Decisions made under time pressure and incomplete information, where clarity is critical.',
    options: [
      {
        title: 'Decision Support for Complex Operations',
        text: 'Operational decisions under uncertainty, time pressure, and real consequences.',
        whenMatters: ['Information is incomplete', 'Decisions must be consistent', 'Outcomes must be explainable'],
        howAddressed:
          'Structured support for in-the-moment decisions, with explicit assumptions and review-ready outputs.',
        outcomes: ['Consistency', 'Reduced risk', 'Clear decision rationale'],
        environments: 'Industrial · Cloud & Telecom · Enterprise · Regulated operations',
      },
      {
        title: 'Scenario-Based Operational Planning',
        text: 'Planning operational actions across uncertain future scenarios.',
        whenMatters: [
          'Multiple scenarios must be considered',
          'Trade-offs are unclear or conflicting',
          'Plans need to adapt as conditions change',
        ],
        howAddressed:
          'Structured scenario analysis across possible futures, with explicit assumptions and review-ready outputs.',
        outcomes: ['Clear trade-offs', 'Better preparedness', 'More robust plans'],
        environments:
          'Operations & supply chain · Infrastructure planning · Enterprise platforms · Regulated environments',
      },
    ],
  },
  {
    title: 'Risk-Sensitive & Regulated Decisions',
    sectionId: 'risk_sensitive_regulated_decisions',
    icon: FaShieldHalved,
    description: 'Decisions where regulatory exposure, compliance requirements, and auditability are non-negotiable.',
    options: [
      {
        title: 'Risk-Aware Decision-Making in Regulated Environments',
        text: 'Decisions made under regulatory, risk, and accountability constraints.',
        whenMatters: [
          'Regulatory or compliance impact is unavoidable',
          'Decisions must be auditable and defensible',
          'Risk boundaries cannot be violated',
        ],
        howAddressed:
          'Structured decision support with risk constraints and explicit assumptions, producing review-ready outputs.',
        outcomes: ['Controlled risk exposure', 'Defensible decisions', 'Clear audit trail'],
        environments:
          'Regulated finance · Healthcare & life sciences · Infrastructure & utilities · Compliance-driven operations',
      },
      {
        title: 'Decision Traceability and Accountability',
        text: 'Decisions that must remain explainable, reviewable, and attributable to specific roles over time.',
        whenMatters: [
          'Decisions are subject to audit or review',
          'Accountability cannot be delegated to systems',
          'Past decisions must be reconstructed and examined',
        ],
        howAddressed:
          'Structured decision support that records assumptions and context for professional review. Ownership is explicit.',
        outcomes: ['Clear decision lineage', 'Preserved accountability', 'Audit-ready records'],
        environments:
          'Regulated finance · Healthcare & life sciences · Public and enterprise governance · Compliance-driven operations',
      },
    ],
  },
  {
    title: 'Multi-Stakeholder Decisions',
    sectionId: 'complex_multi_stakeholder_decisions',
    icon: RiTeamFill,
    description: 'Decisions involving multiple teams, conflicting objectives, and unclear ownership.',
    options: [
      {
        title: 'Multi-Stakeholder Decision Alignment',
        text: 'Decisions involving multiple teams, roles, and objectives, where priorities conflict and ownership is distributed.',
        whenMatters: [
          'Stakeholders operate with different goals or constraints',
          'Decisions stall due to misalignment',
          'Accountability is unclear or contested',
        ],
        howAddressed:
          'Structured decision support with risk constraints and explicit assumptions, producing review-ready outputs.',
        outcomes: ['Shared decision context', 'Reduced friction', 'Clear ownership'],
        environments:
          'Large enterprise programs · Cross-functional operations · Regulated organizations · Complex governance settings',
      },
      {
        title: 'Cross-Functional Decision Governance',
        text: 'Decisions that span multiple functions, each with its own responsibilities, constraints, and risk perspectives.',
        whenMatters: [
          'Decisions cross organizational or functional boundaries',
          'Governance requirements are unclear or inconsistent',
          'Responsibility is fragmented across teams',
        ],
        howAddressed:
          'Structured decision support that records assumptions and context for professional review. Ownership is explicit.',
        outcomes: ['Consistent governance', 'Clear decision authority', 'Reduced coordination risk'],
        environments:
          'Enterprise organizations · Regulated operations · Complex program governance · Multi-domain systems',
      },
    ],
  },
  {
    title: 'Advanced / Mature Decision Systems',
    sectionId: 'advanced_mature_decision_systems',
    icon: GrSystem,
    description:
      'For organizations operating complex systems that require greater decision structure and control.',
    options: [
      {
        title: 'Structured Reasoning for Complex Problem Solving',
        text: 'Complex problems with many interdependent factors, unclear solution paths, and no single correct answer.',
        whenMatters: [
          'Problems cannot be solved through linear analysis',
          'Assumptions must be explicit and challengeable',
          'Reasoning needs to be revisited over time',
        ],
        howAddressed:
          'Structured reasoning that decomposes complex problems and produces review-ready outputs.',
        outcomes: ['Clear problem structure', 'Defensible conclusions', 'Reduced cognitive overload'],
        environments: 'R&D · Strategy & planning · Complex engineering · High-uncertainty decision contexts',
      },
      {
        title: 'Long-Context Analysis and Review-Ready Outputs',
        text: 'Decisions and analyses involving large volumes of interconnected information over time.',
        whenMatters: [
          'Context cannot be reduced to short summaries',
          'Information spans documents, systems, or time periods',
          'Outputs must remain reviewable and reusable',
        ],
        howAddressed:
          'Structured analysis that preserves long context and produces outputs for professional review.',
        outcomes: ['Preserved context', 'Clear analytical lineage', 'Reusable, review-ready outputs'],
        environments: 'Enterprise analysis · R&D · Compliance & audit · Complex knowledge domains',
      },
    ],
  },
];
