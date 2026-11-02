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
    subheading: "Check documents. Reduce manual work. Onboard faster.",
    supportingText: "KYP uses AI to check documents and populate questionnaires, bringing document collection, AML screening and due diligence reporting into one Know Your Business (KYB) process.",
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
      title: "Onboarding Built Around Your Requirements",
      description: "Streamline your onboarding process with custom AI rules, instant partner feedback, and seamless transition to continuous risk monitoring.",
      points: [
        {
          title: "Custom AI Document Rules",
          desc: "Assess document validity before submission with instant feedback on incorrect, outdated or improperly certified documents.",
        },
        {
          title: "Automated Questionnaire Population",
          desc: "Questionnaires automatically populated from uploaded documents and official company registry records.",
        },
        {
          title: "Sanctions, PEP & Adverse Media Screening",
          desc: "Automated screening for declared entities and associated individuals during intake.",
        },
        {
          title: "Exportable Due Diligence & Audit Trails",
          desc: "Generate comprehensive due diligence reports, with all onboarding and ongoing monitoring activity recorded against each entity.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Upload",
        description: "Partners upload required corporate documents, certificates, and director identifications.",
        highlight: "Smart document intake",
        uiDetail: {
          label: "Document Ingestion",
          value: "Articles & Proof of Address Received",
          status: "info",
        },
      },
      {
        step: "02",
        title: "Validate",
        description: "Custom AI rules inspect documents in real time, delivering instant feedback on invalid or outdated files.",
        highlight: "Instant validation feedback",
        uiDetail: {
          label: "AI Verification Check",
          value: "Validity Confirmed (99.4% confidence)",
          status: "success",
        },
      },
      {
        step: "03",
        title: "Screen",
        description: "Automated PEP, sanctions, and adverse media screening across all declared entities and beneficial owners.",
        highlight: "Integrated financial crime screening",
        uiDetail: {
          label: "AML Screening",
          value: "0 Sanction Matches • Clear",
          status: "success",
        },
      },
      {
        step: "04",
        title: "Report",
        description: "Generate exportable due diligence reports with clear onboarding tracking to accelerate final approvals.",
        highlight: "Exportable KYB dossiers",
        uiDetail: {
          label: "Due Diligence Dossier",
          value: "Executive Summary Generated",
          status: "success",
        },
      },
      {
        step: "05",
        title: "Audit",
        description: "Once onboarded, entities transition into continuous monitoring with an immutable, tamper-evident audit log.",
        highlight: "Continuous compliance linkage",
        uiDetail: {
          label: "Audit Ledger",
          value: "Continuous Monitoring Active",
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
    headline: "See Risk Across Your Entire Portfolio",
    subheading: "Complete visibility for issuing programmes",
    supportingText: "KYP gives issuers a single view across their entire portfolio, combining compliance, transactional and operational risk in one place.",
    href: routes.issuingMonitoring,
    isImplemented: true,
    category: "monitoring",
    icon: "CreditCard",
    shortDescription: "Customer & merchant risk, volumetric changes, chargeback trends, TC40 file monitoring, and operational activity graphs.",
    problem: {
      title: "Fragmented Card Issuing Risk & Velocity Surprises",
      description: "Card issuers and programme managers juggle separated silos for transactional anomalies, chargeback thresholds, and merchant compliance.",
      points: [
        {
          title: "TC40 & Chargeback Thresholds",
          desc: "Sudden spikes in card fraud and chargeback ratios risking scheme sanctions.",
        },
        {
          title: "Volumetric & Transaction Drift",
          desc: "Unusual volume spikes and payment behaviour changes occurring unnoticed.",
        },
      ],
    },
    solution: {
      title: "One View Across Your Entire Issuing Portfolio",
      description: "KYP automatically surfaces risk changes, alerts, and accounts requiring attention with operational activity graphs and one-click audit reports.",
      points: [
        {
          title: "Monitor What Matters",
          desc: "Customer, merchant, chargeback, and TC40 trends combined with sanctions and behavioural risk.",
        },
        {
          title: "Portfolio Intelligence",
          desc: "Operational graphs, portfolio trends, and one-click audit reports.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Ingest",
        description: "Connect issuing portfolio feeds, card transactions, and merchant accounts.",
        highlight: "Unified ingestion",
        uiDetail: { label: "Portfolio Stream", value: "Active • 24/7 Monitoring", status: "success" },
      },
      {
        step: "02",
        title: "Monitor",
        description: "Track volumetric changes, TC40 fraud files, and chargeback velocity.",
        highlight: "Real-time thresholds",
        uiDetail: { label: "TC40 Ratio", value: "0.12% (Within Card Scheme Limits)", status: "success" },
      },
      {
        step: "03",
        title: "Prioritise",
        description: "Identify accounts requiring immediate compliance review and investigation.",
        highlight: "Smart triage",
        uiDetail: { label: "Alert Triage", value: "2 High-Velocity Accounts Flagged", status: "warning" },
      },
      {
        step: "04",
        title: "Audit",
        description: "One-click export of compliance, operational, and transactional audit trails.",
        highlight: "Instant reports",
        uiDetail: { label: "Export Status", value: "Audit Dossier Ready", status: "success" },
      },
    ],
    features: [
      {
        title: "Customer & Merchant Risk",
        description: "Combined compliance, transactional, and operational risk in one unified command center.",
        icon: "CreditCard",
      },
      {
        title: "Chargeback & TC40 Monitoring",
        description: "Track chargeback velocity and TC40 file warnings to stay well within scheme limits.",
        icon: "Activity",
      },
      {
        title: "Operational Activity Graphs",
        description: "Interactive visual analytics illustrating portfolio trends, volumetric velocity, and risk distribution.",
        icon: "Network",
      },
      {
        title: "One-Click Audit Reports",
        description: "Instant access to due diligence evidence, risk changes, and complete investigation trails.",
        icon: "FileCheck",
      },
    ],
    benefits: [
      {
        title: "Understand Activity & Identify Change",
        description: "Never miss sudden volumetric spikes or emerging merchant behavioural risk.",
      },
      {
        title: "Stay Audit-Ready",
        description: "Generate comprehensive reports for sponsor banks and regulators on demand.",
      },
    ],
    cta: { headline: "One View. Entire Portfolio.", buttonText: "Book an Issuing Demo" },
    interfaceMockup: { type: "monitoring", title: "Issuing Portfolio Risk Tracker", subtitle: "Live chargeback & TC40 monitoring" },
  },

  {
    slug: "automated-policy-rules",
    title: "Monitoring That Matches Your Policies",
    headline: "Monitoring That Matches Your Policies",
    subheading: "Your rules. Your portfolios. Automated.",
    supportingText: "KYP allows you to configure monitoring rules at portfolio level, so different customers, merchants or risk groups can be monitored according to your own internal policies.",
    href: routes.automatedPolicyRules,
    isImplemented: true,
    category: "compliance",
    icon: "Sliders",
    shortDescription: "Configure rules built around your risk framework across portfolios, jurisdictions, and risk thresholds.",
    problem: {
      title: "Why Inflexible One-Size-Fits-All Monitoring Fails",
      description: "Generic compliance systems enforce rigid review cadences and arbitrary alert thresholds that do not reflect your firm's specific risk framework.",
      points: [
        {
          title: "Rigid Review Cycles",
          desc: "Low-risk entities get subjected to the same manual overhead as high-risk merchants, burning analyst capacity.",
        },
        {
          title: "Alert Noise & Fatigue",
          desc: "Static alerts lack jurisdictional context and trigger false positives for activities that comply with internal policy.",
        },
        {
          title: "Compliance Drift Over Time",
          desc: "When internal compliance policies evolve, legacy systems cannot adapt without costly developer intervention.",
        },
        {
          title: "Loss of Governance Control",
          desc: "Compliance teams struggle to demonstrate to regulators how their operational monitoring maps back to written policies.",
        },
      ],
    },
    solution: {
      title: "Rules Built Around Your Risk Framework",
      description: "KYP allows you to configure monitoring rules at portfolio level, so different customers, merchants or risk groups can be monitored according to your own internal policies.",
      points: [
        {
          title: "Risk-Tier Segmentation",
          desc: "Set distinct monitoring rules, cadences, and triggers for high, medium, and low-risk portfolios.",
        },
        {
          title: "Jurisdictional & Country Rules",
          desc: "Tailor regulatory screening and compliance thresholds to different operating countries and licensing jurisdictions.",
        },
        {
          title: "Merchant & Customer Typologies",
          desc: "Apply differentiated monitoring rules based on merchant categories, business models, and partner classifications.",
        },
        {
          title: "Thresholds & Escalation Logic",
          desc: "Automate account escalation, enhanced review triggers, and notification routing when policies require action.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Policy",
        description: "Translate your firm's written compliance policies and risk tolerance frameworks into systematic criteria.",
        highlight: "Policy governance",
        uiDetail: {
          label: "Risk Framework",
          value: "Tier 1 High-Risk & Tier 2 Standard Configured",
          status: "info",
        },
      },
      {
        step: "02",
        title: "Rules",
        description: "Configure portfolio-level rules, country criteria, merchant typologies, and review frequencies.",
        highlight: "Granular rule engine",
        uiDetail: {
          label: "Active Rules",
          value: "14 Policy Logic Sets Enforced",
          status: "success",
        },
      },
      {
        step: "03",
        title: "Automated Monitoring",
        description: "KYP continuously applies rules across portfolios, identifying changes and escalating accounts automatically.",
        highlight: "Continuous surveillance",
        uiDetail: {
          label: "Portfolio Scan",
          value: "Always-On • Real-Time Escalation",
          status: "success",
        },
      },
      {
        step: "04",
        title: "Audit",
        description: "Maintain total alignment as policies change, with exportable audit logs demonstrating compliance adherence.",
        highlight: "Regulator-ready proof",
        uiDetail: {
          label: "Audit Dossier",
          value: "Policy Alignment Certified",
          status: "success",
        },
      },
    ],
    features: [
      {
        title: "High, Medium & Low-Risk Portfolios",
        description: "Set different monitoring rules and review requirements tailored to portfolio risk levels.",
        icon: "SlidersHorizontal",
      },
      {
        title: "Jurisdiction & Country Rules",
        description: "Define distinct monitoring requirements and screening depths across different countries and regions.",
        icon: "Globe",
      },
      {
        title: "Merchant & Customer Types",
        description: "Configure specific monitoring rules and thresholds per merchant category, MCC, or business structure.",
        icon: "Building2",
      },
      {
        title: "Risk Thresholds & Escalation",
        description: "Automatically trigger alerts and escalate accounts when changing entity risks breach predefined criteria.",
        icon: "BellRing",
      },
      {
        title: "Dynamic Policy Alignment",
        description: "As your compliance policies evolve, update your rules immediately without engineering overhead.",
        icon: "RefreshCw",
      },
      {
        title: "Authorised User Control",
        description: "Your authorised compliance leaders retain full governance over monitoring settings and risk requirements.",
        icon: "ShieldCheck",
      },
    ],
    benefits: [
      {
        title: "Consistent Monitoring",
        description: "Apply your risk framework consistently across all portfolios without manual gaps or oversights.",
        metric: "100% Uniformity",
      },
      {
        title: "Automated Alerts",
        description: "Receive targeted, actionable alerts that matter, cutting out unnecessary operational noise.",
        metric: "-70% Alert Noise",
      },
      {
        title: "Continuous Alignment",
        description: "Ensure day-to-day risk management stays continuously aligned with internal compliance policies.",
        metric: "Audit Defensible",
      },
    ],
    cta: {
      headline: "Your rules. Your portfolios. Automated.",
      buttonText: "Schedule a Policy Demo",
    },
    interfaceMockup: {
      type: "monitoring",
      title: "KYP Policy & Portfolio Rule Matrix",
      subtitle: "Configurable thresholds, cadences & escalation logic",
    },
  },

  {
    slug: "website-compliance",
    title: "Website Compliance Screening & Monitoring",
    headline: "Website Compliance Screening & Monitoring",
    subheading: "Find disclosure gaps. Flag risky content. Track website changes.",
    supportingText: "KYP automates merchant website screening and ongoing monitoring to support Mastercard BRAM and Visa VIRP compliance reviews, helping your team identify potential issues and reduce manual website checks.",
    href: routes.websiteCompliance,
    isImplemented: true,
    category: "compliance",
    icon: "Globe",
    shortDescription: "Assess merchant websites for legal entity details, missing disclosures, prohibited content, and track changes over time.",
    problem: {
      title: "Manual Website Checks & Hidden Merchant Content Risk",
      description: "Checking merchant websites by hand is time-consuming, prone to human error, and fails to catch unauthorized content mutations after onboarding.",
      points: [
        {
          title: "Labor-Intensive Manual Audits",
          desc: "Compliance analysts spend countless hours manually browsing merchant web pages to check terms, policies, and contact information.",
        },
        {
          title: "Undisclosed Content Mutations",
          desc: "Merchants frequently alter product offerings or add prohibited items post-approval, breaching card scheme rules.",
        },
        {
          title: "Card Scheme Fines (BRAM & VIRP)",
          desc: "Failure to spot prohibited brand abuse or illegal goods leads to severe fines from Mastercard BRAM and Visa VIRP.",
        },
        {
          title: "Missing Mandatory Disclosures",
          desc: "Unlisted refund policies, incomplete registered addresses, or absent customer service details violate consumer regulations.",
        },
      ],
    },
    solution: {
      title: "Understand Each Website's Compliance Risks",
      description: "KYP automates merchant website screening and ongoing monitoring to support Mastercard BRAM and Visa VIRP compliance reviews, helping your team identify potential issues and reduce manual website checks.",
      points: [
        {
          title: "Legal Entity & Contact Extraction",
          desc: "Legal entity details, addresses, and customer service contacts extracted automatically from accessible pages.",
        },
        {
          title: "Missing Disclosure & Policy Checks",
          desc: "Automated checks for missing or incomplete terms, refund policies, and key regulatory disclosures.",
        },
        {
          title: "Risk Indicators & Prohibited Content",
          desc: "Detect risk indicators across website content, products, services, and transaction laundering flags.",
        },
        {
          title: "Structured Assessments & Evidence",
          desc: "Structured assessments with findings, risk ratings, and supporting evidence to request corrective action.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Screen",
        description: "Add merchant websites and automatically crawl accessible pages for corporate and commercial disclosures.",
        highlight: "Automated crawling",
        uiDetail: {
          label: "Merchant Domain",
          value: "checkout-merchant-gateway.com crawled",
          status: "info",
        },
      },
      {
        step: "02",
        title: "Identify",
        description: "Extract entity details, registered addresses, contact points, and identify missing or incomplete key policies.",
        highlight: "Disclosure extraction",
        uiDetail: {
          label: "Policy Audit",
          value: "Terms of Service & Refund Policy Verified",
          status: "success",
        },
      },
      {
        step: "03",
        title: "Assess",
        description: "Evaluate website content, products, and services against card scheme rules and prohibited catalogs.",
        highlight: "Scheme risk rating",
        uiDetail: {
          label: "Scheme Compliance",
          value: "0 Prohibited Goods Detected (BRAM/VIRP Clear)",
          status: "success",
        },
      },
      {
        step: "04",
        title: "Monitor",
        description: "Track website changes over time with configurable monitoring frequencies matched directly to your risk policy.",
        highlight: "Change detection",
        uiDetail: {
          label: "Change Sentinel",
          value: "No Unauthorized Content Mutations",
          status: "success",
        },
      },
      {
        step: "05",
        title: "Audit",
        description: "Generate structured assessments with findings and timestamped evidence to support compliance decisions.",
        highlight: "Defensible evidence trail",
        uiDetail: {
          label: "Audit Dossier",
          value: "Structured Assessment Ready for Export",
          status: "success",
        },
      },
    ],
    features: [
      {
        title: "Legal Entity & Contact Extraction",
        description: "Extract legal entity details, addresses, and customer service contacts automatically from accessible pages.",
        icon: "Building2",
      },
      {
        title: "Mandatory Disclosure Checks",
        description: "Identify missing or incomplete terms, refund policies, and regulatory disclosures.",
        icon: "FileText",
      },
      {
        title: "Mastercard BRAM & Visa VIRP Checks",
        description: "Identify brand abuse, illegal goods, and potential card scheme rule violations before penalties hit.",
        icon: "ShieldAlert",
      },
      {
        title: "Website Content Mutation Tracking",
        description: "Track merchant content and product changes over time according to your internal policy cadence.",
        icon: "RefreshCw",
      },
      {
        title: "Structured Findings & Risk Ratings",
        description: "Receive prioritized assessments with granular risk scoring to focus manual reviews where needed.",
        icon: "SlidersHorizontal",
      },
      {
        title: "Supporting Evidence for Remediation",
        description: "Capture timestamped page evidence to investigate issues and request corrective merchant action.",
        icon: "FileCheck",
      },
    ],
    benefits: [
      {
        title: "Find Disclosure Gaps",
        description: "Automate verification of mandatory disclosures, policies, and registered contact information.",
        metric: "Automated Checks",
      },
      {
        title: "Prioritise Reviews",
        description: "Focus manual reviews on merchant websites and findings that require immediate attention.",
        metric: "-80% Manual Reviews",
      },
      {
        title: "Support Decisions with Evidence",
        description: "Back every remediation request, warning, or merchant offboarding with clear supporting evidence.",
        metric: "100% Defensible",
      },
      {
        title: "Prevent Card Scheme Fines",
        description: "Stay ahead of Mastercard BRAM and Visa VIRP compliance requirements across your entire portfolio.",
        metric: "Zero Scheme Penalties",
      },
    ],
    cta: {
      headline: "Find disclosure gaps. Prioritise reviews. Support compliance decisions with evidence.",
      buttonText: "Schedule a Website Compliance Demo",
    },
    interfaceMockup: {
      type: "monitoring",
      title: "KYP WebCompli™ Website Compliance Sentinel",
      subtitle: "BRAM & VIRP automated scanning with change tracking",
    },
  },

  {
    slug: "transaction-monitoring",
    title: "Transaction Monitoring",
    headline: "Transaction Monitoring",
    subheading: "Spot suspicious activity. Investigate faster. Report with confidence.",
    supportingText: "KYP brings your customer and transaction data together in one platform, helping payment providers, banks, fintechs and FX businesses identify suspicious activity as it happens and manage fraud and AML risk with full context.",
    href: routes.transactionMonitoring,
    isImplemented: true,
    category: "monitoring",
    icon: "Activity",
    shortDescription: "Real-time detection across SEPA, SWIFT, cards and wallets with built-in case management and SAR/STR reporting.",
    problem: {
      title: "Fragmented Transaction Surveillance & Siloed AML Risk",
      description: "When transaction surveillance operates separately from customer due diligence, teams suffer from blind spots, high false alarms, and slow investigations.",
      points: [
        {
          title: "Disconnected Telemetry",
          desc: "Transaction logs lack customer due diligence context, ownership shifts, and sanctions status, obscuring real risk.",
        },
        {
          title: "Slow, Disjointed Investigations",
          desc: "Compliance analysts waste hours pulling customer files and transaction histories across separate tools before making decisions.",
        },
        {
          title: "High False Positives",
          desc: "Rigid legacy transaction rules trigger excessive false alarms that waste team time and miss subtle laundering typologies.",
        },
        {
          title: "Cumbersome Regulatory Reporting",
          desc: "Compiling suspicious activity reports (SARs/STRs) by hand creates backlogs and exposes institutions to regulatory enforcement.",
        },
      ],
    },
    solution: {
      title: "Monitoring Built Around Your Risks",
      description: "KYP brings your customer and transaction data together in one platform, helping payment providers, banks, fintechs and FX businesses identify suspicious activity as it happens and manage fraud and AML risk with full context.",
      points: [
        {
          title: "Multi-Rail Real-Time Monitoring",
          desc: "Real-time monitoring across SEPA, SWIFT, cards and electronic wallets.",
        },
        {
          title: "Configurable Rules & Machine Learning",
          desc: "Identify suspicious patterns with rule building, testing and simulation without developer support.",
        },
        {
          title: "Dynamic Customer Risk Assessments",
          desc: "Customer risk assessments that update throughout the customer lifecycle combined with sanctions screening.",
        },
        {
          title: "AI-Powered Data Review & Correction",
          desc: "AI-powered data review and machine learning models for transaction data correction and anomaly triage.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Connect",
        description: "Connect customer and transaction feeds in real time across SEPA, SWIFT, card payments, and wallets.",
        highlight: "Multi-rail real-time ingestion",
        uiDetail: {
          label: "Transaction Rails",
          value: "SEPA, SWIFT, Cards & Wallets Connected",
          status: "success",
        },
      },
      {
        step: "02",
        title: "Monitor",
        description: "Transactions are checked in real time with configurable rules, ML models, and sanctions screening.",
        highlight: "Real-time detection",
        uiDetail: {
          label: "Live Surveillance",
          value: "<100ms Stream Processing Active",
          status: "success",
        },
      },
      {
        step: "03",
        title: "Investigate",
        description: "Alerts flow into built-in case management where teams review full customer and transaction context.",
        highlight: "Unified case management",
        uiDetail: {
          label: "Investigation Workspace",
          value: "Customer Profile + Txn History Linked",
          status: "info",
        },
      },
      {
        step: "04",
        title: "Report",
        description: "Generate suspicious activity reports (SARs/STRs) and regulatory filings in seconds with full evidence.",
        highlight: "One-click SAR/STR reporting",
        uiDetail: {
          label: "Regulatory Filing",
          value: "SAR Dossier Export Ready",
          status: "warning",
        },
      },
      {
        step: "05",
        title: "Audit",
        description: "Maintain a complete audit trail of checks, alerts, and decisions to support regulatory reporting and reviews.",
        highlight: "Immutable evidence trail",
        uiDetail: {
          label: "Audit Ledger",
          value: "Defensible Case Record Sealed",
          status: "success",
        },
      },
    ],
    features: [
      {
        title: "Real-Time Multi-Rail Monitoring",
        description: "Real-time monitoring across SEPA, SWIFT, cards and digital wallets.",
        icon: "Zap",
      },
      {
        title: "No-Code Rule Building & Simulation",
        description: "Rule building, testing and simulation without requiring developer or engineering support.",
        icon: "SlidersHorizontal",
      },
      {
        title: "Machine Learning Pattern Detection",
        description: "Identify complex laundering typologies, velocity spikes, and structured transaction patterns.",
        icon: "Cpu",
      },
      {
        title: "Lifecycle Customer Risk Assessments",
        description: "Customer risk assessments that update automatically throughout the customer lifecycle.",
        icon: "Activity",
      },
      {
        title: "Sanctions & Watchlist Screening",
        description: "Integrated real-time screening against global PEP, sanctions, and adverse media watchlists.",
        icon: "ShieldCheck",
      },
      {
        title: "Built-In SAR / STR Case Management",
        description: "Generate suspicious activity reports (SARs/STRs) with full evidence and audit trails.",
        icon: "FileText",
      },
    ],
    benefits: [
      {
        title: "Real-Time Detection",
        description: "Spot suspicious activity as it happens across multiple payment rails before settlement.",
        metric: "<100ms Detection",
      },
      {
        title: "Faster Investigations",
        description: "Review customer due diligence and transaction history in one view to expedite decisions.",
        metric: "4× Faster Triage",
      },
      {
        title: "One View of Fraud & AML Risk",
        description: "Unite fraud telemetry with AML compliance controls into a single operating platform.",
        metric: "Unified Risk View",
      },
      {
        title: "Defensible Audit Trails",
        description: "Maintain a complete audit trail to support regulatory reporting, internal governance, and audits.",
        metric: "100% Audit-Ready",
      },
    ],
    cta: {
      headline: "Real-time detection. Faster investigations. One view of fraud and AML risk.",
      buttonText: "Schedule a Transaction Monitoring Demo",
    },
    interfaceMockup: {
      type: "aml",
      title: "KYP Real-Time Transaction Surveillance & Case Manager",
      subtitle: "Multi-rail payment feed with automated SAR/STR dossier generation",
    },
  },

  {
    slug: "illegal-traffic-detection",
    title: "Regulatory Blacklist & Illegal Traffic Monitoring",
    headline: "Regulatory Blacklist & Illegal Traffic Monitoring",
    subheading: "Know where websites are banned. See where their visitors come from.",
    supportingText: "KYP combines regulatory blacklist screening with geographic traffic estimates, helping your team identify potential exposure to prohibited markets and prioritise websites that need closer investigation.",
    href: routes.illegalTrafficDetection,
    isImplemented: true,
    category: "monitoring",
    icon: "ShieldBan",
    shortDescription: "Official website bans and restrictions, estimated visitor traffic by country, and identification of traffic from prohibited markets.",
    problem: {
      title: "Cross-Border Market Exposure & Licence Risks",
      description: "Regulated operators and payment providers face harsh penalties if merchant web assets accept or direct traffic from prohibited or sanctioned jurisdictions.",
      points: [
        {
          title: "Undisclosed Geo-Traffic",
          desc: "Merchants and affiliates routing unauthorized traffic from blacklisted jurisdictions.",
        },
        {
          title: "Fragmented Blacklists",
          desc: "Regulatory restriction lists across dozens of international authorities change constantly.",
        },
      ],
    },
    solution: {
      title: "Regulatory Blacklist & Traffic Intelligence",
      description: "Combines official global regulatory restrictions with geographic visitor telemetry to identify non-compliance.",
      points: [
        {
          title: "Official Bans & Restrictions",
          desc: "Linked to each website and its operator, distinguishing active, historical, and lifted bans.",
        },
        {
          title: "Geographic Visitor Estimates",
          desc: "Traffic estimates by country to flag exposure to restricted markets.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Screen",
        description: "Screen merchant URLs against global regulatory enforcement blacklists.",
        highlight: "Real-time list check",
        uiDetail: { label: "Blacklist Status", value: "Clean across 40+ authorities", status: "success" },
      },
      {
        step: "02",
        title: "Compare",
        description: "Compare website operators with known regulatory action records.",
        highlight: "Historical vs Active",
        uiDetail: { label: "Restriction History", value: "0 Active Bans Found", status: "success" },
      },
      {
        step: "03",
        title: "Assess",
        description: "Assess visitor traffic geography to detect prohibited country traffic.",
        highlight: "Geo-traffic analysis",
        uiDetail: { label: "Restricted Traffic", value: "<0.01% (Safe Threshold)", status: "info" },
      },
      {
        step: "04",
        title: "Monitor",
        description: "Continuously monitor website changes and traffic drift over time.",
        highlight: "Always-on sentinel",
        uiDetail: { label: "Surveillance", value: "Daily Sweeps Configured", status: "success" },
      },
    ],
    features: [
      {
        title: "Official Bans & Restrictions",
        description: "Linked to each website and its operator with clear distinctions between active, historical, and lifted restrictions.",
        icon: "ShieldBan",
      },
      {
        title: "Estimated Visitor Traffic by Country",
        description: "Understand geographic audience distribution to identify potential exposure to prohibited markets.",
        icon: "Globe",
      },
      {
        title: "Structured Regulatory Assessments",
        description: "Comprehensive risk reports backed by supporting regulatory sources and visitor telemetry data.",
        icon: "FileCheck",
      },
    ],
    benefits: [
      {
        title: "Identify Potential Exposure",
        description: "Detect unauthorized market traffic before regulators or card schemes flag non-compliance.",
      },
      {
        title: "Prioritise Investigations",
        description: "Focus compliance analyst hours on merchants with verified jurisdictional traffic concerns.",
      },
    ],
    cta: { headline: "Know Where Websites Are Banned", buttonText: "Book a Demo" },
    interfaceMockup: { type: "monitoring", title: "Regulatory Blacklist & Traffic Radar", subtitle: "Geographic visitor stream analysis" },
  },

  {
    slug: "esg-ai-alerting",
    title: "ESG Monitoring with Agentic AI",
    headline: "ESG Monitoring with Agentic AI",
    subheading: "Identify ESG concerns. Understand the evidence. Reduce manual research.",
    supportingText: "KYP uses agentic AI to scan global sources, analyse adverse media and extract information from publicly available websites, helping you identify potential environmental, social and governance risks across your portfolio.",
    href: routes.esgAlerting,
    isImplemented: true,
    category: "monitoring",
    icon: "Leaf",
    shortDescription: "Agentic AI scans global sources for environmental incidents, labour practices, and governance concerns with supporting evidence.",
    problem: {
      title: "Scattered Information & Manual ESG Due Diligence",
      description: "ESG data is scattered across international news, regulatory enforcement notices, and disparate corporate disclosures, making continuous portfolio surveillance difficult.",
      points: [
        {
          title: "Scattered Data Sources",
          desc: "Environmental, labour, and governance allegations distributed across non-standardized disclosures.",
        },
        {
          title: "Emerging Controversies",
          desc: "Slow identification of greenwashing, modern slavery, or corruption allegations affecting suppliers.",
        },
      ],
    },
    solution: {
      title: "Agentic AI for ESG Surveillance",
      description: "AI agents gather relevant information and organise findings against each company with references to supporting sources.",
      points: [
        {
          title: "Research Built Around Your Priorities",
          desc: "Track environmental incidents, labour practices, governance concerns, and adverse media.",
        },
        {
          title: "From Scattered Information to Oversight",
          desc: "Configure monitoring priorities and receive alerts when potential concerns require review.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Research",
        description: "Agentic AI scans global web sources, legal filings, and international news.",
        highlight: "Multi-language NLP",
        uiDetail: { label: "Web Sentinel", value: "Scanning 10,000+ ESG Sources", status: "info" },
      },
      {
        step: "02",
        title: "Assess",
        description: "Analyse adverse media and categorize findings across E, S, and G pillars.",
        highlight: "Structured evaluation",
        uiDetail: { label: "Risk Categorization", value: "0 Severe Controversies", status: "success" },
      },
      {
        step: "03",
        title: "Monitor",
        description: "Set monitoring frequencies matching your internal ESG risk policies.",
        highlight: "Continuous surveillance",
        uiDetail: { label: "Monitoring Sentinel", value: "Weekly Ingestion Sweep", status: "success" },
      },
      {
        step: "04",
        title: "Report",
        description: "Compile findings with direct citations to supporting evidence.",
        highlight: "Documented evidence",
        uiDetail: { label: "ESG Dossier", value: "Full Audit Trail Backed", status: "success" },
      },
      {
        step: "05",
        title: "Audit",
        description: "Export comprehensive portfolio ESG reports for internal reviews and stakeholder audits.",
        highlight: "One-click export",
        uiDetail: { label: "Audit Readiness", value: "Instant Export Available", status: "success" },
      },
    ],
    features: [
      {
        title: "Reported Environmental Incidents",
        description: "Track pollution, chemical spills, and illegal waste concerns across supplier networks.",
        icon: "Leaf",
      },
      {
        title: "Labour Practices & Human Rights",
        description: "Detect modern slavery warnings, unfair labour practices, and supply chain controversies.",
        icon: "ShieldAlert",
      },
      {
        title: "Governance & Anti-Corruption",
        description: "Uncover alleged bribery, executive misconduct, and corporate governance failures.",
        icon: "Building",
      },
      {
        title: "Adverse Media & Disclosure Tracking",
        description: "Continuous surveillance of company public disclosures and sudden website changes.",
        icon: "Newspaper",
      },
    ],
    benefits: [
      {
        title: "Less Manual Research",
        description: "Automate web and news scraping with intelligent agentic information extraction.",
        metric: "Automated",
      },
      {
        title: "More Focused Investigations",
        description: "Prioritise material controversies backed by verifiable external sources.",
        metric: "Clear Evidence",
      },
    ],
    cta: { headline: "Clearer ESG Oversight Across Your Portfolio", buttonText: "Book an ESG Demo" },
    interfaceMockup: { type: "monitoring", title: "ESG Controversy Radar", subtitle: "Multi-pillar ESG risk score" },
  },

  {
    slug: "enhanced-compliance",
    title: "Enhanced Due Diligence Made Simple",
    headline: "Enhanced Due Diligence Made Simple",
    subheading: "Go deeper. Get expert support. Make informed decisions.",
    supportingText: "KYP provides access to in-depth background checks on individuals and entities, helping your team understand complex relationships and assess risk with detailed research tailored to your requirements.",
    href: routes.enhancedCompliance,
    isImplemented: true,
    category: "compliance",
    icon: "FileSearch",
    shortDescription: "In-depth background checks, tailored research reports in multiple languages, and direct collaboration with research specialists.",
    problem: {
      title: "Complex High-Risk Corporate Structures",
      description: "When entities involve offshore jurisdictions, political exposure, or intricate ownership webs, standard automated checks are insufficient.",
      points: [
        {
          title: "Opaque Offshore Networks",
          desc: "Entities with multi-jurisdictional shell corporations requiring forensic background research.",
        },
        {
          title: "Rigid Generic Reports",
          desc: "Off-the-shelf reports that fail to address the specific risk questions relevant to your business.",
        },
      ],
    },
    solution: {
      title: "Research Built Around Your Requirements",
      description: "Collaborate directly with research specialists during the investigation to clarify requirements and explore areas needing closer scrutiny.",
      points: [
        {
          title: "In-Depth Background Checks",
          desc: "Comprehensive checks on individuals and entities tailored to your specific investigation.",
        },
        {
          title: "Flexible Multilingual Reporting",
          desc: "Reports available in multiple languages with customizable templates aligned to your compliance framework.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Scope",
        description: "Define the specific questions you need answered and select a report format.",
        highlight: "Tailored scope",
        uiDetail: { label: "Investigation Scope", value: "Cross-Border UBO Forensic Check", status: "info" },
      },
      {
        step: "02",
        title: "Research",
        description: "Specialists conduct in-depth corporate, legal, and reputational research.",
        highlight: "Analyst collaboration",
        uiDetail: { label: "Research Specialist", value: "Assigned & Active", status: "success" },
      },
      {
        step: "03",
        title: "Review",
        description: "Review detailed multilingual findings with supporting documentation.",
        highlight: "Source-backed",
        uiDetail: { label: "Findings Dossier", value: "100% Primary Sources", status: "success" },
      },
      {
        step: "04",
        title: "Decide",
        description: "Use the findings to support risk assessments, internal reviews, and documented decisions.",
        highlight: "Defensible decisions",
        uiDetail: { label: "Decision Log", value: "Documented Sign-Off", status: "success" },
      },
      {
        step: "05",
        title: "Audit",
        description: "Maintain a complete audit trail of the investigation for regulators and sponsor banks.",
        highlight: "Audit-ready",
        uiDetail: { label: "Audit Dossier", value: "Exportable & Immutable", status: "success" },
      },
    ],
    features: [
      {
        title: "In-Depth Background Checks",
        description: "Deep investigative due diligence on both legal entities and key controlling individuals.",
        icon: "FileSearch",
      },
      {
        title: "Tailored Research Reports",
        description: "Customized investigation reports specifically addressing your organization's risk appetite.",
        icon: "FileText",
      },
      {
        title: "Direct Specialist Collaboration",
        description: "Work directly with dedicated research analysts to explore nuanced risk areas.",
        icon: "UserCheck",
      },
      {
        title: "Multilingual Deliverables",
        description: "Investigation reports delivered in multiple languages with customizable compliance templates.",
        icon: "Globe",
      },
    ],
    benefits: [
      {
        title: "Thorough Research & Flexible Reporting",
        description: "Get bespoke insights addressing the exact questions your compliance committee requires.",
      },
      {
        title: "Greater Confidence in Your Decisions",
        description: "Defend high-risk partner approvals or rejections with robust, source-backed evidence.",
      },
    ],
    cta: { headline: "Go Deeper. Make Informed Decisions.", buttonText: "Request an EDD Consultation" },
    interfaceMockup: { type: "audit", title: "EDD Investigation Workspace", subtitle: "Deep corporate dossier analysis" },
  },

  {
    slug: "instant-audit-reporting",
    title: "Instant Audit Ready Reporting",
    headline: "Audit-Ready in 1 Minute",
    subheading: "Turn weeks of audit preparation into seconds",
    supportingText: "KYP automatically captures the evidence behind your compliance checks, monitoring and decisions, so audit-ready reports can be generated in around one minute instead of taking up to three weeks.",
    href: routes.instantAuditReporting,
    isImplemented: true,
    category: "reporting",
    icon: "FileCheck",
    shortDescription: "Instant access to due diligence evidence, PEP/sanctions checks, decision trails, and timestamps for regulators and sponsored banks.",
    problem: {
      title: "The Burden of Manual Audit Preparation",
      description: "Compliance analysts spend up to three weeks manually assembling screenshots, retrieving email logs, and verifying outdated records whenever auditors or regulators request evidence.",
      points: [
        {
          title: "Weeks of Manual Evidence Gathering",
          desc: "Taking manual screenshots and retrieving files across multiple disconnected compliance tools.",
        },
        {
          title: "High FTE Overhead",
          desc: "Senior compliance officers diverted from strategic risk management to administrative report assembly.",
        },
      ],
    },
    solution: {
      title: "One-Click Audit-Ready Reporting",
      description: "KYP automatically captures the evidence behind every check, alert, and decision into an immutable audit trail.",
      points: [
        {
          title: "Instant Access to All Compliance Records",
          desc: "Due diligence evidence, PEP/sanctions checks, risk changes, decisions, and timestamps generated in 60 seconds.",
        },
        {
          title: "Save Operational Hours and FTE",
          desc: "Removes the need to manually gather evidence across disparate databases.",
        },
      ],
    },
    workflow: [
      {
        step: "01",
        title: "Capture",
        description: "Automatically log all onboarding checks, verification findings, and monitoring alerts.",
        highlight: "Real-time ledger",
        uiDetail: { label: "Evidence Ledger", value: "SHA-256 Timestamped Log", status: "success" },
      },
      {
        step: "02",
        title: "Package",
        description: "One-click aggregation of company data, director checks, and analyst review notes.",
        highlight: "Single file compilation",
        uiDetail: { label: "Dossier Packager", value: "Compiling 28 Evidence Nodes", status: "info" },
      },
      {
        step: "03",
        title: "Export",
        description: "Generate structured audit-ready PDF and JSON packages in approximately one minute.",
        highlight: "Regulator & sponsor ready",
        uiDetail: { label: "Output Status", value: "Audit-Ready Dossier Ready (1 Min)", status: "success" },
      },
    ],
    features: [
      {
        title: "Due Diligence & Monitoring Evidence",
        description: "Complete evidence behind initial onboarding checks, risk scoring, and continuous monitoring alerts.",
        icon: "FileCheck",
      },
      {
        title: "PEP, Sanctions & Adverse Media History",
        description: "Historical record of every watchlist sweep and analyst clearance note.",
        icon: "ShieldAlert",
      },
      {
        title: "Company, Director & Ownership Data",
        description: "Full record of corporate registry filings, active directors, and UBO disclosures.",
        icon: "Building",
      },
      {
        title: "Timestamps for Regulators & Sponsoring Banks",
        description: "Legally robust, timestamped log of all activity and decisions.",
        icon: "FileCheck2",
      },
    ],
    benefits: [
      {
        title: "Turn Weeks Into Seconds",
        description: "Audit-ready reports generated in around 1 minute instead of taking up to 3 weeks.",
        metric: "60 Seconds",
      },
      {
        title: "Fewer Operational Hours & Lower FTE",
        description: "Free senior compliance officers from repetitive manual screenshotting and data gathering.",
        metric: "-80% Prep Time",
      },
    ],
    cta: { headline: "Audit-Ready Reporting, On Demand", buttonText: "Book a Demo" },
    interfaceMockup: { type: "audit", title: "Instant Audit Dossier Generator", subtitle: "Regulator-ready compliance evidence package" },
  },
];
