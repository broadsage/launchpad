# Launchpad: Premium Monorepo Starter

Welcome to **Launchpad**, a professional-grade monorepo boilerplate designed for high-performance engineering teams. This project integrates the latest stable versions of industry-leading technologies to provide a seamless development experience from local to production.

## 🚀 Tech Stack

- **Monorepo Management:** [Turborepo](https://turbo.build/repo)
- **Frontend:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **CMS:** [Strapi v5](https://strapi.io/) (Latest, TypeScript, GraphQL)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Framer Motion](https://www.framer.com/motion/)
- **Database:** PostgreSQL (Development via Docker)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 📂 Project Structure

```text
├── apps/
│   ├── web/          # Next.js 15 Application
│   └── backend/      # Strapi v5 CMS
├── packages/
│   ├── ui/           # Shared UI Component Library
│   ├── eslint-config/# Shared ESLint Configurations
│   └── typescript-config/ # Shared TypeScript Configurations
└── package.json      # Workspace root
```

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 20.x
- pnpm >= 9.x

### Installation

```bash
pnpm install
```

### Database

Start the PostgreSQL database:

```bash
docker compose up -d
```

### Development

Run both the frontend and backend simultaneously in development mode:

```bash
pnpm dev
```

Or run them individually:

```bash
pnpm dev --filter web     # Start Next.js on http://localhost:3000
pnpm dev --filter backend # Start Strapi on http://localhost:1337
```

### Strapi Setup

The backend comes pre-configured with the GraphQL plugin. To initialize the admin panel and seed example data:

1. Start the backend: `pnpm dev --filter backend`
2. Follow the instructions in the terminal to create your first admin user.
3. (Optional) Run the seed script: `cd apps/backend && pnpm run seed:example`

## 🏗️ Build

Build all applications for production:

```bash
pnpm build
```

## 📜 License

MIT
