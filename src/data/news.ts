export interface NewsArticle {
  id: string;
  title: string;
  url: string;
  image: string;
  date: string;
  category: "Partnership" | "Product Announcement" | "Industry Insight" | "Award & Recognition";
  featured?: boolean;
  excerpt: string;
  readTime?: string;
  author?: string;
  keyTakeaways?: string[];
  content?: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const newsArticlesData: NewsArticle[] = [
  {
    id: "news-1",
    title: "PayModum Selects KYP to Strengthen Continuous Merchant Risk & Compliance Monitoring",
    url: "/news/news-1",
    image: "/images/news/news-paymodum.webp",
    date: "23 Sep 2024",
    category: "Partnership",
    featured: true,
    excerpt: "PayModum has chosen KYP's next-generation risk intelligence platform to automate continuous merchant portfolio oversight, strengthen compliance controls, and eliminate periodic manual review delays.",
    readTime: "4 min read",
    author: "KYP Regulatory & Product Bureau",
    keyTakeaways: [
      "Automated continuous merchant portfolio oversight replacing slow annual KYC cycles",
      "Real-time event-driven alerts for corporate registry filings, sanctions, and adverse media",
      "Immediate reduction in onboarding review backlogs by over 70%",
      "Complete audit-defensible documentation satisfying European payment supervision standards"
    ],
    content: [
      "PayModum, a rapidly scaling European payment institution, has formally announced its enterprise partnership with KYP to deploy an end-to-end continuous merchant monitoring and risk intelligence pipeline.",
      "Under escalating regulatory expectations from European financial regulators, payment service providers face intense scrutiny over third-party merchant risks. Periodic, annual reviews are no longer sufficient to identify dynamic operational shifts, adverse media, or sudden leadership changes among portfolio merchants.",
      "By integrating KYP's event-driven sentinel architecture, PayModum replaces static batch audits with 24/7 telemetry monitoring across 180+ global registries, sanctions lists, and WebCompli digital footprint crawlers. When an anomaly is detected—such as an unregistered director addition or an unapproved change in merchant payment verticals—an alert is instantly flagged to the compliance team with recommended remediation steps.",
      "The deployment ensures that PayModum maintains defensible compliance dossiers while significantly accelerating legitimate merchant onboarding velocities."
    ],
    quote: {
      text: "KYP gives our compliance team superpowers. Rather than spending dozens of manual hours cross-referencing outdated registries, we receive real-time intelligence the moment risk occurs.",
      author: "Chief Compliance Officer",
      role: "PayModum Group"
    }
  },
  {
    id: "news-2",
    title: "Octoplay Selects KYP to Strengthen Compliance Monitoring Across Its Partner Ecosystem",
    url: "/news/news-2",
    image: "/images/news/news-octoplay.webp",
    date: "27 May 2024",
    category: "Partnership",
    featured: true,
    excerpt: "Leading iGaming developer Octoplay deploys KYP's continuous monitoring sentinel to safeguard brand reputation, track partner licensing integrity, and maintain rigorous multi-jurisdictional compliance.",
    readTime: "5 min read",
    author: "KYP Gaming & Regulatory Intelligence Team",
    keyTakeaways: [
      "Continuous tracking of B2B operator licenses across UKGC, MGA, SGA, and Curacao jurisdictions",
      "Automated detection of unlicensed white-label domains and rogue affiliate operators",
      "Holistic entity resolution across multi-tier corporate shareholdings and beneficial ownerships",
      "Zero daily administrative drag through intelligent automated threshold triggers"
    ],
    content: [
      "Octoplay, one of the industry's most innovative iGaming content providers, has selected KYP to automate continuous regulatory oversight across its international network of tier-one casino operators and distribution aggregators.",
      "The regulated online gaming ecosystem is characterized by complex holding companies, multi-jurisdictional licensing mandates, and frequent ownership drift. Maintaining brand integrity requires complete, continuous transparency into whether downstream partners continue to satisfy regulatory criteria across jurisdictions such as the UK, Malta, Sweden, and Ontario.",
      "KYP's Graph Intelligence maps Octoplay's entire commercial ecosystem into an intuitive, real-time risk graph. The platform monitors jurisdictional licensing statuses, corporate director cross-appointments, and public registry disclosures. If an operator's gaming license is revoked or suspended anywhere in the world, Octoplay's compliance officers are immediately alerted before reputational exposure ensues.",
      "This partnership sets a new operational benchmark for compliance governance within the tier-1 gaming entertainment industry."
    ],
    quote: {
      text: "Brand protection is paramount in regulated gaming. Partnering with KYP ensures we have continuous, uncompromising clarity on every operator in our network.",
      author: "Director of Legal & Regulatory Affairs",
      role: "Octoplay"
    }
  },
  {
    id: "news-3",
    title: "WebCompli Automates Mastercard BRAM, VISA VIRP and FCA Monitoring With Zero Daily Admin",
    url: "/news/news-3",
    image: "/images/news/news-webcompli.webp",
    date: "6 May 2024",
    category: "Product Announcement",
    featured: true,
    excerpt: "KYP unveils WebCompli: an automated merchant website surveillance engine that scans disclosures, terms, and prohibited inventory to eliminate card scheme violation fines for payment providers.",
    readTime: "6 min read",
    author: "KYP Risk Engineering & Card Scheme Practice",
    keyTakeaways: [
      "Autonomous website content crawler tailored for Mastercard BRAM and Visa VIRP rulesets",
      "Real-time alerts for prohibited goods, missing refund disclosures, and modified checkout terms",
      "Historical screenshot archives providing indisputable evidence for card scheme dispute defense",
      "Integrated directly into KYP merchant profiles with no manual URL tracking required"
    ],
    content: [
      "Payment acquirers and payment facilitators face severe penalties from payment card networks—often reaching $25,000 to $100,000 per violation—when an onboarded merchant surreptitiously alters its web storefront to offer prohibited goods or deceptive transaction practices.",
      "Today, KYP is proud to introduce WebCompli, an enterprise website compliance automation engine designed specifically to protect payment institutions from card scheme penalties and regulatory enforcement.",
      "WebCompli continuously parses portfolio merchant domains, analyzing navigation structures, published terms and conditions, refund policies, corporate registration numbers, and dynamic inventory listings. Machine learning classifiers detect high-risk signals including counterfeit pharmaceuticals, unlicensed digital downloads, high-risk ingestibles, and misleading negative-option billing.",
      "Every crawl generates an immutable time-stamped visual audit trail. Acquirers can now demonstrate to Mastercard, Visa, and regulators that robust, continuous surveillance is active across 100% of their merchant portfolio."
    ],
    quote: {
      text: "Card scheme fines are completely preventable with continuous crawler automation. WebCompli turns a major operational vulnerability into a competitive compliance advantage.",
      author: "Head of Risk Products",
      role: "KYP Platform Engineering"
    }
  },
  {
    id: "news-4",
    title: "AAZZUR and KYP – Strengthening Trust & Transparency in Embedded Finance",
    url: "/news/news-4",
    image: "/images/news/news-aazzur.webp",
    date: "6 May 2024",
    category: "Partnership",
    excerpt: "AAZZUR integrates KYP's real-time risk intelligence architecture into its embedded banking ecosystem, allowing financial institutions to embed automated KYB and continuous partner screening.",
    readTime: "4 min read",
    author: "KYP Fintech & Ecosystem Partnerships",
    keyTakeaways: [
      "Embedded compliance APIs integrated directly into modular digital banking journeys",
      "Sub-30-second automated corporate entity vetting at digital point-of-sale",
      "Continuous third-party risk surveillance built into embedded finance platforms",
      "Frictionless scaling for non-bank brands offering regulated financial products"
    ],
    content: [
      "Embedded finance enables non-financial brands to deliver seamless banking and payment experiences. However, rapid distribution must not come at the expense of regulatory diligence. Today, embedded finance platform leader AAZZUR and KYP announce a comprehensive architectural partnership.",
      "Through this integration, fintechs and brands building on AAZZUR can seamlessly activate KYP's risk engine via high-speed RESTful APIs. During initial merchant or partner onboarding, KYB data is collected, validated, and matched against registry records in real time.",
      "Crucially, the partnership goes beyond point-of-onboarding checks: AAZZUR users gain access to KYP's continuous monitoring sentinels, ensuring that ongoing transactional and regulatory changes are systematically surfaced to compliance teams without interrupting customer experiences."
    ],
    quote: {
      text: "Embedded finance requires embedded compliance. Partnering with KYP empowers our clients to innovate fast while remaining fully protected and audit-defensible.",
      author: "Philipp Buschbeck",
      role: "Co-Founder, AAZZUR"
    }
  },
  {
    id: "news-5",
    title: "£42 Million FCA Fine: Why Knowing Your Partner Is Just as Critical as Knowing Your Customer",
    url: "/news/news-5",
    image: "/images/news/news-fca.webp",
    date: "24 Apr 2024",
    category: "Industry Insight",
    featured: true,
    excerpt: "A deep dive into landmark regulatory enforcement actions highlighting why static KYC onboarding leaves institutions dangerously exposed to downstream third-party and merchant risks.",
    readTime: "7 min read",
    author: "Regulatory Strategy & Governance Practice",
    keyTakeaways: [
      "Analysis of recent multi-million-pound FCA enforcement notices targeting third-party oversights",
      "Why annual KYC refresh cycles fail to catch dynamic mid-term risk drift",
      "The role of automated continuous monitoring in proving proactive regulatory compliance",
      "Key recommendations for MLROs and Chief Risk Officers under the Senior Managers Regime (SM&CR)"
    ],
    content: [
      "In recent landmark enforcement proceedings, financial regulators across the UK and Europe have levied staggering fines totaling over £42 million against regulated institutions for deficient ongoing monitoring of partner and merchant relationships.",
      "The findings published by supervisory authorities emphasize a singular systemic flaw: while institutions invest heavily in customer onboarding, their ongoing monitoring of high-volume merchant intermediaries and third-party corporate entities remains reliant on static annual or biennial reviews.",
      "In fast-moving sectors, an approved merchant can change ownership, alter business activities, or become linked to sanctioned individuals in a matter of days. By the time an annual review takes place 11 months later, millions of pounds in illicit transaction volume may have traversed the institution's rails.",
      "To satisfy the FCA and international regulatory bodies under modern governance regimes, compliance officers must prove that their monitoring systems are event-driven, continuously updated, and capable of automated escalation when predefined risk tolerances are breached."
    ],
    quote: {
      text: "Regulators no longer accept ignorance as a defense. If a merchant's corporate risk posture fundamentally shifts, your organization is expected to know within hours, not next year.",
      author: "Senior Regulatory Advisor",
      role: "KYP Advisory Council"
    }
  },
  {
    id: "news-6",
    title: "KYP’s Innovative “Know Your Portfolio” Solution Selected by Neosurf",
    url: "/news/news-6",
    image: "/images/news/news-paymodum.webp",
    date: "12 Mar 2024",
    category: "Partnership",
    excerpt: "Global payments provider Neosurf chooses KYP to automate partner onboarding, monitor international payment corridors, and streamline AML compliance across its worldwide distribution network.",
    readTime: "4 min read",
    author: "KYP Global Payments Desk",
    keyTakeaways: [
      "Global distributor and merchant network oversight across multi-currency corridors",
      "Automated verification of merchant corporate identities and director listings",
      "Proactive sanctions screening matching global PEP and designated persons feeds",
      "Streamlined back-office operations reducing manual compliance workload"
    ],
    content: [
      "Neosurf, a renowned international payments and alternative payment method (APM) brand, has selected KYP to deliver continuous partner intelligence across its expansive global distribution footprint.",
      "Operating across multiple continents and complex regulatory jurisdictions requires robust, automated compliance infrastructure that can scale without adding prohibitive manual headcount.",
      "KYP's platform enables Neosurf to automate partner onboarding through self-service digital questionnaires with live document verification, while maintaining 24/7 background surveillance on existing merchant accounts. The integration gives Neosurf's compliance leaders a unified control tower for monitoring international risk drift."
    ],
    quote: {
      text: "KYP delivers the exact balance of speed, accuracy, and enterprise scalability that our global payments network requires.",
      author: "Global Head of Compliance",
      role: "Neosurf"
    }
  },
  {
    id: "news-7",
    title: "KYP Announces Strategic Partnership with Gieom to Boost Third-Party Risk Management for DORA",
    url: "/news/news-7",
    image: "/images/news/news-octoplay.webp",
    date: "18 Feb 2024",
    category: "Partnership",
    excerpt: "KYP and Gieom partner to help European financial institutions achieve rigorous Digital Operational Resilience Act (DORA) compliance through automated ICT third-party risk surveillance.",
    readTime: "5 min read",
    author: "Enterprise Governance & Resilience Group",
    keyTakeaways: [
      "Unified compliance mapping aligning with European Union DORA Articles 28–44",
      "Centralized register of information for critical ICT third-party service providers",
      "Continuous cyber risk, financial health, and corporate ownership monitoring",
      "Rapid export of supervisory compliance packages for European financial authorities"
    ],
    content: [
      "With the implementation of the European Union's Digital Operational Resilience Act (DORA), financial institutions face strict new obligations regarding third-party ICT service provider risk management.",
      "To address these requirements, KYP and Gieom have forged a strategic technology alliance, bringing together Gieom's operational risk governance framework with KYP's continuous entity intelligence and monitoring capabilities.",
      "Financial institutions can now maintain real-time visibility over critical ICT vendors, monitor corporate changes and cyber vulnerability drift, and automatically generate the comprehensive Information Registers mandated by supervisory authorities."
    ]
  },
  {
    id: "news-8",
    title: "KYP Shortlisted for RegTech Company of the Year at the London FinTech Awards",
    url: "/news/news-8",
    image: "/images/partners/grow-london-logo.webp",
    date: "15 Jan 2024",
    category: "Award & Recognition",
    excerpt: "KYP receives industry recognition for transforming enterprise compliance workflows, named a finalist for RegTech Company of the Year following exponential European client adoption.",
    readTime: "3 min read",
    author: "KYP Communications Team",
    keyTakeaways: [
      "Finalist nomination in prestigious London FinTech Awards RegTech category",
      "Recognized for pioneering the transition from periodic KYC to continuous risk intelligence",
      "Exponential growth across payment providers, fintechs, and regulated enterprise clients",
      "Validation of KYP's engineering-first approach to automated compliance defensibility"
    ],
    content: [
      "KYP has been officially announced as a finalist for 'RegTech Company of the Year' at the esteemed London FinTech Awards.",
      "The recognition follows a transformative period of customer growth and technical innovation, during which KYP launched WebCompli and onboarded leading European payment institutions, gaming leaders, and acquirers.",
      "The judging panel commended KYP for solving one of the most stubborn challenges in corporate compliance: replacing disjointed, manual annual file reviews with an automated continuous risk intelligence sentinel."
    ]
  },
  {
    id: "news-9",
    title: "KYP Announces Strategic Partnership with Mastercard's RiskRecon",
    url: "/news/news-9",
    image: "/images/partners/riskrecon-logo.webp",
    date: "10 Nov 2023",
    category: "Partnership",
    excerpt: "Mastercard’s RiskRecon and KYP join forces to deliver unified cyber posture scoring alongside real-time corporate and compliance intelligence across vendor ecosystems.",
    readTime: "4 min read",
    author: "Cyber Risk & Ecosystem Integration Team",
    keyTakeaways: [
      "Integration of Mastercard RiskRecon cybersecurity ratings into KYP entity profiles",
      "Multi-vector risk assessments combining corporate KYB with digital security posture",
      "Early warning indicators for data breach susceptibility among merchant networks",
      "Single-pane-of-glass governance for enterprise compliance and security officers"
    ],
    content: [
      "KYP has announced a groundbreaking strategic partnership with Mastercard's RiskRecon to incorporate automated cybersecurity hygiene and digital vulnerability scoring into the KYP risk intelligence platform.",
      "Modern merchant and third-party risk is multi-dimensional. A business that appears compliant in corporate registries may simultaneously run vulnerable web servers or unpatched checkout software that puts customer card data at risk.",
      "Through this integration, KYP users can inspect an entity's live RiskRecon cyber rating directly alongside sanctions, AML, WebCompli, and registry data, providing an unprecedented 360-degree risk assessment."
    ]
  }
];
