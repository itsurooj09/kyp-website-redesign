export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  logo: string;
  tag: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "neogames",
    company: "NeoGames",
    author: "Compliance Operations",
    role: "Leadership Team",
    quote: "With KYP’s Platform we have a greater level of risk monitoring and risk mitigation. We needed a solution that delivers real-time comprehensive reports, with transparent audit trails, saving countless manual operational time. KYP’s automated checks and alerts help to ensure we align to our obligated requirements.",
    logo: "/images/partners/neogames-logo.webp",
    tag: "iGaming & Regulated Operations",
    verified: true,
  },
  {
    id: "riskrecon",
    company: "RiskRecon (a Mastercard company)",
    author: "Enterprise Partnerships",
    role: "Global Risk Solutions",
    quote: "We are thrilled to be partnering with KYP as we look forward to delivering holistic cyber risk insights to their customers. Together, we are excited to announce with this new partnership we are able to help countless organizations secure their third party risk across their vendor ecosystem.",
    logo: "/images/partners/riskrecon-logo.webp",
    tag: "Cyber Risk & Vendor Security",
    verified: true,
  },
  {
    id: "itemize",
    company: "Itemize",
    author: "James Thomas",
    role: "CEO & Founder",
    quote: "We’re absolutely thrilled with our strategic partnership with KYP! Thanks to this collaboration, our clients now have the power to streamline financial processing and boost operating efficiencies through intelligent invoice and purchasing data analysis. We can’t wait to see the positive impact this key collaboration will have on our business.",
    logo: "/images/partners/itemize-logo.webp",
    tag: "Financial Operations & Intelligence",
    verified: true,
  },
  {
    id: "integrated-finance",
    company: "Integrated Finance",
    author: "Alistair Cotton",
    role: "CEO & Co-Founder",
    quote: "We are delighted to partner with KYP, whose innovative solutions align perfectly with our commitment to providing cutting-edge services to our joint clients. Integrated Finance always wants to be ahead of the curve when it comes to technology and regulations, and decided to work with KYP to add continuous risk monitoring to our existing onboarding, screening and transaction monitoring capabilities.",
    logo: "/images/partners/integrated-finance-logo.webp",
    tag: "Core Banking Infrastructure",
    verified: true,
  },
  {
    id: "tell-money",
    company: "Tell.Money",
    author: "David Monte",
    role: "CEO",
    quote: "Since collaborating with KYP and combining their industry leading risk intelligence platform with tell.money’s gateway, we have been able to provide enhanced risk monitoring and assurity to our bank and fintech clients. It has become an invaluable addition to our risk management offering and I highly recommend this platform to any business looking to enhance their risk intelligence capabilities and make smarter, data-driven decisions.",
    logo: "/images/partners/tellmoney-logo.webp",
    tag: "Open Banking & API Gateway",
    verified: true,
  },
];

export const trustedPartners = [
  { name: "NeoGames", logo: "/images/partners/neogames-logo.webp", category: "Client" },
  { name: "RiskRecon", logo: "/images/partners/riskrecon-logo.webp", category: "Mastercard Company" },
  { name: "Itemize", logo: "/images/partners/itemize-logo.webp", category: "Partner" },
  { name: "Tell.Money", logo: "/images/partners/tellmoney-logo.webp", category: "Client" },
  { name: "Integrated Finance", logo: "/images/partners/integrated-finance-logo.webp", category: "Partner" },
  { name: "BtoBet", logo: "/images/partners/btobet-logo.webp", category: "Client" },
  { name: "Pariplay", logo: "/images/partners/pariplay-logo.webp", category: "Client" },
];

export const credentials = [
  { name: "ISO 27001", logo: "/images/partners/iso-27001.webp", desc: "Information Security Management Certified" },
  { name: "EY Growth FinTech", logo: "/images/partners/ey-logo.webp", desc: "EY Growth FinTech Programme Alumni" },
  { name: "Bloom Accredited", logo: "/images/partners/bloom-logo.webp", desc: "Bloom Accredited Supplier" },
  { name: "Grow London Global", logo: "/images/partners/grow-london-logo.webp", desc: "Mayor's International Programme Selected" },
];
