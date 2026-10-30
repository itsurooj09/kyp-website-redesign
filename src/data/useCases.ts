import { routes } from "@/lib/routes";

export interface UseCaseWorkflowStep {
  step: string;
  title: string;
  description: string;
  highlight: string;
  uiDetail: {
    label: string;
    value: string;
    status: "success" | "warning" | "alert" | "info";
  };
}

export interface UseCaseDetail {
  slug: string;
  title: string;
  headline: string;
  subheading: string;
  supportingText: string;
  href: string;
  isImplemented: boolean;
  shortDescription: string;
  icon: string;
  category: "onboarding" | "monitoring" | "compliance" | "reporting";
  problem: {
    title: string;
    description: string;
    points: { title: string; desc: string }[];
  };
  solution: {
    title: string;
    description: string;
    points: { title: string; desc: string }[];
  };
  workflow: UseCaseWorkflowStep[];
  features: { title: string; description: string; icon: string }[];
  benefits: { title: string; description: string; metric?: string }[];
  cta: {
    headline: string;
    buttonText: string;
  };
  interfaceMockup: {
    type: "onboarding" | "aml" | "monitoring" | "audit";
    title: string;
    subtitle: string;
  };
}

export const useCasesData: UseCaseDetail[] = [
  {
    slug: "onboarding",
    title: "AI-Powered Business Onboarding",
    headline: "AI-Powered Business Onboarding",
    subheading: "Onboard 10× Faster. Resolve Document Issues Before Submission.",
    supportingText: "KYP uses AI to check documents as business partners complete their onboarding questionnaires, helping them resolve issues before submission and reducing the back-and-forth your team needs to manage.",
    href: routes.onboarding,
    isImplemented: true,
    category: "onboarding",
    icon: "UserCheck",
    shortDescription: "Check documents, validate information against registry records, and resolve issues before submission to eliminate review backlogs.",
    problem: {
      title: "Why Traditional KYB Onboarding Breaks Down",
      description: "Manual document collection and fragmented review tools cause severe onboarding friction, delayed revenue, and compliance blind spots.",
      points: [
        {
          title: "Manual Document Collection",
          desc: "Compliance analysts spend days chasing partners via unsecure email threads for outdated utility bills or incomplete incorporation filings.",
        },
        {
          title: "Repeated Follow-ups & Drop-off",
          desc: "Business partners get frustrated by slow multi-stage review cycles, leading to abandoned applications and lost commercial momentum.",
        },
        {
          title: "Inconsistent Data & Discrepancies",
          desc: "Information entered into forms frequently contradicts official business registry filings, certified articles of association, or bank statements.",
        },
        {
          title: "Review Delays & Bottlenecks",
          desc: "Compliance teams face backlogs of low-quality submissions that must be manually parsed, formatted, and verified one by one.",
        },
      ],
    },
    solution: {
      title: "The KYP Intelligent Onboarding Solution",
      description: "KYP transforms onboarding into an interactive, AI-guided experience where partners resolve issues before human review even begins.",
      points: [
        {
          title: "Policy-Tailored Questionnaires",
          desc: "Dynamic smart forms adapt question sets and required evidence to your internal risk tolerance, partner type, and operational jurisdiction.",
        },
        {
          title: "Instant AI Document Validation",
          desc: "Proprietary AI analyzes uploaded passports, bank proofs, and corporate certificates instantly, verifying validity, freshness, and legibility.",
        },
        {
          title: "Automated Questionnaire Population",
          desc: "Data extracted directly from verified business registry filings and uploaded PDF records automatically populates corresponding form fields.",
        },
        {
          title: "Real-Time Discrepancy Highlighting",
          desc: "Flags variances between declared partner answers, scanned documents, and official national registries before submission occurs.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Collect",
        description: "Partner accesses branded smart portal with custom questionnaires matched to your compliance policy.",
        highlight: "Dynamic document requirements",
        uiDetail: {
          label: "Document Ingestion",
          value: "Articles of Association & UBO IDs",
          status: "info",
        },
      },
      {
        step: "02",
        title: "Check",
        description: "Agentic AI inspects documents in real time, validating authenticity, issue dates, and jurisdictional compliance.",
        highlight: "Zero wait OCR & verification",
        uiDetail: {
          label: "AI Verification Check",
          value: "Validation complete (99.4% confidence)",
          status: "success",
        },
      },
      {
        step: "03",
        title: "Resolve",
        description: "Partners receive instant actionable feedback to correct expired documents or address missing disclosures prior to submission.",
        highlight: "Self-service resolution loop",
        uiDetail: {
          label: "Discrepancy Resolver",
          value: "Proof of address updated by applicant",
          status: "warning",
        },
      },
      {
        step: "04",
        title: "Submit",
        description: "Your compliance team receives clean, fully verified, audit-ready submission dossiers ready for final human sign-off.",
        highlight: "Human-in-the-loop governance",
        uiDetail: {
          label: "Final Dossier",
          value: "Ready for Approval • Full Audit Trail",
          status: "success",
        },
      },
    ],
    features: [
      {
        title: "AI Document Validation",
        description: "Assess corporate certificates, director IDs, and proof of address against configured regulatory requirements in seconds.",
        icon: "FileCheck",
      },
      {
        title: "Configurable Onboarding Rules",
        description: "Set custom criteria, thresholds, and evidence demands that strictly align with your institution's compliance policies.",
        icon: "Sliders",
      },
      {
        title: "Automated Questionnaire Population",
        description: "Automatically extract and populate verified entity details to save applicants time and prevent typographical errors.",
        icon: "FormInput",
      },
      {
        title: "Missing Document Detection",
        description: "Immediately alert applicants if mandatory files are missing or do not fulfill jurisdictional requirements.",
        icon: "AlertCircle",
      },
      {
        title: "Document Discrepancy Checks",
        description: "Automatically cross-check data across multiple documents, questionnaire responses, and corporate registry filings.",
        icon: "GitCompare",
      },
      {
        title: "Business Registry Cross-Checks",
        description: "Direct real-time API verification against official company houses and registries across 180+ global jurisdictions.",
        icon: "Building",
      },
      {
        title: "Due Diligence Reporting",
        description: "Generate comprehensive, structured KYB dossiers ready for compliance officers, MLROs, and sponsor bank audits.",
        icon: "FileText",
      },
      {
        title: "Tamper-Evident Audit Trails",
        description: "Maintain a legally robust, timestamped log of every document version, user edit, and validation check.",
        icon: "ShieldCheck",
      },
    ],
    benefits: [
      {
        title: "Reduce Follow-Ups by 80%",
        description: "Partners fix omissions in real time rather than exchanging weeks of email queries with compliance analysts.",
        metric: "80% Less Chasing",
      },
      {
        title: "10× Faster Time-to-Onboard",
        description: "Accelerate standard corporate onboarding from 14+ business days down to under 24 hours.",
        metric: "10× Faster",
      },
      {
        title: "Eliminate Manual Review Delays",
        description: "Automate repetitive data cross-referencing so analysts focus exclusively on high-risk judgment calls.",
        metric: "Zero Backlog",
      },
      {
        title: "Total Human-in-the-Loop Control",
        description: "AI assists with validation and discrepancy detection, but your team retains full sovereign authority over approvals.",
        metric: "100% Control",
      },
    ],
    cta: {
      headline: "Help Partners Get It Right Before Submission.",
      buttonText: "Book an Onboarding Demo",
    },
    interfaceMockup: {
      type: "onboarding",
      title: "KYP Smart Onboarding Ingestion & AI Verification",
      subtitle: "Live partner submission inspection with real-time registry cross-matching",
    },
  },

  {
    slug: "anti-money-laundering",
    title: "Anti Money Laundering (AML) Monitoring",
    headline: "Anti-Money Laundering Monitoring",
    subheading: "Detect Suspicious Activity. Prevent Financial Crime. Stay Compliant.",
    supportingText: "KYP helps iGaming operators and payment companies identify, investigate and reduce money laundering risks through AI-powered onboarding, continuous monitoring and transaction intelligence within one platform.",
    href: routes.aml,
    isImplemented: true,
    category: "compliance",
    icon: "ShieldAlert",
    shortDescription: "Continuous PEP, sanctions, adverse media, and beneficial ownership monitoring with integrated transaction pattern alerts.",
    problem: {
      title: "The Growing Challenge of AML & Financial Crime",
      description: "Criminal networks exploit fragmented screening tools, undisclosed ownership changes, and point-in-time reviews to route illicit funds.",
      points: [
        {
          title: "Fragmented Screening Systems",
          desc: "Sanctions, PEP screening, transaction monitoring, and corporate registry checks reside in siloed databases with no unified context.",
        },
        {
          title: "Post-Onboarding Risk Drift",
          desc: "A partner approved as low-risk may subsequently add sanctioned directors, enter high-risk jurisdictions, or face adverse media unnoticed.",
        },
        {
          title: "Concealed Beneficial Ownership",
          desc: "Criminals use multi-layered corporate shell structures, nominee directors, and offshore holding entities to hide true controllers.",
        },
        {
          title: "Costly Regulatory Penalties",
          desc: "Regulators penalize institutions heavily for failing to demonstrate ongoing proactive monitoring across merchant networks.",
        },
      ],
    },
    solution: {
      title: "Connected, Proactive AML Risk Intelligence",
      description: "KYP combines upfront verification, real-time watchlist screening, ownership graph tracking, and transaction anomaly detection into a single command center.",
      points: [
        {
          title: "AI-Powered Initial Verification",
          desc: "Verify corporate entities, controlling individuals, ownership structures, and source-of-risk indicators before approving relationships.",
        },
        {
          title: "Always-On Watchlist Surveillance",
          desc: "Continuous automated scanning across global sanctions (OFAC, EU, UN, HMT), Politically Exposed Persons (PEPs), and regulatory blacklists.",
        },
        {
          title: "Continuous Ownership Tracking",
          desc: "Receive immediate alerts whenever a partner undergoes corporate restructure, director resignation, or beneficial ownership changes.",
        },
        {
          title: "Integrated Transaction Intelligence",
          desc: "Where transaction data is integrated, detect layering, rapid velocity spikes, and structured payments tied to high-risk entities.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Onboard",
        description: "Perform comprehensive initial corporate diligence, verifying legal registration, licenses, and beneficial controllers.",
        highlight: "Automated UBO discovery",
        uiDetail: {
          label: "Initial Verification",
          value: "Clean KYB Dossier Generated",
          status: "success",
        },
      },
      {
        step: "02",
        title: "Screen",
        description: "Run automated checks against global sanctions lists, PEP registries, and international enforcement databases.",
        highlight: "Real-time watchlist matching",
        uiDetail: {
          label: "Sanctions / PEP Status",
          value: "0 Exact Matches • 1 Potential Near-Match (Cleared)",
          status: "success",
        },
      },
      {
        step: "03",
        title: "Monitor",
        description: "KYP continuously monitors the partner 24/7 for changes in registry filings, adverse news, and website compliance.",
        highlight: "Always-on surveillance",
        uiDetail: {
          label: "Continuous Monitor",
          value: "Live Sentinel Active across 180+ Registries",
          status: "info",
        },
      },
      {
        step: "04",
        title: "Investigate",
        description: "When risk triggers fire, compliance analysts review unified evidence, transaction context, and connected ownership nodes in one view.",
        highlight: "Graph-enabled investigations",
        uiDetail: {
          label: "Case Dossier #AML-4982",
          value: "Ownership Shift Detected: Requires Review",
          status: "warning",
        },
      },
      {
        step: "05",
        title: "Audit",
        description: "Export timestamped, tamper-evident regulatory compliance packages in under 60 seconds with complete decision history.",
        highlight: "Instant regulator ready",
        uiDetail: {
          label: "SAR / Audit Export",
          value: "Full PDF & JSON Evidence Pack Generated",
          status: "success",
        },
      },
    ],
    features: [
      {
        title: "Business & Individual Verification",
        description: "Cross-reference corporate records and individual director identities against official government databases.",
        icon: "UserCheck",
      },
      {
        title: "Ownership Structure Checks",
        description: "Unravel complex corporate nesting to reveal Ultimate Beneficial Owners (UBOs) holding 10% or 25%+ equity.",
        icon: "Network",
      },
      {
        title: "Sanctions & PEP Screening",
        description: "Continuous real-time matching against OFAC, EU, UN, UK HMT, and hundreds of global regulatory watchlists.",
        icon: "ShieldAlert",
      },
      {
        title: "Adverse Media Monitoring",
        description: "Agentic natural language scanning across thousands of regional news outlets, legal filings, and financial gazettes.",
        icon: "Newspaper",
      },
      {
        title: "Director & Ownership Change Alerts",
        description: "Instant notification when companies file changes at Companies House or international commercial registries.",
        icon: "BellRing",
      },
      {
        title: "Integrated Transaction Anomaly Alerts",
        description: "Spot suspicious velocity bursts, round-number structuring, and sudden volume deviation where transaction feeds are connected.",
        icon: "Activity",
      },
      {
        title: "Configurable AML Thresholds",
        description: "Define distinct risk criteria, review cycles, and escalation chains across different risk tiers and jurisdictions.",
        icon: "SlidersHorizontal",
      },
      {
        title: "Audit-Ready Evidence Trail",
        description: "Every check, match resolution, and analyst decision is recorded immutably with timestamped evidence.",
        icon: "FileCheck2",
      },
    ],
    benefits: [
      {
        title: "Identify Suspicious Behaviour Earlier",
        description: "Spot ownership mutations and adverse events immediately rather than waiting for annual retrospective reviews.",
        metric: "Real-Time Alerts",
      },
      {
        title: "Reduce Compliance Overhead",
        description: "Eliminate repetitive manual screening tasks with AI deduplication and automated false-positive reduction.",
        metric: "-65% False Alarms",
      },
      {
        title: "Adapt to Shifting AML Policies",
        description: "Adjust risk thresholds and screening rules instantly as international regulatory mandates evolve.",
        metric: "Agile Governance",
      },
      {
        title: "Strengthen Regulatory Credibility",
        description: "Provide regulators, acquiring banks, and auditors with complete, defensible evidence trails on demand.",
        metric: "Audit Ready in 1 Min",
      },
    ],
    cta: {
      headline: "Strengthen AML Controls Across Your Portfolio.",
      buttonText: "Schedule an AML Demo",
    },
    interfaceMockup: {
      type: "aml",
      title: "KYP Unified AML Sentinel & Beneficial Ownership Graph",
      subtitle: "Continuous PEP/Sanction screening with connected risk indicators",
    },
  },

  // Remaining 8 use cases configured cleanly for menu, homepage cards, and future routes:
  {
    slug: "portfolio-issuing-monitoring",
    title: "Portfolio Issuing Monitoring",
    headline: "Complete Visibility for Issuing Programmes",
    subheading: "Monitor What Matters Across Your Entire Card Issuing Ecosystem",
    supportingText: "KYP gives issuers a single view across their entire portfolio, combining compliance, transactional and operational risk in one place.",
    href: routes.issuingMonitoring,
    isImplemented: false,
    category: "monitoring",
    icon: "CreditCard",
    shortDescription: "Track volumetric spikes, TC40 fraud files, chargeback thresholds, and merchant behavioural risk across card issuing programmes.",
    problem: { title: "", description: "", points: [] },
    solution: { title: "", description: "", points: [] },
    workflow: [],
    features: [],
    benefits: [],
    cta: { headline: "See Risk Across Your Entire Portfolio", buttonText: "Book a Demo" },
    interfaceMockup: { type: "monitoring", title: "Issuing Portfolio Risk Tracker", subtitle: "Live chargeback & TC40 monitoring" },
  },

  {
    slug: "automated-policy-rules",
    title: "Automated Policy Continuous Monitoring Rules",
    headline: "Monitoring That Matches Your Policies",
    subheading: "Configurable Rules, Frequencies, and Risk Thresholds",
    supportingText: "Configure monitoring logic to reflect your specific compliance framework. Set custom monitoring cadences and alert escalation paths.",
    href: routes.automatedPolicyRules,
    isImplemented: false,
    category: "compliance",
    icon: "Sliders",
    shortDescription: "Tailor monitoring frequencies, alert triggers, and risk score thresholds to match your organisation's precise risk appetites.",
    problem: { title: "", description: "", points: [] },
    solution: { title: "", description: "", points: [] },
    workflow: [],
    features: [],
    benefits: [],
    cta: { headline: "Align Compliance With Your Risk Model", buttonText: "Book a Demo" },
    interfaceMockup: { type: "monitoring", title: "Policy Rule Matrix", subtitle: "Custom threshold & trigger engine" },
  },

  {
    slug: "website-compliance",
    title: "Website Compliance",
    headline: "Website Compliance Screening & Monitoring",
    subheading: "Find Disclosure Gaps. Flag Risky Content. Track Website Changes.",
    supportingText: "KYP automates merchant website screening and ongoing monitoring to support Mastercard BRAM and Visa VIRP compliance reviews, helping your team reduce fines.",
    href: routes.websiteCompliance,
    isImplemented: false,
    category: "compliance",
    icon: "Globe",
    shortDescription: "WebCompli crawler detects prohibited products, missing T&Cs, regulatory warnings, and undisclosed merchant content changes.",
    problem: { title: "", description: "", points: [] },
    solution: { title: "", description: "", points: [] },
    workflow: [],
    features: [],
    benefits: [],
    cta: { headline: "Protect Against Scheme Fines", buttonText: "Book a Demo" },
    interfaceMockup: { type: "monitoring", title: "WebCompli Scanner", subtitle: "BRAM & VIRP automated analysis" },
  },

  {
    slug: "transaction-monitoring",
    title: "Transaction Monitoring",
    headline: "Transaction Monitoring & Anomaly Detection",
    subheading: "Spot Suspicious Activity. Investigate Faster. Report with Confidence.",
    supportingText: "KYP brings your customer and transaction data together in one platform, helping payment providers identify anomalies as they happen.",
    href: routes.transactionMonitoring,
    isImplemented: false,
    category: "monitoring",
    icon: "Activity",
    shortDescription: "Integrated transaction pattern anomaly detection, velocity spikes, and payment behaviour tracking where transaction feeds connect.",
    problem: { title: "", description: "", points: [] },
    solution: { title: "", description: "", points: [] },
    workflow: [],
    features: [],
    benefits: [],
    cta: { headline: "Detect Suspicious Patterns in Real Time", buttonText: "Book a Demo" },
    interfaceMockup: { type: "monitoring", title: "Transaction Feed Surveillance", subtitle: "Real-time payment stream analysis" },
  },

  {
    slug: "illegal-traffic-detection",
    title: "Illegal Website Traffic Detection",
    headline: "Regulatory Blacklist & Illegal Traffic Monitoring",
    subheading: "Detect Traffic From Prohibited Jurisdictions & Sanctioned Markets",
    supportingText: "Proactively identify whether merchant web assets are receiving unauthorized incoming traffic from blacklisted regions or sanctioned regimes.",
    href: routes.illegalTrafficDetection,
    isImplemented: false,
    category: "monitoring",
    icon: "ShieldBan",
    shortDescription: "Identify prohibited markets, regulatory blacklists, proxy routing, and illegal traffic streams putting licences at risk.",
    problem: { title: "", description: "", points: [] },
    solution: { title: "", description: "", points: [] },
    workflow: [],
    features: [],
    benefits: [],
    cta: { headline: "Prevent Jurisdictional Breaches", buttonText: "Book a Demo" },
    interfaceMockup: { type: "monitoring", title: "Traffic Geo-Fence Inspector", subtitle: "Jurisdictional flow analysis" },
  },

  {
    slug: "esg-ai-alerting",
    title: "ESG AI Alerting",
    headline: "ESG Monitoring with Agentic AI",
    subheading: "Real-Time Tracking of Environmental, Social & Governance Risks",
    supportingText: "Empower risk leaders to surface emerging ESG controversies, greenwashing claims, and corporate governance infractions across third parties.",
    href: routes.esgAlerting,
    isImplemented: false,
    category: "monitoring",
    icon: "Leaf",
    shortDescription: "Agentic AI screening for environmental fines, modern slavery warnings, governance scandals, and supply-chain ESG exposure.",
    problem: { title: "", description: "", points: [] },
    solution: { title: "", description: "", points: [] },
    workflow: [],
    features: [],
    benefits: [],
    cta: { headline: "Monitor Third-Party ESG Integrity", buttonText: "Book a Demo" },
    interfaceMockup: { type: "monitoring", title: "ESG Controversy Radar", subtitle: "Multi-pillar ESG risk score" },
  },

  {
    slug: "enhanced-compliance",
    title: "Enhanced Compliance",
    headline: "Enhanced Due Diligence (EDD) Made Simple",
    subheading: "Deeper Corporate Investigations Without Operational Gridlock",
    supportingText: "Accelerate EDD for high-risk accounts. Unravel complex offshore trusts, state-owned enterprises, and PEP networks with automated dossiers.",
    href: routes.enhancedCompliance,
    isImplemented: false,
    category: "compliance",
    icon: "FileSearch",
    shortDescription: "Streamlined EDD workflows, sovereign wealth checks, and complex cross-border ownership unbundling for high-risk accounts.",
    problem: { title: "", description: "", points: [] },
    solution: { title: "", description: "", points: [] },
    workflow: [],
    features: [],
    benefits: [],
    cta: { headline: "Simplify Enhanced Due Diligence", buttonText: "Book a Demo" },
    interfaceMockup: { type: "audit", title: "EDD Investigation Workspace", subtitle: "Deep corporate dossier analysis" },
  },

  {
    slug: "instant-audit-reporting",
    title: "Instant Audit Ready Reporting",
    headline: "Audit-Ready in 1 Minute",
    subheading: "Turn Weeks of Audit Preparation Into Seconds",
    supportingText: "KYP automatically captures the evidence behind your compliance checks, monitoring and decisions, so audit-ready reports can be generated in around one minute.",
    href: routes.instantAuditReporting,
    isImplemented: false,
    category: "reporting",
    icon: "FileCheck",
    shortDescription: "Transform weeks of manual evidence compilation into exportable, regulator-ready compliance audit packs generated in under 60 seconds.",
    problem: { title: "", description: "", points: [] },
    solution: { title: "", description: "", points: [] },
    workflow: [],
    features: [],
    benefits: [],
    cta: { headline: "Be Audit-Ready on Demand", buttonText: "Book a Demo" },
    interfaceMockup: { type: "audit", title: "Audit Dossier Generator", subtitle: "Timestamped compliance evidence report" },
  },
];
