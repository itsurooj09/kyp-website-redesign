import { routes } from "@/lib/routes";

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  isExternal?: boolean;
}

export interface MegaMenuSection {
  title: string;
  items: NavItem[];
}

export interface MegaMenuCategory {
  title: string;
  href: string;
  sections: MegaMenuSection[];
  featured?: {
    title: string;
    description: string;
    tag: string;
    href: string;
    image?: string;
  };
}

export const navigationData: Record<"platform" | "industries" | "useCases" | "resources" | "company", MegaMenuCategory> = {
  platform: {
    title: "Platform",
    href: routes.platform,
    sections: [
      {
        title: "CORE CAPABILITIES",
        items: [
          {
            title: "Platform Overview",
            href: routes.platformOverview,
            description: "Unified view connecting onboarding, due diligence, and ongoing risk.",
          },
          {
            title: "Data & Integrations",
            href: routes.platformDataIntegrations,
            description: "360° risk view combining registry data, sanctions, and internal signals.",
          },
          {
            title: "AI-Powered Onboarding",
            href: routes.platformAiOnboarding,
            description: "Automated document validation, discrepancy detection, and policy checks.",
          },
          {
            title: "Continuous Monitoring & Alerts",
            href: routes.platformMonitoringAlerts,
            description: "Always-on tracking of corporate changes, sanctions, and behavioural risk.",
          },
          {
            title: "Investigations & Audit Reporting",
            href: routes.platformEvidenceDecisions,
            description: "Full evidence trail with exportable audit-ready reports in seconds.",
          },
          {
            title: "Graph Intelligence",
            href: routes.platformGraphIntelligence,
            description: "Visualize complex ownership structures, merchant webs, and hidden risks.",
            badge: "Interactive",
          },
        ],
      },
    ],
    featured: {
      title: "The KYP Risk Intelligence Graph™",
      description: "Map hidden corporate relationships, director networks, and beneficial ownership exposure with sub-second entity resolution.",
      tag: "Platform Highlight",
      href: routes.platformGraphIntelligence,
      image: "/images/screenshots/kyp-ui-display.webp",
    },
  },

  industries: {
    title: "Industries",
    href: "#",
    sections: [
      {
        title: "TARGET SECTORS",
        items: [
          {
            title: "iGaming & Gambling",
            href: routes.igaming,
            description: "Automate operator due diligence, affiliate tracking, and player safety.",
          },
          {
            title: "Payments & PSPs",
            href: routes.payments,
            description: "Real-time merchant portfolio monitoring, chargeback alerts, and BRAM/VIRP compliance.",
          },
          {
            title: "Acquirers / Agents / Intermediaries",
            href: routes.acquirers,
            description: "Oversight across third-party sales networks, agent risk, and nested merchants.",
          },
          {
            title: "Banking & Financial Services",
            href: routes.banking,
            description: "Connected financial crime intelligence, PEP screening, and continuous risk oversight.",
          },
          {
            title: "Fintech",
            href: routes.fintech,
            description: "Fast-growth compliance automation, API-first risk feeds, and scalable KYB.",
          },
          {
            title: "Marketplaces & Platforms",
            href: routes.marketplaces,
            description: "Seller vetting, counterfeit risk detection, and illegal traffic surveillance.",
          },
        ],
      },
    ],
    featured: {
      title: "Built for Complex Risk Environments",
      description: "From high-volume PSPs to regulated iGaming operators, KYP replaces fragmented compliance checks with always-on risk intelligence.",
      tag: "Enterprise Coverage",
      href: routes.bookDemo,
      image: "/images/screenshots/kyp-ui-display.webp",
    },
  },

  useCases: {
    title: "Use Cases",
    href: routes.onboarding,
    sections: [
      {
        title: "ONBOARDING & SCREENING",
        items: [
          {
            title: "Onboarding",
            href: routes.onboarding,
            description: "Onboard 10× faster. Resolve document issues before submission.",
            badge: "Available Now",
          },
          {
            title: "Anti Money Laundering",
            href: routes.aml,
            description: "Detect suspicious activity, prevent financial crime, and stay compliant.",
            badge: "Available Now",
          },
          {
            title: "Enhanced Compliance",
            href: routes.enhancedCompliance,
            description: "Streamlined EDD workflows for complex and high-risk entities.",
          },
          {
            title: "Instant Audit Ready Reporting",
            href: routes.instantAuditReporting,
            description: "Turn weeks of regulatory audit preparation into 60-second reports.",
          },
          {
            title: "Automated Policy Continuous Monitoring Rules",
            href: routes.automatedPolicyRules,
            description: "Tailor alert thresholds and review frequencies directly to internal policy.",
          },
        ],
      },
      {
        title: "PORTFOLIO & SURVEILLANCE",
        items: [
          {
            title: "Portfolio Issuing Monitoring",
            href: routes.issuingMonitoring,
            description: "Complete visibility for card issuing programmes and volumetric signals.",
          },
          {
            title: "Website Compliance",
            href: routes.websiteCompliance,
            description: "Continuous WebCompli surveillance for Mastercard BRAM and Visa VIRP rules.",
          },
          {
            title: "Transaction Monitoring",
            href: routes.transactionMonitoring,
            description: "Integrated pattern anomaly detection and payment behaviour tracking.",
          },
          {
            title: "Illegal Website Traffic Detection",
            href: routes.illegalTrafficDetection,
            description: "Identify prohibited markets, regulatory blacklists, and traffic hijacking.",
          },
          {
            title: "ESG AI Alerting",
            href: routes.esgAlerting,
            description: "Agentic screening for governance controversies and environmental exposure.",
          },
        ],
      },
    ],
    featured: {
      title: "From Onboarding to Audit",
      description: "See how KYP connects initial KYB questionnaires with real-time portfolio monitoring and one-click regulator exports.",
      tag: "Core Workflow",
      href: routes.onboarding,
      image: "/images/screenshots/kyp-ui-display.webp",
    },
  },

  resources: {
    title: "Resources",
    href: routes.insights,
    sections: [
      {
        title: "KNOWLEDGE & RESEARCH",
        items: [
          {
            title: "Insights Hub",
            href: routes.insights,
            description: "Centralized intelligence, regulatory analyses, and scheme briefings.",
            badge: "New",
          },
          {
            title: "News & Press",
            href: routes.news,
            description: "Latest announcements, partnerships, and product releases.",
          },
          {
            title: "Whitepapers",
            href: routes.whitepapers,
            description: "In-depth research on KYB trends, regulatory frameworks, and risk models.",
          },
          {
            title: "FAQ",
            href: routes.faq,
            description: "Comprehensive answers to compliance, technical, and implementation questions.",
          },
        ],
      },
    ],
    featured: {
      title: "2026 Enterprise Risk & Compliance Report",
      description: "Why continuous partner intelligence is replacing annual periodic reviews across top European fintechs.",
      tag: "Featured Guide",
      href: routes.insights,
      image: "/images/screenshots/kyp-ui-display.webp",
    },
  },

  company: {
    title: "Company",
    href: routes.about,
    sections: [
      {
        title: "ABOUT KYP",
        items: [
          {
            title: "About KYP",
            href: routes.about,
            description: "Our mission to bring clarity, speed, and intelligence to enterprise risk.",
          },
          {
            title: "Careers",
            href: routes.careers,
            description: "Join our dynamic team building the future of continuous risk intelligence.",
            badge: "We're Hiring",
          },
          {
            title: "Contact",
            href: routes.contact,
            description: "Connect with our compliance specialists or book a personalized platform demo.",
          },
          {
            title: "Privacy & Cookies",
            href: routes.privacy,
            description: "Statutory compliance, GDPR data subject rights, and cookie management.",
          },
        ],
      },
    ],
    featured: {
      title: "London FinTech Award Winners",
      description: "ISO 27001 certified and trusted by market leaders across payments and iGaming.",
      tag: "Headquarters",
      href: routes.about,
      image: "/images/partners/iso-27001.webp",
    },
  },
};
