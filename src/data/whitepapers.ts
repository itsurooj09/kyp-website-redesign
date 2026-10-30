import { routes } from "@/lib/routes";

export interface Whitepaper {
  id: string;
  title: string;
  category: string;
  date: string;
  pages: string;
  readTime: string;
  description: string;
  highlights: string[];
  coverImage: string;
  downloadUrl: string;
}

export const whitepapersData: Whitepaper[] = [
  {
    id: "wp-1",
    title: "Moving From Periodic Reviews to Continuous Risk Intelligence: The 2026 KYP Paradigm",
    category: "Executive Strategy Report",
    date: "Q3 2024",
    pages: "24 Pages",
    readTime: "12 min read",
    description: "An in-depth analysis of why annual KYC reviews leave regulated institutions exposed to multi-million-pound regulatory fines, and how continuous third-party risk intelligence establishes real-time operational resilience.",
    highlights: [
      "Quantifying post-onboarding risk decay across high-velocity merchant portfolios",
      "Benchmark metrics on manual FTE hours wasted during retrospective file reassessments",
      "Architectural blueprints for transitioning legacy review queues into event-driven sentinels",
      "Case studies from leading European payment institutions and iGaming operators",
    ],
    coverImage: "/images/screenshots/kyp-ui-display.webp",
    downloadUrl: routes.contact,
  },
  {
    id: "wp-2",
    title: "Mastercard BRAM & Visa VIRP: Eliminating Card Scheme Non-Compliance with Zero Daily Admin",
    category: "Payment Operations Guide",
    date: "Q2 2024",
    pages: "18 Pages",
    readTime: "9 min read",
    description: "How automated website compliance crawling, policy verification, and product monitoring prevent recurring $25,000 to $100,000 card scheme non-compliance fines for payment service providers.",
    highlights: [
      "The top 10 most common merchant website disclosure oversights triggering scheme reviews",
      "How rogue merchants alter landing pages post-approval to sell prohibited inventory",
      "Automating terms & conditions, refund disclosures, and merchant contact verification",
      "Implementing continuous WebCompli monitoring with instant analyst remediation workflows",
    ],
    coverImage: "/images/news/news-webcompli.webp",
    downloadUrl: routes.contact,
  },
  {
    id: "wp-3",
    title: "Uncovering Hidden Exposure: Graph Intelligence & Entity Resolution in Corporate Risk",
    category: "Technical Whitepaper",
    date: "Q1 2024",
    pages: "32 Pages",
    readTime: "15 min read",
    description: "A technical examination of multi-tier entity resolution, director co-occurrence networks, and circular shareholding structures used by organized financial crime syndicates to bypass traditional AML checks.",
    highlights: [
      "Algorithmic entity disambiguation across disparate international business registries",
      "Mapping contagion paths: how one sanctioned director compromises multi-tier holding structures",
      "Graph database modeling vs. relational databases for high-speed beneficial ownership tracing",
      "Interactive visual analytics for senior MLROs and forensic financial investigators",
    ],
    coverImage: "/images/partners/itemize-logo.webp",
    downloadUrl: routes.contact,
  },
  {
    id: "wp-4",
    title: "DORA & Third-Party Risk Management: Achieving Operational Resilience Under EU Mandates",
    category: "Regulatory Compliance Blueprint",
    date: "Q4 2023",
    pages: "22 Pages",
    readTime: "11 min read",
    description: "A practical compliance guide for financial entities subject to the European Union’s Digital Operational Resilience Act (DORA), focusing on ICT third-party service provider continuous oversight.",
    highlights: [
      "Key requirements of Articles 28–44 regarding third-party ICT contracting and risk audits",
      "Creating centralized, automated registers of information on third-party relationships",
      "Integrating continuous cyber risk scoring (RiskRecon) with corporate KYB intelligence",
      "Producing audit-ready compliance evidence packs for supervisory authorities in minutes",
    ],
    coverImage: "/images/partners/iso-27001.webp",
    downloadUrl: routes.contact,
  },
];
