# KYP – Enterprise Risk & Compliance Platform (Website Redesign)

A production-ready website redesign for **KYP (Know Your Portfolio / Know Your Partner)**, an AI-powered enterprise risk intelligence, compliance monitoring, and third-party risk management platform.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and interactive custom **Graph Intelligence** visualizations inspired by Itemize 2026 and SEON navigation architectures.

---

## 🎨 Official Brand System & Color Tokens

Strictly implemented according to official KYP brand guidelines:

| Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Pure Black** | `#000000` | Main global background |
| **Lime Green** | `#66cc00` | Primary CTAs, active states, and highlights |
| **Light Mint** | `#c6f5ef` | Graph nodes, soft highlights, and selected text |
| **Teal** | `#6fd3c4` | Data connections, relationship lines, and secondary accents |
| **Deep Navy** | `#033653` | Dashboard surfaces, panels, and secondary backgrounds |

### CSS Variables
```css
--kyp-black: #000000;
--kyp-lime: #66cc00;
--kyp-mint: #c6f5ef;
--kyp-teal: #6fd3c4;
--kyp-navy: #033653;
```

---

## 🗺️ Scope & Complete Route Inventory

All 10 requested routes are fully implemented with centralized routing managed in [`src/lib/routes.ts`](src/lib/routes.ts):

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Dark enterprise hero with layered Graph Intelligence composition, client trust strip, 6 industry cards, 5 platform highlights, 10 use case grid, animated pipeline flow, verified testimonials, and latest news. |
| `/platform` | **Platform** | Full technology ecosystem: Platform Overview, AI-Powered Onboarding (`#ai-onboarding`), Data & Integrations (`#data-integrations`), Graph Intelligence (`#graph-intelligence`), Continuous Monitoring (`#monitoring-alerts`), Evidence & Decisions (`#evidence-decisions`). |
| `/use-cases/onboarding` | **Use Case: Onboarding** | AI-Powered business onboarding, document validation, self-correction feedback loop, and automated questionnaire completion. |
| `/use-cases/anti-money-laundering` | **Use Case: AML** | Anti-money laundering surveillance, PEP and sanctions screening, beneficial ownership tracking, and transaction intelligence. |
| `/about` | **About KYP** | Authentic company background, mission, architecture principles, verified London HQ address, ISO 27001 accreditation, and partner credentials. |
| `/careers` | **Careers** | Recruitment culture, company values (Lead from the front, Communicate challenges, Own your work, Be world class, Bring energy), and verified vacancy status. |
| `/faq` | **FAQ** | Categorized accordion (General, Continuous Monitoring, Third-Party Risk, Onboarding & KYB, AML, Website Compliance, Payments & Fintech) with search filtering. |
| `/news` | **News & Insights** | Verified press releases and industry commentary from KYP's official newsroom with original article links. |
| `/whitepapers` | **Whitepapers** | Research papers and executive reports on continuous KYB, Mastercard BRAM/VIRP compliance, and graph entity resolution. |
| `/contact` | **Contact & Demo** | Conversion page featuring a validated contact form connected to `/api/contact`, London headquarters details, and email links. |

*Note: Future use cases and industry detail pages point safely to `#` as per project specifications to prevent broken links.*

---

## 🚀 Key Interactive Features

1. **KYP Graph Intelligence™ (`src/components/product/GraphIntelligence.tsx`)**
   - Sub-second entity resolution connecting holding entities, subsidiaries, UBOs, directors, and merchants.
   - Smooth zoom, pan, category filter (UBOs, Subsidiaries, Merchants), and node selection.
   - Contextual inspector displaying equity, jurisdiction, and risk contagion notes.

2. **End-to-End Pipeline Flow (`src/components/product/PlatformFlow.tsx`)**
   - Step-by-step interactive workflow: `Onboard` → `Verify` → `Monitor` → `Investigate` → `Report`.
   - Real-time data inputs and validated outputs simulation.

3. **SEON-Inspired Global Mega Menu (`src/components/layout/MegaMenu.tsx`)**
   - Multi-column categorized desktop dropdowns with hover delays and featured capability cards.
   - Responsive mobile drawer accordion with touch optimization.

4. **Self-Service AI Onboarding Mockup (`src/components/product/OnboardingInterface.tsx`)**
   - Real-time document discrepancy detection and self-correction simulation.

5. **Instant Audit-Ready Reporting Engine (`src/components/product/AuditInterface.tsx`)**
   - 60-second compliance dossier generator with cryptographic activity ledger and regulator export preview.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Space Grotesk (Headings) & Inter (Body) via `next/font/google`
- **Deployment**: Optimized for [Vercel](https://vercel.com)

---

## 💻 Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd "KYP Website Redesign"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Create a production build**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm start
   ```

---

## 🌐 Vercel Deployment Instructions

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import the repository.
4. Framework preset will automatically detect **Next.js**.
5. Root directory is `./` (default).
6. Build command is `npm run build`.
7. Output directory is `.next` (default).
8. Click **Deploy**.

---

## 🏢 Official Company Information

- **Legal Entity**: Cinnte Solutions Ltd trading as Know Your Partner (KYP)
- **Headquarters**: 33 Queen St, London, EC4R 1AP, United Kingdom
- **Official Inquiries**: hello@kyp.io
- **Security Standard**: ISO 27001 Information Security Management Certified
