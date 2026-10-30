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
    tagline: "Onboard partners faster. Monitor risk across your iGaming ecosystem.",
    shortDescription: "KYP brings onboarding, due diligence, website compliance and continuous monitoring into one view of your operators, affiliates, payment partners and suppliers, helping your team identify emerging risks, strengthen regulatory oversight and manage compliance across multiple jurisdictions.",
    fullDescription: "Configure onboarding requirements, monitoring rules and escalation thresholds based on partner types, gaming jurisdictions, licensing requirements and risk levels. KYP consolidates risk intelligence and monitoring findings into a single view, helping your team identify regulatory changes, investigate potential violations and prioritise higher-risk relationships across your iGaming ecosystem. Maintain a complete audit trail of onboarding checks, ongoing monitoring, website compliance findings, investigations, alerts and decisions to support internal governance, regulatory reviews and external audits.",
    challenges: [
      "Frequent changes in affiliate ownership and undisclosed cross-licensing arrangements",
      "Manual verification of complex multi-tier operator corporate structures",
      "Unauthorised promotion in restricted jurisdictions causing regulatory fines",
      "Point-in-time annual audits missing interim licence revocations",
    ],
    capabilities: [
      "AI-powered partner onboarding, corporate verification, document validation and enhanced due diligence",
      "Continuous sanctions, PEP, adverse media, beneficial ownership and director change monitoring",
      "Gaming licence checks, regulatory blacklist screening and monitoring for potential exposure to prohibited markets",
      "Affiliate and website compliance monitoring to identify misleading promotions, prohibited content and responsible gambling concerns",
      "Transaction and volumetric monitoring to identify unusual payment patterns and emerging risks where transaction data is integrated",
      "Configurable portfolio monitoring, automated alerts, structured investigations and exportable audit reports",
    ],
    metrics: [
      { label: "Workflow", value: "Onboard → Report" },
      { label: "Regulatory Oversight", value: "Continuous" },
      { label: "Audit Readiness", value: "Instant" },
    ],
    icon: "Gamepad2",
  },
  {
    id: "payments",
    name: "Payments & PSPs",
    href: routes.payments,
    tagline: "Onboard merchants faster. Monitor risk across your payment ecosystem.",
    shortDescription: "KYP brings merchant onboarding, due diligence, transaction monitoring and continuous risk intelligence into one platform, helping payment service providers, acquirers and payment facilitators identify emerging risks, reduce manual compliance work and maintain oversight across their merchant and partner portfolios.",
    fullDescription: "Configure onboarding requirements, monitoring rules and escalation thresholds based on merchant categories, MCCs, jurisdictions, transaction activity and risk levels. KYP consolidates merchant intelligence, website compliance and payment monitoring into a single view, helping your team identify suspicious activity, investigate emerging risks and prioritise higher-risk merchants across your portfolio. Maintain a complete audit trail of onboarding checks, ongoing monitoring, investigations, alerts and decisions to support regulatory compliance, acquiring bank oversight, card scheme requirements and external audits.",
    challenges: [
      "Undisclosed product line shifts into high-risk card scheme categories",
      "Sudden volumetric spikes and unusual refund or chargeback velocity",
      "Ghost websites and payment gateway hijacking",
      "Excessive manual due diligence time during merchant onboarding",
    ],
    capabilities: [
      "AI-powered merchant onboarding, KYB, document validation and enhanced due diligence",
      "Continuous sanctions, PEP, adverse media, beneficial ownership, director change and credit risk monitoring",
      "Website compliance monitoring to identify prohibited content, transaction laundering indicators, regulatory breaches and potential card scheme violations",
      "Transaction and volumetric monitoring to identify unusual payment patterns, processing spikes and high-risk merchant activity where transaction data is integrated",
      "Regulatory blacklist screening and monitoring for potential exposure to restricted or prohibited markets",
      "Configurable portfolio monitoring, automated alerts, structured investigations and exportable audit reports",
    ],
    metrics: [
      { label: "Workflow", value: "Onboard → Report" },
      { label: "Onboarding Speed", value: "Faster KYB" },
      { label: "Payment Controls", value: "Continuous" },
    ],
    icon: "CreditCard",
  },
  {
    id: "acquirers",
    name: "Acquirers / Agents / Intermediaries",
    href: routes.acquirers,
    tagline: "Know your partners. Understand their activity. Stay audit-ready.",
    shortDescription: "KYP brings onboarding, due diligence and continuous monitoring into one view of your acquirers, agents and intermediaries, helping your team identify changes in risk and oversee each relationship throughout its lifecycle.",
    fullDescription: "Set monitoring rules, review frequencies and escalation thresholds for different partner types, jurisdictions and risk levels. KYP brings findings from across your tools together, helping your team investigate changes, prioritise higher-risk relationships and take action when your policies require it. Maintain a complete audit trail of onboarding checks, ongoing monitoring, alerts and decisions to support internal oversight and external reviews.",
    challenges: [
      "Lack of direct visibility into sub-merchant and agent sales tactics",
      "Fragmented data scattered across independent sales organisations",
      "Delayed discovery of agent reputational damage or regulatory probes",
      "Cumbersome periodic merchant file reassessments",
    ],
    capabilities: [
      "AI-powered onboarding, document validation and due diligence",
      "Sanctions, PEP, adverse media, ownership, director change and credit risk monitoring",
      "Website compliance, regulatory blacklist screening and traffic analysis for potential exposure to prohibited markets",
      "Transaction monitoring, payment volumes and chargeback trends where relevant data is integrated",
      "Configurable portfolio rules, automated alerts and exportable audit reports",
    ],
    metrics: [
      { label: "Partner Oversight", value: "360°" },
      { label: "Workflow", value: "Onboard → Report" },
      { label: "Audit Readiness", value: "Instant" },
    ],
    icon: "Network",
  },
  {
    id: "banking",
    name: "Banking & Financial Institutions",
    href: routes.banking,
    tagline: "Connected financial crime intelligence. Continuous risk oversight.",
    shortDescription: "KYP brings onboarding, due diligence, financial crime screening and continuous monitoring into one view of your customers, counterparties and third-party relationships, helping your team identify emerging risks, reduce manual compliance work and maintain oversight throughout each relationship's lifecycle.",
    fullDescription: "Configure screening rules, review frequencies and escalation thresholds based on customer risk profiles, jurisdictions and regulatory requirements. KYP consolidates financial crime intelligence and monitoring findings into a single view, helping your team investigate changes, prioritise higher-risk relationships and take action in line with your compliance policies. Maintain a complete audit trail of onboarding checks, ongoing screening, investigations, alerts and decisions to support internal governance, regulatory examinations and external audits.",
    challenges: [
      "Disparate legacy databases preventing single-view corporate risk analysis",
      "High operational expense and FTE burn rate on manual periodic reviews",
      "Regulatory enforcement on failure to identify hidden beneficial owners",
      "Audit preparation taking up to three weeks per department",
    ],
    capabilities: [
      "AI-powered customer onboarding, document validation, KYC, KYB and enhanced due diligence",
      "Continuous sanctions, PEP, adverse media, beneficial ownership and director change monitoring",
      "Corporate verification, regulatory status and credit risk intelligence",
      "Transaction monitoring and configurable alerts to identify unusual activity where transaction data is integrated",
      "Automated monitoring, structured investigations and exportable compliance and audit reports",
    ],
    metrics: [
      { label: "Financial Crime Controls", value: "Continuous" },
      { label: "FTE Time Saved", value: "70%" },
      { label: "Workflow", value: "Onboard → Report" },
    ],
    icon: "Building2",
  },
  {
    id: "fintech",
    name: "Fintech & Payment Providers",
    href: routes.fintech,
    tagline: "Accelerate onboarding. Monitor risk. Scale with confidence.",
    shortDescription: "KYP brings onboarding, due diligence, financial crime screening and continuous monitoring into one view of your merchants, customers and business partners, helping fintech and payment providers streamline compliance, identify emerging risks and maintain oversight as their businesses scale.",
    fullDescription: "Configure onboarding requirements, monitoring rules and escalation thresholds based on merchant types, jurisdictions, transaction activity and risk levels. KYP consolidates compliance intelligence and monitoring findings into a single view, helping your team identify emerging risks, investigate suspicious activity and prioritise higher-risk relationships without increasing manual workloads. Maintain a complete audit trail of onboarding checks, ongoing monitoring, investigations, alerts and decisions to support regulatory requirements, banking partner oversight and external audits.",
    challenges: [
      "High drop-off rates on outdated, multi-day onboarding questionnaires",
      "Balancing rapid user growth with sponsor bank compliance expectations",
      "Evolving AML / CTF regulations across cross-border expansion markets",
      "Resource constraints within internal compliance teams",
    ],
    capabilities: [
      "AI-powered merchant and business onboarding, document validation, KYB and enhanced due diligence",
      "Continuous sanctions, PEP, adverse media, beneficial ownership and director change monitoring",
      "Website compliance, regulatory blacklist screening and monitoring for prohibited or high-risk merchant activity",
      "Transaction monitoring, payment activity and configurable risk alerts where transaction data is integrated",
      "Automated portfolio monitoring, structured investigations and exportable audit reports",
    ],
    metrics: [
      { label: "Workflow", value: "Onboard → Report" },
      { label: "Onboarding Speed", value: "10× Faster" },
      { label: "Compliance Scale", value: "Infinite" },
    ],
    icon: "Zap",
  },
  {
    id: "marketplaces",
    name: "Online Marketplaces & Platforms",
    href: routes.marketplaces,
    tagline: "Onboard sellers faster. Monitor risk across your marketplace.",
    shortDescription: "KYP brings onboarding, due diligence, third-party risk management and continuous monitoring into one view of your sellers, merchants, vendors and business partners, helping your team identify emerging risks, reduce manual compliance work and maintain oversight as your marketplace grows.",
    fullDescription: "Configure onboarding requirements, monitoring rules and escalation thresholds based on seller types, vendor relationships, jurisdictions and risk levels. KYP consolidates marketplace compliance and third-party risk intelligence into a single view, helping your team identify changes, investigate potential violations and prioritise higher-risk relationships as your ecosystem grows. Maintain a complete audit trail of onboarding checks, vendor assessments, ongoing monitoring, investigations, alerts and decisions to support internal governance, marketplace policies and external audits.",
    challenges: [
      "Proliferation of ephemeral shell companies and duplicate seller profiles",
      "Prohibited merchandise listings and undisclosed jurisdictional sales",
      "Reputational harm from high-profile marketplace fraud",
      "High volume of inbound seller documentation requiring rapid validation",
    ],
    capabilities: [
      "AI-powered seller, merchant and vendor onboarding, document validation and due diligence",
      "Corporate verification, beneficial ownership, sanctions, PEP and adverse media monitoring",
      "Third-party and vendor risk assessments, ongoing monitoring and reputational risk intelligence",
      "Website compliance monitoring to identify prohibited products, restricted content and potential policy violations",
      "Configurable portfolio monitoring, automated risk alerts, structured investigations and exportable audit reports",
    ],
    metrics: [
      { label: "Workflow", value: "Onboard → Report" },
      { label: "Seller Onboarding", value: "Faster Vetting" },
      { label: "Third-Party Oversight", value: "Safer at Scale" },
    ],
    icon: "ShoppingBag",
  },
];
