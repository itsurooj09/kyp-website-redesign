export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  "All",
  "General KYP Questions",
  "Continuous Monitoring",
  "Merchant & Third-Party Risk",
  "Onboarding & KYB",
  "AML & Financial Crime",
  "Website Compliance",
  "Payments & Fintech",
] as const;

export const faqsData: FAQItem[] = [
  // General KYP Questions
  {
    id: "gen-1",
    category: "General KYP Questions",
    question: "What is Know Your Portfolio / Know Your Partner (KYP)?",
    answer: "KYP is an AI-powered enterprise risk intelligence platform that delivers continuous monitoring, automated merchant onboarding, and third-party risk management. It brings corporate registries, watchlist screening, website compliance, and transaction intelligence into a unified command centre.",
  },
  {
    id: "gen-2",
    category: "General KYP Questions",
    question: "What industries does KYP support?",
    answer: "KYP is purpose-built for regulated, high-velocity sectors including Payments & PSPs, iGaming & Online Gambling, Acquirers & Intermediaries, Banking & Financial Institutions, High-Growth Fintechs, and Digital Marketplaces.",
  },
  {
    id: "gen-3",
    category: "General KYP Questions",
    question: "What certifications and security standards does KYP adhere to?",
    answer: "KYP is ISO 27001 certified for information security management and is an accredited Bloom supplier. All data ingestion, API transport, and evidence logging adhere to enterprise-grade encryption (TLS 1.3 / AES-256) and strict GDPR requirements.",
  },
  {
    id: "gen-4",
    category: "General KYP Questions",
    question: "Where is KYP headquartered and how can our team schedule a demo?",
    answer: "KYP is headquartered in the City of London at 33 Queen St, London, EC4R 1AP, United Kingdom. Regulated businesses can book a private platform demonstration directly via our website contact form or by emailing hello@kyp.io.",
  },

  // Continuous Monitoring
  {
    id: "cm-1",
    category: "Continuous Monitoring",
    question: "Why is continuous monitoring critical compared to periodic annual reviews?",
    answer: "Point-in-time reviews leave compliance teams blind to material risk changes that emerge between cycles. KYP continuously monitors corporate filings, director appointments, shareholding shifts, regulatory enforcement, and adverse media 24/7, alerting teams the moment a risk profile mutates.",
  },
  {
    id: "cm-2",
    category: "Continuous Monitoring",
    question: "What specific risk indicators does KYP track in real time?",
    answer: "KYP monitors changes in company registry filings, beneficial ownership (UBOs), sanctions lists (OFAC, EU, UN, UK HMT), Politically Exposed Persons (PEPs), regulatory blacklists, adverse media across international news feeds, website compliance (WebCompli), and transaction patterns where integrated.",
  },
  {
    id: "cm-3",
    category: "Continuous Monitoring",
    question: "How does KYP prevent alert fatigue for compliance analysts?",
    answer: "KYP uses configurable policy thresholds to filter out background noise. Rather than firing generic alerts, KYP scores and contextualizes changes against your institution's specific risk matrix, presenting only actionable risk shifts alongside supporting evidence dossiers.",
  },

  // Merchant & Third-Party Risk
  {
    id: "tpr-1",
    category: "Merchant & Third-Party Risk",
    question: "How does KYP identify behavioural risk before it becomes a financial loss?",
    answer: "KYP combines corporate registry changes with operational signals—such as sudden management turnover, adverse customer complaints, website alterations, and transaction velocity changes—allowing compliance officers to intervene before non-compliance fines or chargeback cascades occur.",
  },
  {
    id: "tpr-2",
    category: "Merchant & Third-Party Risk",
    question: "How does KYP help acquirers and intermediaries oversee nested sub-merchants?",
    answer: "KYP maps multi-tiered partner and merchant networks through its Graph Intelligence architecture. Acquirers can see aggregated risk scores across downstream sales agents, payment facilitators, and nested merchants in a unified portfolio dashboard.",
  },

  // Onboarding & KYB
  {
    id: "onb-1",
    category: "Onboarding & KYB",
    question: "How does KYP achieve 10× faster business onboarding?",
    answer: "KYP replaces slow email ping-pong with AI-assisted self-correction. As applicants upload passports, bank proofs, and certificates of incorporation, KYP checks them instantly for validity, legibility, and policy adherence, prompting applicants to fix discrepancies before submitting.",
  },
  {
    id: "onb-2",
    category: "Onboarding & KYB",
    question: "Does KYP automatically approve business applicants without human review?",
    answer: "No. KYP automates document extraction, validation, and discrepancy highlighting to eliminate administrative busywork, but final approval decisions remain strictly in the hands of your authorized compliance officers and MLROs (human-in-the-loop governance).",
  },
  {
    id: "onb-3",
    category: "Onboarding & KYB",
    question: "Can KYP pre-populate onboarding questionnaires from corporate records?",
    answer: "Yes. When an applicant enters their registered company name or number, KYP queries authoritative official business registries in real time, auto-populating corporate address, incorporation date, active directors, and filing status.",
  },

  // AML & Financial Crime
  {
    id: "aml-1",
    category: "AML & Financial Crime",
    question: "How does KYP detect concealed beneficial ownership and shell companies?",
    answer: "KYP Graph Intelligence resolves complex entity webs across international jurisdictions. By linking directors, parent companies, subsidiaries, and offshore holdings, KYP exposes individuals who cross equity ownership thresholds (e.g., 10% or 25%+ UBO) or share common addresses.",
  },
  {
    id: "aml-2",
    category: "AML & Financial Crime",
    question: "How does transaction monitoring work within the KYP platform?",
    answer: "Where transaction data feeds are integrated via API, KYP monitors transaction velocity, volume anomalies, structuring, and sudden deviation from historical baselines, cross-correlating transactional flags directly with the merchant's KYB risk profile.",
  },
  {
    id: "aml-3",
    category: "AML & Financial Crime",
    question: "Does KYP guarantee AML compliance independently?",
    answer: "No software platform can independently guarantee legal AML compliance. KYP acts as an enterprise intelligence and monitoring copilot that equips your compliance team with automated tools, real-time alerts, and complete audit documentation to satisfy regulatory obligations.",
  },

  // Website Compliance
  {
    id: "web-1",
    category: "Website Compliance",
    question: "What is WebCompli and how does it prevent card scheme fines?",
    answer: "WebCompli is KYP’s proprietary automated crawler designed to continuously screen merchant websites for Mastercard BRAM and Visa VIRP compliance. It inspects terms and conditions, refund policies, corporate disclosures, and detects unauthorized or illegal merchandise listings.",
  },
  {
    id: "web-2",
    category: "Website Compliance",
    question: "How does WebCompli handle merchant website updates after onboarding?",
    answer: "Merchant websites frequently alter their product catalog or terms after passing initial onboarding. WebCompli runs scheduled surveillance passes and alerts compliance officers immediately if a merchant adds high-risk goods, changes contact details, or experiences website downtime.",
  },

  // Payments & Fintech
  {
    id: "pay-1",
    category: "Payments & Fintech",
    question: "How does KYP generate audit reports in approximately 1 minute?",
    answer: "Because KYP logs every screening result, uploaded document, analyst note, and timestamped decision into an immutable audit vault, generating an audit-ready dossier requires only a single click. The platform compiles full evidence packs in under 60 seconds.",
  },
  {
    id: "pay-2",
    category: "Payments & Fintech",
    question: "How does KYP integrate with our existing core systems or workflow tools?",
    answer: "KYP provides a developer-friendly REST API, modular webhooks, and pre-built connectors. You can ingest onboarding documents from existing portals, trigger external checks, and stream real-time risk alerts directly into case management tools or internal databases.",
  },
];
