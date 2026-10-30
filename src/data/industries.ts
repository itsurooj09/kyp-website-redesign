import { routes } from "@/lib/routes";

export interface IndustryItem {
  id: string;
  name: string;
  href: string;
  shortDescription: string;
  fullDescription: string;
  tagline: string;
  challenges: string[];
  capabilities: string[];
  metrics: { label: string; value: string }[];
  icon: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "igaming",
    name: "iGaming & Gambling",
    href: routes.igaming,
    tagline: "Automate partner due diligence, affiliate tracking, and continuous regulatory oversight.",
    shortDescription: "Protect licences, monitor complex affiliate marketing networks, and continuously screen partners against gambling blacklists and sanction lists.",
    fullDescription: "Online gaming operators navigate strict regulatory scrutiny across multi-jurisdictional licensing frameworks. KYP provides automated merchant and affiliate vetting, licence status verification, and real-time alerts on corporate ownership shifts.",
    challenges: [
      "Frequent changes in affiliate ownership and undisclosed cross-licensing arrangements",
      "Manual verification of complex multi-tier operator corporate structures",
      "Unauthorised promotion in restricted jurisdictions causing regulatory fines",
      "Point-in-time annual audits missing interim licence revocations",
    ],
    capabilities: [
      "Continuous affiliate website and marketing compliance surveillance",
      "Automated beneficial ownership graph mapping and PEP/Sanction screening",
      "Real-time alerts on regulatory enforcement actions and licence suspensions",
      "Mastercard BRAM and Visa VIRP risk identification before scheme inquiries",
    ],
    metrics: [
      { label: "Audit Preparation", value: "60 Sec" },
      { label: "Affiliate Visibility", value: "100%" },
      { label: "Policy Coverage", value: "24/7" },
    ],
    icon: "Gamepad2",
  },
  {
    id: "payments",
    name: "Payments & PSPs",
    href: routes.payments,
    tagline: "Real-time merchant portfolio monitoring, chargeback alerts, and scheme compliance.",
    shortDescription: "Proactively detect transaction laundering, merchant policy breaches, volumetric anomalies, and adverse media before card scheme fines hit.",
    fullDescription: "Payment service providers and ISOs face rising scheme fines and regulatory exposure from rogue merchants. KYP links merchant KYB onboarding with ongoing behavioural and transaction intelligence.",
    challenges: [
      "Undisclosed product line shifts into high-risk card scheme categories",
      "Sudden volumetric spikes and unusual refund or chargeback velocity",
      "Ghost websites and payment gateway hijacking",
      "Excessive manual due diligence time during merchant onboarding",
    ],
    capabilities: [
      "WebCompli automated crawler for terms, disclosures, and illegal goods",
      "Integrated transaction pattern anomaly detection and velocity thresholds",
      "Continuous screening of directors, UBOs, and adverse merchant media",
      "Instant audit export for sponsoring banks and acquiring partners",
    ],
    metrics: [
      { label: "Onboarding Speed", value: "10× Faster" },
      { label: "False Positives", value: "-65%" },
      { label: "Scheme Fines Avoided", value: "Zero BRAM" },
    ],
    icon: "CreditCard",
  },
  {
    id: "acquirers",
    name: "Acquirers / Agents / Intermediaries",
    href: routes.acquirers,
    tagline: "Oversight across third-party sales networks, agent risk, and nested merchant webs.",
    shortDescription: "Oversee payment facilitators, ISOs, sales agents, and nested merchant relationships throughout their entire operational lifecycle.",
    fullDescription: "Acquirers are held accountable for downstream partner conduct. KYP delivers unified portfolio oversight, tracking intermediary performance, contract compliance, and nested merchant exposure in one consolidated intelligence hub.",
    challenges: [
      "Lack of direct visibility into sub-merchant and agent sales tactics",
      "Fragmented data scattered across independent sales organisations",
      "Delayed discovery of agent reputational damage or regulatory probes",
      "Cumbersome periodic merchant file reassessments",
    ],
    capabilities: [
      "Multi-tier partner risk scoring and cascading risk alerts",
      "Automated document collection and validation for sub-agents",
      "Continuous screening of legal representatives and controlling entities",
      "Centralized evidence vault for compliance and partner reviews",
    ],
    metrics: [
      { label: "Intermediary Oversight", value: "360°" },
      { label: "Review Efficiency", value: "+80%" },
      { label: "Audit Readiness", value: "Instant" },
    ],
    icon: "Network",
  },
  {
    id: "banking",
    name: "Banking & Financial Services",
    href: routes.banking,
    tagline: "Connected financial crime intelligence, PEP screening, and continuous risk oversight.",
    shortDescription: "Strengthen institutional risk governance, automate KYB re-verification, and satisfy stringent FCA, PRA, and European regulatory standards.",
    fullDescription: "Banks and established financial institutions require resilient third-party risk management. KYP integrates seamlessly with core banking systems to transform static periodic reviews into active, automated risk intelligence.",
    challenges: [
      "Disparate legacy databases preventing single-view corporate risk analysis",
      "High operational expense and FTE burn rate on manual periodic reviews",
      "Regulatory enforcement on failure to identify hidden beneficial owners",
      "Audit preparation taking up to three weeks per department",
    ],
    capabilities: [
      "Agentic entity resolution linking disparate international company registries",
      "Continuous adverse media scanning across 100+ languages and legal gazettes",
      "Configurable escalation paths matched to internal risk management frameworks",
      "Tamper-evident, timestamped decision and investigation logs",
    ],
    metrics: [
      { label: "FTE Time Saved", value: "70%" },
      { label: "Audit Timeline", value: "1 Minute" },
      { label: "Registry Feeds", value: "Global" },
    ],
    icon: "Building2",
  },
  {
    id: "fintech",
    name: "Fintech",
    href: routes.fintech,
    tagline: "High-velocity compliance automation, API-first risk feeds, and scalable KYB.",
    shortDescription: "Scale rapidly without compromising regulatory standards. Embed AI onboarding, automated corporate screening, and continuous partner monitoring.",
    fullDescription: "Fast-moving fintechs cannot afford cumbersome manual review queues that bottleneck customer growth. KYP provides developer-friendly APIs and pre-configured workflows to automate partner qualification and continuous risk monitoring.",
    challenges: [
      "High drop-off rates on outdated, multi-day onboarding questionnaires",
      "Balancing rapid user growth with sponsor bank compliance expectations",
      "Evolving AML / CTF regulations across cross-border expansion markets",
      "Resource constraints within internal compliance teams",
    ],
    capabilities: [
      "AI-driven instant document verification and field extraction",
      "Real-time watchlist, sanctions, and PEP screening at submission",
      "Always-on monitoring alerting on registry status or credit changes",
      "Modular webhooks for automated risk tiering and approval logic",
    ],
    metrics: [
      { label: "Time-to-Approve", value: "Under 1 Hr" },
      { label: "Partner Conversion", value: "+38%" },
      { label: "API Latency", value: "<150ms" },
    ],
    icon: "Zap",
  },
  {
    id: "marketplaces",
    name: "Marketplaces & Platforms",
    href: routes.marketplaces,
    tagline: "Seller vetting, counterfeit risk detection, and illegal traffic surveillance.",
    shortDescription: "Maintain integrity across large seller bases. Uncover shell companies, fraudulent merchants, and prohibited goods before brand reputational fallout.",
    fullDescription: "Two-sided platforms must verify thousands of global merchants while preventing bad actors from exploiting buyer trust. KYP monitors vendor digital footprints, legal entities, and operational authenticity continuously.",
    challenges: [
      "Proliferation of ephemeral shell companies and duplicate seller profiles",
      "Prohibited merchandise listings and undisclosed jurisdictional sales",
      "Reputational harm from high-profile marketplace fraud",
      "High volume of inbound seller documentation requiring rapid validation",
    ],
    capabilities: [
      "Automated cross-checking of registry filings against seller submissions",
      "WebCompli website and product offering compliance verification",
      "Detection of linked merchant accounts sharing common directors or bank details",
      "Streamlined seller portal with real-time document correction guidance",
    ],
    metrics: [
      { label: "Fraud Reduction", value: "85%" },
      { label: "Review Backlog", value: "Eliminated" },
      { label: "Global Reach", value: "180+ Countries" },
    ],
    icon: "ShoppingBag",
  },
];
