# Abubakar Aminu

**Full-stack Web3 engineer**

I build Web3 products end to end: smart contracts, protocol logic, wallets, backend services, data layers, frontend applications, testing, deployment, and production checks.

My work spans **EVM chains, Starknet, Solana, privacy systems, DeFi, payments, cross-chain infrastructure, autonomous agents, NFT tooling, market/risk systems, and cloud/DevOps**.

[Portfolio](https://habuskid.vercel.app) · [X / Twitter](https://x.com/Habuskiid) · [GitHub](https://github.com/Habuskid)

---

## What I work on

| Area | What I have built with |
| --- | --- |
| **Smart contracts & protocols** | Solidity, Foundry, Hardhat, Cairo, Starknet, Zama fhEVM, STRK20, GenLayer Intelligent Contracts |
| **Web3 applications** | Next.js, React, TypeScript, viem, wagmi, ethers.js, WalletConnect, RainbowKit, SIWE |
| **DeFi & payments** | Circle App Kit, CCTP, Morpho, x402, USDC/EURC flows, payroll streaming, cross-chain transfers |
| **Privacy** | FHE with Zama, encrypted balances and claims, Starknet privacy tooling, selective disclosure |
| **Agents & automation** | Binance Agentic MCP, Bitget Agent SDK, OKX x402, GenLayer, deterministic policy engines, keepers and scheduled jobs |
| **Solana & NFT tooling** | Solana web3.js, Metaplex, Reservoir, wallet/activity tracking, mint and marketplace tooling |
| **Backend & data** | Node.js, Express, Flask, PostgreSQL, Neon, Prisma, Drizzle, Supabase, Redis, Upstash, SQLite |
| **Cloud & DevOps** | GitHub Actions, CI/CD, Vercel, serverless jobs, staging/production pipelines, secrets, migrations, health checks, deployment preflights |
| **Testing** | Vitest, Jest, Playwright, Foundry tests, Pytest, integration and live-environment checks |

---

## Selected engineering work

### [Murk](https://github.com/Habuskid/murk)
**Spending controls for autonomous agents on Celo**

A user defines how much an agent is allowed to spend. Murk enforces those limits before an x402 payment can be made.

What I built:
- deterministic spending-policy engine
- Celo testnet/mainnet configuration
- x402 payment flow
- Portal wallet/auth integration
- Neon + Drizzle persistence
- CI checks for tests, migrations, RPC configuration, facilitator support and FX coverage
- separate staging and production deployment workflows
- deployment preflight and post-deploy health checks

**Stack:** TypeScript, Next.js, Celo, x402, viem, Portal, Neon, Drizzle, Vitest, Playwright, GitHub Actions

[Code](https://github.com/Habuskid/murk) · [Live](https://murk-chi.vercel.app)

---

### [ClauseRoot](https://github.com/Habuskid/clauseroot)
**Upgrade control for autonomous protocols on GenLayer**

Protocol upgrades are submitted as source code. GenLayer validators evaluate the exact source against fixed rules before an upgrade can be accepted.

What I built:
- GenLayer Governor Intelligent Contract
- immutable source verification using commit-pinned GitHub content
- validator-based semantic checks
- approved and rejected upgrade paths
- live onchain proposal history
- wallet-signed proposal flow and fee estimation

**Stack:** Python, TypeScript, Next.js, GenLayer, GenVM, Transaction Kit

[Code](https://github.com/Habuskid/clauseroot) · [Live](https://clauseroot.vercel.app)

---

### [Blindpot](https://github.com/Habuskid/blindpot)
**Confidential no-loss savings on Zama fhEVM**

Savings balances, prize selection, and claims are handled with encrypted onchain state instead of exposing everything publicly.

What I built:
- Solidity contracts using Zama fhEVM
- encrypted balance accounting
- encrypted winner selection and claims
- Morpho yield integration
- Foundry contract tests
- keeper automation and scheduled execution
- Next.js frontend and wallet flow

**Stack:** Solidity, Foundry, Zama fhEVM, Morpho, Next.js, TypeScript, viem, wagmi, Neon

[Code](https://github.com/Habuskid/blindpot) · [Live](https://blindpot.vercel.app)

---

### [Adyton](https://github.com/Habuskid/Adyton)
**Private treasury controls on Starknet**

Treasury funds stay private while outgoing transfers still have to satisfy onchain spending rules.

What I built:
- Cairo policy contracts
- STRK20 privacy integration
- private transfer flow
- spending caps and recipient rules
- Stark curve cryptography
- selective auditor viewing-key flow
- React/TypeScript frontend

**Stack:** Cairo, Starknet, STRK20, Starknet.js, React, TypeScript, Vite

[Code](https://github.com/Habuskid/Adyton)

---

### [Sedge](https://github.com/Habuskid/sedge)
**Cross-chain stablecoin operations through natural-language commands**

Sedge turns user instructions into wallet actions for supported swaps, transfers and CCTP bridges.

What I built:
- intent parsing and transaction preparation
- Circle App Kit integration
- CCTP bridge flows
- Arc, Ethereum Sepolia, Base Sepolia and Arbitrum Sepolia support
- wallet connection and transaction history
- PostgreSQL/Drizzle-backed application state

**Stack:** Next.js, TypeScript, Circle App Kit, CCTP, Arc, viem, wagmi, PostgreSQL, Drizzle

[Code](https://github.com/Habuskid/sedge) · [Live](https://sedge.vercel.app)

---

### [Black Box](https://github.com/Habuskid/blvckbox)
**Decision records and risk controls for autonomous financial agents**

Black Box records the evidence available to an agent before a decision, keeps later outcomes separate, and applies server-side risk checks before execution.

What I built:
- Binance Agentic MCP integration
- raw tool-result capture
- constrained decision objects
- deterministic exposure policy
- decision-quality evaluation separated from P&L
- fail-closed behavior when real tools or credentials are unavailable

**Stack:** Next.js, TypeScript, Binance Agentic MCP, Zod, Node.js

[Code](https://github.com/Habuskid/blvckbox)

---

## Other shipped work

**[ClosedBell](https://closedbell.vercel.app/desk)**  
Portfolio stress testing for tokenized-stock trades outside the underlying US market session. Uses Bitget market data, deterministic risk calculations, evidence capture, Vitest and Playwright.

**[FlightClaim](https://github.com/Habuskid/flightclaim)**  
EU261 flight-compensation eligibility service with x402 payments, live flight data, Redis rate limiting and Jest tests.

**[Renaiss Intelligence Agent](https://github.com/Habuskid/Renaiss-Intelligence-Agent)**  
Collectibles/RWA research interface using live market data, Gemini analysis and interactive price history.

**[ArcDrip](https://arcdrip.vercel.app)**  
Smart-contract payroll streaming, vesting, expenses and stablecoin payments on Arc.

**[RiskScan](https://github.com/Habuskid/riskscan)**  
Wallet/token risk checks using live security data and an x402-enabled API.

**[UI Reference Library](https://github.com/Habuskid/ui-templates)**  
GitHub-native design-reference capture flow with Actions, Supabase and automated ingestion.

I have also built private tooling around **Solana wallet/activity tracking, NFT minting and marketplace execution, commerce systems, Telegram automation, and demo automation**.

---

## Engineering approach

I prefer to prove the hard part before polishing the interface.

1. Build the core logic.
2. Integrate the real protocol or API.
3. Make the full path work end to end.
4. Add tests, failure handling and observability.
5. Set up staging, deployment and production checks.
6. Then finish the UI and demo.

I do not use fake success states to hide missing integrations. If a dependency is unavailable, the application should fail clearly and say why.

---

## Cloud / DevOps work

A few examples from my repositories:

- GitHub Actions CI for tests, builds and integration checks
- separate staging and production deployment workflows
- exact-commit promotion from testnet validation to mainnet deployment
- secret-backed environment configuration
- database migration checks before deployment
- Vercel CLI builds and deployments
- post-deploy health checks
- scheduled keepers and cron jobs
- serverless PostgreSQL/Redis infrastructure
- deployment preflight scripts that reject invalid or placeholder configuration

---

## Current toolkit

**Languages:** TypeScript, JavaScript, Solidity, Cairo, Python, PHP, HTML/CSS  
**Frontend:** Next.js, React, Vite, Tailwind CSS  
**Web3:** viem, wagmi, ethers.js, Foundry, Hardhat, Starknet.js, Solana web3.js, Metaplex, Reservoir  
**Networks / protocols:** Ethereum/EVM, Celo, Arc, Starknet, Solana, GenLayer, Zama fhEVM, Circle CCTP, Morpho, x402  
**Data:** PostgreSQL, Neon, Prisma, Drizzle, Supabase, Redis, Upstash, SQLite  
**Cloud / delivery:** GitHub Actions, Vercel, serverless workloads, Linux/Bash, Docker, Railway, Modal, Vultr, AWS  
**Testing:** Vitest, Jest, Playwright, Foundry, Pytest

---

## Open to engineering roles

I am interested in **Web3 / blockchain engineering, full-stack Web3, protocol engineering, and Web3 infrastructure roles** where I can work across contracts, backend, frontend and deployment.

For work or collaboration: [X @Habuskiid](https://x.com/Habuskiid) · [Portfolio](https://habuskid.vercel.app)
