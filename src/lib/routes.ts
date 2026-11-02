/**
 * KYP Centralized Routing Configuration
 * Ensures unified routing across headers, mega-menus, footers, cards and buttons.
 * Complete 20-Page Scope of Work mapping.
 */
export const routes = {
  // Core General Pages (10 Total)
  home: "/",
  platform: "/platform",
  platformOverview: "/platform#overview",
  platformAiOnboarding: "/platform#ai-onboarding",
  platformDataIntegrations: "/platform#data-integrations",
  platformGraphIntelligence: "/platform#graph-intelligence",
  platformMonitoringAlerts: "/platform#monitoring-alerts",
  platformEvidenceDecisions: "/platform#evidence-decisions",
  
  faq: "/faq",
  insights: "/insights",
  news: "/news",
  whitepapers: "/whitepapers",
  about: "/about",
  careers: "/careers",
  contact: "/contact",
  privacy: "/privacy-and-cookies",
  
  // Use Case Pages (10 Total - Full Scope of Work)
  onboarding: "/use-cases/onboarding",
  issuingMonitoring: "/use-cases/portfolio-issuing-monitoring",
  aml: "/use-cases/anti-money-laundering",
  automatedPolicyRules: "/use-cases/automated-policy-rules",
  websiteCompliance: "/use-cases/website-compliance",
  transactionMonitoring: "/use-cases/transaction-monitoring",
  illegalTrafficDetection: "/use-cases/illegal-traffic-detection",
  esgAlerting: "/use-cases/esg-ai-alerting",
  enhancedCompliance: "/use-cases/enhanced-compliance",
  instantAuditReporting: "/use-cases/instant-audit-reporting",

  // Industries (Handled via interactive tabbed experience on Home & Platform per SOW)
  igaming: "/#industry-tabs",
  payments: "/#industry-tabs",
  acquirers: "/#industry-tabs",
  banking: "/#industry-tabs",
  fintech: "/#industry-tabs",
  marketplaces: "/#industry-tabs",

  // Main Call to Action
  bookDemo: "/contact",
} as const;

export type AppRoutes = typeof routes;
