import { 
  FaChartLine, 
  FaShieldHalved, 
} from "react-icons/fa6";
import { RiTeamFill } from 'react-icons/ri';
import { GrSystem } from "react-icons/gr";

export const groups = [
  {
    title: 'Operational Decisions Under Uncertainty',
    sectionId: 'operational_decisions_under_uncertainty',
    icon: FaChartLine,
    description:
      'Decisions made under time pressure, incomplete information, and changing conditions, where consistency and clarity are critical.',
    options: [
      {
        title: 'Decision Support for Complex Operations',
        text: 'Operational decisions under uncertainty, time pressure, and real consequences.',
        whenMatters: ['Information is incomplete', 'Decisions must be consistent', 'Outcomes must be explainable'],
        howAddressed:
          'Structured decision support with explicit assumptions and review-ready outputs. Human judgment remains central.',
        outcomes: ['Consistency', 'Reduced risk', 'Clear decision rationale'],
        environments: 'Industrial · Cloud & Telecom · Enterprise · Regulated operations',
      },
      {
        title: 'Scenario-Based Operational Planning',
        text: 'Planning operational actions across multiple possible future conditions with uncertainty about demand, constraints, and external factors.',
        whenMatters: [
          'Multiple scenarios must be considered',
          'Trade-offs are unclear or conflicting',
          'Plans need to adapt as conditions change',
        ],
        howAddressed:
          'Structured scenario analysis with explicit assumptions and comparable, review-ready outputs. Human judgment remains central.',
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
        text: 'Decisions made in environments where regulatory requirements, risk exposure, and accountability directly constrain available actions.',
        whenMatters: [
          'Regulatory or compliance impact is unavoidable',
          'Decisions must be auditable and defensible',
          'Risk boundaries cannot be violated',
        ],
        howAddressed:
          'Structured decision support that incorporates risk constraints, makes assumptions explicit, and produces review-ready outputs. Human accountability is preserved.',
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
          'Structured decision support that records assumptions, context, and reasoning in a form suitable for professional review. Human ownership is explicit.',
        outcomes: ['Clear decision lineage', 'Preserved accountability', 'Audit-ready records'],
        environments:
          'Regulated finance · Healthcare & life sciences · Public and enterprise governance · Compliance-driven operations',
      },
    ],
  },
  {
    title: 'Complex Multi-Stakeholder Decisions',
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
          'Structured decision support that clarifies assumptions, constraints, and trade-offs across stakeholders. Human responsibility remains explicit.',
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
          'Structured decision support that defines roles, constraints, and decision boundaries across functions. Human accountability is clearly assigned.',
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
      'For organizations that already operate complex systems and require a higher level of decision structure and control.',
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
          'Structured reasoning that decomposes problems, makes assumptions explicit, and produces review-ready outputs. Human judgment guides conclusions.',
        outcomes: ['Clear problem structure', 'Defensible conclusions', 'Reduced cognitive overload'],
        environments: 'R&D · Strategy & planning · Complex engineering · High-uncertainty decision contexts',
      },
      {
        title: 'Long-Context Analysis and Review-Ready Outputs',
        text: 'Decisions and analyses that require working with large volumes of information, extended context, and interconnected inputs over time.',
        whenMatters: [
          'Context cannot be reduced to short summaries',
          'Information spans documents, systems, or time periods',
          'Outputs must remain reviewable and reusable',
        ],
        howAddressed:
          'Structured analysis that preserves long context, makes assumptions explicit, and produces outputs suitable for professional review. Human oversight remains central.',
        outcomes: ['Preserved context', 'Clear analytical lineage', 'Reusable, review-ready outputs'],
        environments: 'Enterprise analysis · R&D · Compliance & audit · Complex knowledge domains',
      },
    ],
  },
];
