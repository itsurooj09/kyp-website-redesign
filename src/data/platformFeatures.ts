import { routes } from "@/lib/routes";

export interface PlatformFeature {
  id: string;
  anchor: string;
  number: string;
  title: string;
  badge: string;
  headline: string;
  subheading: string;
  description: string;
  bullets: string[];
  workflow: {
    steps: string[];
    description: string;
  };
  metrics: { label: string; value: string }[];
  interfaceType: "onboarding" | "data" | "graph" | "monitoring" | "evidence";
}

export const platformFeaturesData: PlatformFeature[] = [
  {
    id: "ai-onboarding",
    anchor: "#ai-onboarding",
    number: "01",
    title: "AI-Powered Onboarding",
    badge: "Smart Intake & Validation",
    headline: "Onboard 10× Faster. Resolve Document Issues Before Submission.",
    subheading: "KYP uses AI to check documents as business partners complete their onboarding questionnaires, reducing friction and review cycles.",
    description: "Traditional corporate onboarding is plagued by incomplete questionnaires, blurry attachments, and expired certificates. KYP empowers applicants to self-correct in real time, automatically verifying document authenticity and populating corporate records.",
    bullets: [
      "Custom questionnaires and document submission requirements tailored strictly to your compliance policy",
      "Real-time AI validation assessing documents for validity, expiration, and required certifications",
      "Instant partner feedback explaining exactly how to rectify deficient uploads prior to submission",
      "Automatic questionnaire population extracted directly from verified corporate registry documents",
      "Discrepancy detection flagging conflicting names, dates, or registration numbers against official filings",
      "Human-in-the-loop control ensuring your compliance analysts retain complete authority over approvals",
    ],
    workflow: {
      steps: ["Collect", "Check", "Resolve", "Submit"],
      description: "Applicant uploads documents -> AI validates in seconds -> Discrepancies resolved immediately -> Clean dossier submitted for approval",
    },
    metrics: [
      { label: "Onboarding Acceleration", value: "10×" },
      { label: "First-Time Approval Rate", value: "94%" },
      { label: "Manual Review Hours", value: "-75%" },
    ],
    interfaceType: "onboarding",
  },
  {
    id: "data-integrations",
    anchor: "#data-integrations",
    number: "02",
    title: "Data & Integrations",
    badge: "Unified Risk Aggregation",
    headline: "Bring Your Data Together. Build a 360° View of Risk.",
    subheading: "Connect partner submissions, external registries, sanctions watchlists, and internal payment signals into one consolidated risk intelligence hub.",
    description: "Eliminate fragmented spreadsheets and multi-tab investigation fatigue. KYP harmonises external registry intelligence, PEP screening, website crawling, and transaction trends to provide complete context on every merchant.",
    bullets: [
      "Seamless ingestion of partner onboarding questionnaires, business registries, and verified filings",
      "Direct integration with leading sanctions, PEP, and adverse media intelligence providers",
      "WebCompli automated crawler feeding website content, marketing disclosures, and jurisdictional restrictions",
      "Merchant transaction trend ingestion and real-time transaction monitoring where data is integrated",
      "Cyber-risk and dark-web exposure intelligence delivered via connected security providers like RiskRecon",
      "Automated cross-referencing that surfaces inconsistencies between declared answers and third-party records",
    ],
    workflow: {
      steps: ["Connect", "Cross-reference", "Assess", "Monitor"],
      description: "Ingest external & internal feeds -> Entity resolution & matching -> Multi-dimensional risk score -> Continuous automated surveillance",
    },
    metrics: [
      { label: "Global Registries", value: "180+" },
      { label: "Screening Providers", value: "Unified" },
      { label: "Context Coverage", value: "360°" },
    ],
    interfaceType: "data",
  },
  {
    id: "graph-intelligence",
    anchor: "#graph-intelligence",
    number: "03",
    title: "Graph Intelligence",
    badge: "Itemize-Inspired Network Architecture",
    headline: "See the Connections Behind the Risks.",
    subheading: "Understand relationships. Uncover hidden exposure. Make better-informed compliance decisions.",
    description: "Criminal syndicates and bad actors use elaborate web architectures to obscure parent companies, sanctioned ultimate beneficial owners, and shared directors. KYP Graph Intelligence maps entity relationships in real time, exposing circular ownership and risk contagion across your merchant network.",
    bullets: [
      "Sub-second entity resolution connecting companies, directors, UBOs, and nested merchants",
      "Interactive graph canvas with smooth zoom, pan, hover node inspection, and risk filtering",
      "Visual contagion pathways revealing how a high-risk director impacts associated holding companies",
      "Identification of shared bank accounts, addresses, and IP blocks across seemingly unrelated accounts",
      "Color-coded risk status (Compliant, Requires Review, High Risk Alert) tied to official brand palette",
      "Contextual inspection drawer displaying parent companies, jurisdiction, registration date, and directorships",
    ],
    workflow: {
      steps: ["Ingest Entities", "Resolve Nodes", "Trace Pathways", "Surface Hidden Risk"],
      description: "Entity data mapped -> Multi-tier relationship graph rendered -> Contagion propagation computed -> Interactive analyst exploration",
    },
    metrics: [
      { label: "Entity Resolution", value: "<250ms" },
      { label: "Relationship Depth", value: "Unlimited" },
      { label: "Hidden UBO Detection", value: "100%" },
    ],
    interfaceType: "graph",
  },
  {
    id: "monitoring-alerts",
    anchor: "#monitoring-alerts",
    number: "04",
    title: "Continuous Monitoring & Alerts",
    badge: "Always-On Risk Surveillance",
    headline: "Stay Ahead of Changing Risks. Know When to Act.",
    subheading: "Move from point-in-time annual reviews to always-on surveillance. Receive immediate alerts when risk changes.",
    description: "Risk does not pause between annual reviews. Companies change directors, register new offshore holding companies, or receive regulatory enforcement actions overnight. KYP continuously monitors partner profiles and delivers targeted, policy-aligned alerts.",
    bullets: [
      "Always-on tracking of company status, registry filings, director appointments, and shareholding shifts",
      "Continuous screening against newly added global sanctions lists, PEP databases, and adverse news",
      "WebCompli monitoring alerting on altered website terms, broken merchant sites, or illicit product additions",
      "Regulatory restriction tracking and potential exposure to unauthorized or blacklisted jurisdictions",
      "Configurable monitoring cadences and alert thresholds matched directly to your risk management policies",
      "Prioritised alert triage with rich supporting evidence so analysts immediately understand why an alert fired",
    ],
    workflow: {
      steps: ["Monitor", "Alert", "Investigate", "Act"],
      description: "24/7 background sentinel -> Policy-driven alert triggered -> Unified analyst workspace -> Fast remediation or escalation",
    },
    metrics: [
      { label: "Surveillance Cadence", value: "24/7/365" },
      { label: "Alert Latency", value: "Real-time" },
      { label: "False Alarm Reduction", value: "65%" },
    ],
    interfaceType: "monitoring",
  },
  {
    id: "evidence-decisions",
    anchor: "#evidence-decisions",
    number: "05",
    title: "Investigations & Audit Reporting",
    badge: "Audit-Ready in 60 Seconds",
    headline: "Every Check. Every Decision. One Audit Trail.",
    subheading: "See the evidence. Trace your decisions. Generate regulator-ready compliance audit reports in seconds.",
    description: "Preparing for regulatory audits or sponsor bank reviews traditionally requires weeks of scouring emails, taking manual screenshots, and assembling scattered PDF files. KYP immutably records every check, finding, and analyst sign-off into an instant, exportable audit dossier.",
    bullets: [
      "Comprehensive unified file: Onboarding questionnaires, verified uploads, external screening, and alerts",
      "Full evidentiary backing with raw data snapshots, timestamps, and provider origin metadata",
      "Chronological activity history recording every analyst review, approval, rejection, and rationale",
      "Tamper-evident logs satisfying FCA, PRA, and European regulatory standards",
      "One-click audit report generation producing structured PDF and JSON packages in approximately one minute",
      "Elimination of manual screenshot collection, freeing up senior compliance resources for strategic governance",
    ],
    workflow: {
      steps: ["Investigate", "Decide", "Record", "Report"],
      description: "Centralized dossier review -> Documented risk decision -> Immutable timestamp recorded -> Instant one-click audit export",
    },
    metrics: [
      { label: "Audit Report Generation", value: "60 Seconds" },
      { label: "Audit Prep Savings", value: "Weeks to Mins" },
      { label: "Regulatory Defensibility", value: "100%" },
    ],
    interfaceType: "evidence",
  },
];
