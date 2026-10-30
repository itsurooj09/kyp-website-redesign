/**
 * KYP Centralized Routing Configuration
 * Ensures unified routing across headers, mega-menus, footers, cards and buttons.
 * Unimplemented future pages point strictly to "#" to prevent 404s.
 */
export const routes = {
  home: "/",
  platform: "/platform",
  platformOverview: "/platform#overview",
  platformAiOnboarding: "/platform#ai-onboarding",
  platformDataIntegrations: "/platform#data-integrations",
  platformGraphIntelligence: "/platform#graph-intelligence",
  platformMonitoringAlerts: "/platform#monitoring-alerts",
  platformEvidenceDecisions: "/platform#evidence-decisions",
  
  // Use Cases
  onboarding: "/use-cases/onboarding",
  aml: "/use-cases/anti-money-laundering",
  
  // Future Use Cases (point to "#" as per specification)
  issuingMonitoring: "#",
  automatedPolicyRules: "#",
  websiteCompliance: "#",
  transactionMonitoring: "#",
  illegalTrafficDetection: "#",
  esgAlerting: "#",
  enhancedCompliance: "#",
  instantAuditReporting: "#",

  // Industries (future pages point to "#")
  igaming: "#",
  payments: "#",
  acquirers: "#",
  banking: "#",
  fintech: "#",
  marketplaces: "#",

  // Resources
  faq: "/faq",
  news: "/news",
  whitepapers: "/whitepapers",

  // Company
  about: "/about",
  careers: "/careers",
  contact: "/contact",

  // Main CTA
  bookDemo: "/contact",
} as const;

export type AppRoutes = typeof routes;
