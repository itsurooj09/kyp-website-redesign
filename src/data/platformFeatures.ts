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
    title: "AI-Powered Business Onboarding",
    badge: "Smart Intake & Validation",
    headline: "Check Documents. Reduce Manual Work. Onboard Faster.",
    subheading: "KYP uses AI to check documents and populate questionnaires, bringing document collection, AML screening and due diligence reporting into one KYB process.",
    description: "Your partners upload the required documents, receive instant feedback and complete only the missing information. Clear onboarding reporting helps identify issues, reduce drop-off and accelerate approvals with comprehensive due diligence dossiers.",
    bullets: [
      "Custom AI rules to assess document validity before submission",
      "Instant feedback on incorrect, outdated or improperly certified documents",
      "Questionnaires automatically populated from uploaded documents",
      "Sanctions, PEP and adverse media screening for declared entities",
      "Clear onboarding reporting to reduce drop-off and accelerate approvals",
      "Exportable audit trails covering due diligence and ongoing continuous monitoring",
    ],
    workflow: {
      steps: ["Upload", "Validate", "Screen", "Report", "Audit"],
      description: "Upload documents -> Instant AI validity feedback -> Automated AML screening -> Clear due diligence reports -> Transition to continuous monitoring audit ledger",
    },
    metrics: [
      { label: "Onboarding Speed", value: "10× Faster" },
      { label: "Operational Overhead", value: "Lower" },
      { label: "Audit Readiness", value: "Complete" },
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
    title: "KYP Continuous Monitoring",
    badge: "Always-On Risk Surveillance",
    headline: "Know When Risk Changes: Not at the Next Review",
    subheading: "KYP continuously monitors your customers, merchants, partners and third parties for changes in risk, moving compliance teams away from point-in-time reviews towards always-on monitoring.",
    description: "Instead of waiting for an annual or periodic review, KYP automatically identifies changes across your portfolio and brings the important ones to your attention: What changed. Why it matters. Who requires review. What action was taken. The evidence behind every decision.",
    bullets: [
      "Continuous screening for sanctions, PEP status, and adverse media",
      "Director, beneficial ownership, and corporate registry status change alerts",
      "Licences, regulatory permissions, and enforcement action tracking",
      "Website compliance through WebCompli (prohibited content, BRAM & VIRP risks)",
      "Regulatory blacklists and official registries exposure",
      "ESG-related risk indicators and transaction/behavioural signals",
      "Configurable monitoring at Customer, Merchant, Transaction, and Portfolio levels",
    ],
    workflow: {
      steps: ["Detect", "Assess", "Prioritise", "Investigate", "Audit"],
      description: "Detect new risks -> Assess with internal policy rules -> Prioritise accounts needing attention -> Investigate with rich evidence -> Audit in seconds",
    },
    metrics: [
      { label: "Surveillance Cadence", value: "Always-On" },
      { label: "Configurable Tiers", value: "Customer · Merchant · Portfolio" },
      { label: "Audit Reports", value: "Instant" },
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
