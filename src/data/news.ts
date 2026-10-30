export interface NewsArticle {
  id: string;
  title: string;
  url: string;
  image: string;
  date: string;
  category: "Partnership" | "Product Announcement" | "Industry Insight" | "Award & Recognition";
  featured?: boolean;
  excerpt: string;
}

export const newsArticlesData: NewsArticle[] = [
  {
    id: "news-1",
    title: "PayModum Selects KYP to Strengthen Continuous Merchant Risk & Compliance Monitoring",
    url: "https://kyp.io/insights/paymodum-selects-kyp-to-strengthen-continuous-merchant-risk-compliance-monitoring/",
    image: "/images/news/news-paymodum.webp",
    date: "23 Sep 2024",
    category: "Partnership",
    featured: true,
    excerpt: "PayModum has chosen KYP's next-generation risk intelligence platform to automate continuous merchant portfolio oversight, strengthen compliance controls, and eliminate periodic manual review delays.",
  },
  {
    id: "news-2",
    title: "Octoplay Selects KYP to Strengthen Compliance Monitoring Across Its Partner Ecosystem",
    url: "https://kyp.io/news/octoplay-selects-kyp-to-strengthen-compliance-monitoring-across-its-partner-ecosystem/",
    image: "/images/news/news-octoplay.webp",
    date: "27 May 2024",
    category: "Partnership",
    featured: true,
    excerpt: "Leading iGaming developer Octoplay deploys KYP's continuous monitoring sentinel to safeguard brand reputation, track partner licensing integrity, and maintain rigorous multi-jurisdictional compliance.",
  },
  {
    id: "news-3",
    title: "WebCompli Automates Mastercard BRAM, VISA VIRP and FCA Monitoring With Zero Daily Admin",
    url: "https://kyp.io/news/webcompli-automates-mastercard-bram-visa-virp-and-fca-monitoring-with-zero-daily-admin/",
    image: "/images/news/news-webcompli.webp",
    date: "6 May 2024",
    category: "Product Announcement",
    featured: true,
    excerpt: "KYP unveils WebCompli: an automated merchant website surveillance engine that scans disclosures, terms, and prohibited inventory to eliminate card scheme violation fines for payment providers.",
  },
  {
    id: "news-4",
    title: "AAZZUR and KYP – Strengthening Trust & Transparency in Embedded Finance",
    url: "https://kyp.io/news/aazzur-and-kyp-strengthening-trust-transparency-in-embedded-finance/",
    image: "/images/news/news-aazzur.webp",
    date: "6 May 2024",
    category: "Partnership",
    excerpt: "AAZZUR integrates KYP's real-time risk intelligence architecture into its embedded banking ecosystem, allowing financial institutions to embed automated KYB and continuous partner screening.",
  },
  {
    id: "news-5",
    title: "£42 Million FCA Fine: Why Knowing Your Partner Is Just as Critical as Knowing Your Customer",
    url: "https://kyp.io/insights/42-million-fca-fine-why-knowing-your-partner-is-just-as-critical-as-knowing-your-customer/",
    image: "/images/news/news-fca.webp",
    date: "24 Apr 2024",
    category: "Industry Insight",
    excerpt: "A deep dive into landmark regulatory enforcement actions highlighting why static KYC onboarding leaves institutions dangerously exposed to downstream third-party and merchant risks.",
  },
  {
    id: "news-6",
    title: "KYP’s Innovative “Know Your Portfolio” Solution Selected by Neosurf",
    url: "https://kyp.io/news/kyps-innovative-know-your-portfolio-solution-selected-by-neosurf/",
    image: "/images/news/news-paymodum.webp",
    date: "12 Mar 2024",
    category: "Partnership",
    excerpt: "Global payments provider Neosurf chooses KYP to automate partner onboarding, monitor international payment corridors, and streamline AML compliance across its worldwide distribution network.",
  },
  {
    id: "news-7",
    title: "KYP Announces Strategic Partnership with Gieom to Boost Third-Party Risk Management for DORA",
    url: "https://kyp.io/news/kyp-announces-strategic-partnership-with-gieom-to-boost-third-party-risk-management-for-firms-subject-to-dora-compliance/",
    image: "/images/news/news-octoplay.webp",
    date: "18 Feb 2024",
    category: "Partnership",
    excerpt: "KYP and Gieom partner to help European financial institutions achieve rigorous Digital Operational Resilience Act (DORA) compliance through automated ICT third-party risk surveillance.",
  },
  {
    id: "news-8",
    title: "KYP Shortlisted for RegTech Company of the Year at the London FinTech Awards",
    url: "https://kyp.io/news/kyp-shortlisted-for-regtech-company-of-the-year-at-the-upcoming-london-fintech-awards-2024/",
    image: "/images/partners/grow-london-logo.webp",
    date: "15 Jan 2024",
    category: "Award & Recognition",
    excerpt: "KYP receives industry recognition for transforming enterprise compliance workflows, named a finalist for RegTech Company of the Year following exponential European client adoption.",
  },
  {
    id: "news-9",
    title: "KYP Announces Strategic Partnership with Mastercard's RiskRecon",
    url: "https://kyp.io/news/kyp-announces-strategic-partnership-with-mastercards-rickrecon/",
    image: "/images/partners/riskrecon-logo.webp",
    date: "10 Nov 2023",
    category: "Partnership",
    excerpt: "Mastercard’s RiskRecon and KYP join forces to deliver unified cyber posture scoring alongside real-time corporate and compliance intelligence across vendor ecosystems.",
  },
];
