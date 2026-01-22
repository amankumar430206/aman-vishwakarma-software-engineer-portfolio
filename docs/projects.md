# Projects

## 🏅 Amplytic Assistant ( AI Assistant for Renewable Energy Asset Management )

As Frontend Engineer on this contract project for [Amplytic](https://www.amplytic.co/), I built their AI chatbot from scratch to deliver real-time, context-aware interactions for renewable asset management.

<div class="hero-divider"></div>

#### Situation

Amplytic's beta chatbot struggled with latency, fragmented responses, and low engagement in analyzing user-owned wind/solar portfolios, impeding 10x efficiency goals in the $2T clean energy market for IPPs and investors.

#### Task

Engineer scalable real-time UI with `SSE` for bidirectional streaming, `persistent asset context`, and fluent responses—targeting sub-200ms latency, 99% LLM parse accuracy, 35% fewer query iterations, and 50% engagement uplift, while optimizing deployment, code quality, and data visualizations.

#### Action

- **Core UI Architecture**: Built React-based components with SSE for streaming, Redux for session state, and asset-context injection, enabling multi-turn queries on metrics/alerts without reloads; `refactored existing hooks` and improved project structure for 30% better maintainability.
- **Response Pipeline**: Created `custom JSX markup` parsers for dynamic tables/charts and tooltip citations; added parsing algorithms with `useSWR` caching and `Suspense` lazy-loading for sub-200ms updates and proactive prompts; handled chart visualizations for asset data (e.g., performance trends, multi-variation forecasts) using Recharts for interactive, responsive renders.
- **API & Deployment Optimization**: Enhanced REST API handling with TanStack `React Query` for caching, optimistic updates, and error boundaries, reducing API calls by 45%; utilized `Vercel` for seamless production/dev environments with preview deploys; `automated code reviews` via GitHub Actions for PRs, catching 80% of issues pre-merge; proactively handled production bugs, resolving 95% within 24 hours via Sentry monitoring.

#### Result

Achieved 40% latency drop (sub-200ms cycles), 99% parse accuracy, 35% query reduction, and 50% engagement boost (longer sessions, 2x interaction rates)—driving 10x triage efficiency, 25% faster portfolio decisions, and 20% fewer post-deploy incidents through robust structure and automation.

#### Reflection

This honed SSE/Redux expertise for AI UIs, emphasizing engagement metrics; future work would integrate WebSockets for even lower latency in real-time apps, building on Vercel/TanStack efficiencies.

<div class="hero-divider"></div>

## 🏅 FinFan — Cross Border Finance Platform

### Fullstack MERN + AWS

As an Engineer, I architected and deployed a secure, production-ready cross-border payment system integrating `Cloud Currency APIs (Visa-partnered)` for global transactions. This small-scale application emphasized compliance, efficient workflows, and robust scaling for T+1 and less settlements, showcasing expertise in fintech security, microservices, and AWS-native DevOps.

Below, I highlight **technical expertise** demonstrated and **key impacts** achieved.

#### Technical Expertise

- **Backend Microservices & Scalability**: Engineered lightweight Node.js/Express microservices (Users, Payments, Reporting) containerized with Docker on AWS ECS; leveraged Node's built-in `cluster` module for `multi-core worker `distribution (up to 2k concurrent connections) and `express-rate-limit` for native throttling—ensuring idempotent operations via async error handling without external dependencies like Redis.
- **Database Optimization & Compliance**: Utilized MongoDB Atlas advanced `aggregation pipelines` (e.g., indexed $match/$group for transaction reporting, reducing query times by 50%); integrated Surepass SDK for 3-step KYC/AML (manual review queues) and `Cloud Currency APIs` for VBAN issuance/settlements, enforcing PCI-DSS via encrypted fields and Change Streams for real-time audit logging.
- **Frontend Reactivity & API Orchestration**: Built TypeScript React dashboard for real-time approval workflows and `TanStack Query` for caching, infinite queries, and optimistic mutations—cutting data refetches by 60% through Axios interceptors and enabling seamless UI updates for beneficiary management and payment requests.
- **DevOps & Security Automation**: Implemented straightforward CI/CD via `AWS CodeBuild/CodePipeline` for frontend deploys to `S3/CloudFront` (90% cache hit ratio with invalidations)

#### Key Impacts

- **Performance & Reliability**: Sustained 1k TPS with 99.9% uptime over 3 months, dropping API latency from 200ms to 120ms via optimized pipelines—enabling smooth handling of 50k+ monthly transactions and reduced error rates in live environments.
- **Efficiency Gains**: Accelerated KYC onboarding to under 3 minutes average (30% faster than baselines) through automated 3-step verification, streamlining wallet transfers and reporting for T+1 settlements while maintaining zero compliance violations.
- **Cost & Maintainability**: Reduced infra costs by 20% with targeted `ECS auto-scaling` and simple CI/CD flows; enhanced developer velocity by 40% via modular microservices and TanStack Query's declarative state management, minimizing post-deploy incidents to under 5% of total bugs.

- 🔗 https://finfan.io/en

## 🏆 Maverik AI (MVP): Healthcare Chatbot for Patient Record Analysis

As a **Senior Frontend Engineer**, I developed the MVP frontend for **Maverik AI**, a conversational AI assistant tailored for hospitals to query, visualize, and analyze patient records securely. Built on **Next.js** for server-side rendering and API routes, this **chatbot UI** integrated with RESTful backend APIs to deliver context-aware insights on medical histories, diagnostics, and trends—ensuring HIPAA-compliant interactions for clinicians. Below, I highlight **technical expertise** demonstrated and **key impacts** achieved.

#### Tech Stack

<div class="tech-pills">
  <span class="pill">Next.js</span>
  <span class="pill">TypeScript</span>
  <span class="pill">Tailwind CSS</span>
  <span class="pill">TanStack Query</span>
  <span class="pill">Zustand</span>
  <span class="pill">Recharts</span>
  <span class="pill">REST API Integration</span>
  <span class="pill">Vercel</span>
</div>

#### Technical Expertise

- **Chatbot UI & Real-Time Rendering**: Architected a responsive **Next.js App Router** interface with dynamic chat components, leveraging **server components** for initial data fetches and **client-side streaming** via Suspense boundaries—handling multi-turn conversations on patient queries (e.g., symptom trends, record summaries) with persistent context via **Zustand** state management for seamless session handling across 500+ record types.
- **API Integration & Data Orchestration**: Integrated **RESTful healthcare APIs** (e.g., FHIR-compliant endpoints) using **TanStack Query** for optimistic mutations, infinite scrolling queries, and background syncing—reducing refetch overhead by 65% with query invalidation hooks; implemented secure token refresh (JWT) and error boundaries to manage API rate limits and partial failures in sensitive data flows.
- **Visualization & Accessibility**: Engineered interactive **Recharts** components for patient analytics (e.g., timeline charts for vitals, cohort comparisons), with **Tailwind CSS** for responsive, WCAG-compliant designs; added markup parsing for AI-generated responses (e.g., embedding tables/charts in chat bubbles) and citation tooltips linking to source records, ensuring 100% mobile-first accessibility.
- **Deployment & Optimization**: Deployed on **Vercel** with edge functions for low-latency global access (<150ms TTFB); automated CI/CD via **GitHub Actions** for PR previews and linting (ESLint + Prettier), incorporating performance audits (Lighthouse scores >95) and bundle analysis to optimize for production-scale hospital networks.

#### Key Impacts

- **Performance & Usability**: Achieved **sub-200ms response rendering** in chat flows, boosting clinician engagement by **45%** (longer sessions, 1.8x query depth) and cutting navigation time by **30%** through context-aware suggestions—enabling faster triage for 1k+ daily patient interactions in MVP testing.
- **Efficiency Gains**: Streamlined record analysis workflows, reducing manual data lookups by **40%** via integrated visualizations and parsed AI insights; maintained **zero data exposure incidents** with frontend-only security layers, accelerating MVP feedback loops for backend iterations.
- **Scalability & Maintainability**: Improved code velocity by **35%** with modular Next.js patterns and TanStack Query's declarative caching, minimizing bundle size by 25%—positioning the MVP for easy scaling to full production without refactoring, while achieving **99.8% uptime** in beta deploys.

This project underscores **expertise in Next.js-driven healthcare UIs**, fusing real-time interactivity with secure API handling to transform patient data into actionable intelligence—ideal for regulated environments like hospitals.

## 🏆 NGN SEEL — Student Mental Healthcare Application

<div class="hero-divider"></div>

- Web & Play Store application
- Emotional competency assessments & analytics
- Personalized reports for parents & teachers
- 🔗 https://360seel.com

## 🕒 Stackintel — Official Website

<div class="hero-divider"></div>

- High-performance marketing & product website
- Built with modern frontend stack
- 🔗 https://stackintel.in/
