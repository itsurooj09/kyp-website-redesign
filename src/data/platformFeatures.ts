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
    headline: "Onboard 10× faster. Resolve document issues before submission.",
    subheading: "KYP uses AI to check documents as business partners complete their onboarding questionnaires, helping them resolve issues before submission and reducing the back-and-forth your team needs to manage.",
    description: "Set the checks and submission requirements that match your onboarding policies. Help partners understand what needs correcting while they complete the questionnaire, rather than discovering problems after submission. Bring their answers, documents and verification findings together for review, with your team retaining control of approval decisions.",
    bullets: [
      "Questionnaires and document requirements tailored to your policies",
      "AI checks that assess documents against your configured requirements",
      "Clear feedback that helps partners correct issues before submission",
      "Automatically populated onboarding questionnaires using information extracted from uploaded documents",
      "Discrepancies flagged between documents, questionnaire answers and business registry records",
    ],
    workflow: {
      steps: ["Collect", "Check", "Resolve", "Submit"],
      description: "Help partners get it right before submission. Reduce follow-ups. Accelerate onboarding.",
    },
    metrics: [
      { label: "Onboarding Speed", value: "10× Faster" },
      { label: "Submission Quality", value: "First-Time Right" },
      { label: "Approval Authority", value: "100% Team Control" },
    ],
    interfaceType: "onboarding",
  },
  {
    id: "data-integrations",
    anchor: "#data-integrations",
    number: "02",
    title: "Data & Integrations",
    badge: "Unified Risk Aggregation",
    headline: "Bring your data together. Build a 360° view of risk.",
    subheading: "Bring together information from your business partners, external sources and internal systems to verify onboarding answers, identify discrepancies and build a consolidated risk assessment.",
    description: "Cross-check onboarding answers against external and internal data to flag inconsistencies and missing information. Bring the findings and supporting evidence together in a single risk report. Keep assessments current with updated information and monitoring configured around your policies.",
    bullets: [
      "Business information, onboarding questionnaires and supporting documents",
      "Company registry, sanctions, PEP and adverse media information from leading providers",
      "Data from your internal systems",
      "Website compliance findings, regulatory restrictions and potential exposure to prohibited markets",
      "Merchant transaction trends and real-time transaction monitoring",
      "Cyber-risk and dark-web intelligence from connected providers",
    ],
    workflow: {
      steps: ["Connect", "Cross-reference", "Assess", "Monitor"],
      description: "Verify information. Surface discrepancies. Identify and act on risks.",
    },
    metrics: [
      { label: "Data Consolidation", value: "360° View" },
      { label: "Registry & Screening", value: "Global Feeds" },
      { label: "Assessment Cadence", value: "Policy-Aligned" },
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
    headline: "Stay ahead of changing risks. Know when to act.",
    subheading: "Monitor changes in your business partners' risk profiles, websites and transaction activity according to your risk management policies. Enable your team to identify emerging risks and prioritise investigations by risk level.",
    description: "Configure monitoring frequencies and alert conditions to match your risk management policies. Track merchant trends over time and flag suspicious transaction activity as it occurs where transaction data is integrated. Receive alerts when new risks are detected, with supporting information to investigate findings and decide what action to take.",
    bullets: [
      "Changes in company information, sanctions, PEP status, regulatory enforcement actions and adverse media",
      "Website content, policies and ownership changes",
      "Regulatory restrictions and potential exposure to prohibited markets",
      "Merchant transaction patterns and real-time transaction signals",
      "Configurable monitoring frequencies and alert conditions to match your risk management policies",
      "Supporting information to investigate findings and decide what action to take",
    ],
    workflow: {
      steps: ["Monitor", "Alert", "Investigate", "Act"],
      description: "Detect changes. Respond to emerging risks.",
    },
    metrics: [
      { label: "Surveillance Cadence", value: "Always-On" },
      { label: "Risk Prioritisation", value: "By Risk Level" },
      { label: "Action Readiness", value: "Context-Rich" },
    ],
    interfaceType: "monitoring",
  },
  {
    id: "evidence-decisions",
    anchor: "#evidence-decisions",
    number: "05",
    title: "Investigations & Audit Reporting",
    badge: "Audit-Ready in Seconds",
    headline: "See the evidence. Trace your decisions. Be audit-ready.",
    subheading: "KYP brings together the due diligence, monitoring findings and actions taken on each business partner, helping your team investigate risks, document decisions and generate audit-ready reports in seconds.",
    description: "Review risks and the evidence behind them. Record your decisions and the reasoning behind them. Generate a single audit-ready report covering onboarding, due diligence, ongoing monitoring and periodic reviews.",
    bullets: [
      "Onboarding answers, uploaded documents and verification findings",
      "External screening results and their supporting sources",
      "Monitoring alerts and changes in identified risks",
      "Reviews, approvals, rejections and the reasons behind those decisions",
      "A history of actions taken on each entity",
      "Single audit-ready report covering onboarding, due diligence, ongoing monitoring and periodic reviews",
    ],
    workflow: {
      steps: ["Investigate", "Decide", "Record", "Report"],
      description: "Log every check, decision and action. Produce audit-ready reports in seconds.",
    },
    metrics: [
      { label: "Report Generation", value: "Seconds" },
      { label: "Audit Defense", value: "Comprehensive" },
      { label: "Decision Trail", value: "100% Traceable" },
    ],
    interfaceType: "evidence",
  },
];
