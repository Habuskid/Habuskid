# Abubakar Aminu

Full-stack Web3 engineer.

I work across **EVM, Starknet and Solana**, with most of my recent work around protocol integration, smart contracts, wallets, privacy, autonomous agents, cross-chain systems, backend infrastructure and deployment.

I care more about making the real path work than making a demo look complete.

[habuskid.vercel.app](https://habuskid.vercel.app) · [@Habuskiid](https://x.com/Habuskiid)

---

## Selected work

### [Murk](https://github.com/Habuskid/murk) — agent spending controls on Celo

A spending layer for autonomous agents where the human sets the financial boundary and the agent operates inside it.

The interesting part is not the UI. The policy path is deterministic: the model does not decide spending limits. Murk handles accounting-currency limits, live FX evidence, Celo settlement, x402 payment flow, wallet/auth integration and persistent runtime state.

The repo also has separate CI, staging and production workflows. Production deploys are pinned to the exact commit that passed the Sepolia gate, with migration checks, environment validation and post-deploy health checks.

`TypeScript` `Next.js` `Celo` `x402` `viem` `Portal` `Neon` `Drizzle` `Vitest` `Playwright` `GitHub Actions`

[code](https://github.com/Habuskid/murk) · [live](https://murk-chi.vercel.app)

---

### [ClauseRoot](https://github.com/Habuskid/clauseroot) — protocol upgrades judged onchain

ClauseRoot puts a GenLayer governor between an upgrade proposal and the protocol being upgraded.

A proposal contains exact source code pinned to a Git commit. Validators independently evaluate that source against fixed constitutional rules. Approved code can move forward; rejected code stays recorded but does not replace the live target.

The repo includes both approval and rejection paths, live proposal history, source-byte matching, wallet-signed proposals and fee estimation.

`Python` `TypeScript` `GenLayer` `GenVM` `Intelligent Contracts` `Transaction Kit` `Next.js`

[code](https://github.com/Habuskid/clauseroot) · [live](https://clauseroot.vercel.app)

---

### [Blindpot](https://github.com/Habuskid/blindpot) — private prize savings with FHE

Blindpot uses Zama fhEVM so balances, winner selection and prize claims do not have to be exposed in plaintext.

The protocol combines encrypted onchain accounting with a no-loss savings model, Morpho yield, a keeper process and a normal wallet-facing application.

`Solidity` `Foundry` `Zama fhEVM` `Morpho` `Next.js` `viem` `wagmi` `Neon`

[code](https://github.com/Habuskid/blindpot) · [live](https://blindpot.vercel.app)

---

### [Adyton](https://github.com/Habuskid/Adyton) — private treasury controls on Starknet

A treasury can keep balances and transfers private while still enforcing rules on how money leaves the vault.

Adyton combines Cairo policy contracts with STRK20 privacy primitives, private transfer handling, recipient rules, spending caps, Stark-curve cryptography and selective auditor disclosure.

`Cairo` `Starknet` `STRK20` `Starknet.js` `React` `TypeScript`

[code](https://github.com/Habuskid/Adyton)

---

### [Sedge](https://github.com/Habuskid/sedge) — cross-chain wallet actions from natural language

Sedge turns user intent into supported swaps, transfers and CCTP bridge operations.

It connects Circle App Kit and CCTP with wallet state, transaction history and multi-chain execution across Arc and EVM test networks.

`TypeScript` `Next.js` `Circle App Kit` `CCTP` `Arc` `viem` `wagmi` `PostgreSQL` `Drizzle`

[code](https://github.com/Habuskid/sedge) · [live](https://sedge.vercel.app)

---

### [Black Box](https://github.com/Habuskid/blvckbox) — forensic infrastructure for financial agents

Black Box records what an autonomous agent actually knew before it made a decision.

Raw tool evidence is captured before interpretation, later market information is kept separate, and a deterministic server-side policy checks exposure. If the real Binance Agentic MCP connection is unavailable, the system fails instead of inventing a successful run.

`TypeScript` `Next.js` `Binance Agentic MCP` `Zod` `Node.js`

[code](https://github.com/Habuskid/blvckbox)

---

## Across the rest of my repos

I have also built:

- Solana wallet/activity tracking and NFT tooling
- Reservoir and Metaplex integrations
- payroll streaming and vesting contracts
- x402-paid APIs and agent services
- wallet and token risk analysis
- collectible / RWA market intelligence
- Telegram automation
- GitHub-native ingestion pipelines
- browser-driven demo automation with Playwright and FFmpeg
- commerce and account systems with Prisma/Postgres

---

## The stack I actually use

**Contracts / protocol:** Solidity, Foundry, Hardhat, Cairo, Starknet, Zama fhEVM, GenLayer  
**Wallet / chain:** viem, wagmi, ethers.js, WalletConnect, Starknet.js, Solana web3.js, Metaplex, Reservoir  
**Application:** TypeScript, JavaScript, Next.js, React, Vite, Node.js, Express, Flask  
**Data:** PostgreSQL, Neon, Prisma, Drizzle, Supabase, Redis, Upstash, SQLite  
**Infra:** GitHub Actions, Vercel, Linux/Bash, serverless jobs, cron/keepers, staged deployments, migrations, secrets and health checks  
**Testing:** Vitest, Jest, Playwright, Foundry tests, Pytest

---

The pattern across most of my work is simple: **protocol first, real integration second, failure handling before polish.**