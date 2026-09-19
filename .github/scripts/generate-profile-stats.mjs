import { mkdir, writeFile } from "node:fs/promises";

const username = process.env.GITHUB_REPOSITORY_OWNER || "Habuskid";
const token = process.env.GITHUB_TOKEN;

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "habuskid-profile-stats",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function github(path) {
  const response = await fetch(`https://api.github.com${path}`, { headers });
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
  }
  return response.json();
}

const user = await github(`/users/${username}`);

let page = 1;
let repos = [];
while (true) {
  const batch = await github(
    `/users/${username}/repos?type=owner&per_page=100&page=${page}`
  );
  repos.push(...batch);
  if (batch.length < 100) break;
  page += 1;
}

const originals = repos.filter((repo) => !repo.fork);
const stars = originals.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
const forks = originals.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);

const stats = [
  ["Public Repos", String(user.public_repos ?? originals.length)],
  ["Stars", String(stars)],
  ["Followers", String(user.followers ?? 0)],
  ["Forks", String(forks)],
];

const escape = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const blocks = stats
  .map(([label, value], index) => {
    const x = 32 + index * 117;
    return `
      <g transform="translate(${x} 76)">
        <text class="value" x="0" y="0">${escape(value)}</text>
        <text class="label" x="0" y="28">${escape(label)}</text>
      </g>`;
  })
  .join("");

const svg = `<svg width="500" height="170" viewBox="0 0 500 170" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { font: 700 18px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; fill: #f0f6fc; }
    .sub { font: 400 11px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; fill: #8b949e; }
    .value { font: 700 25px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; fill: #f0f6fc; }
    .label { font: 500 11px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; fill: #8b949e; }
    @media (prefers-color-scheme: light) {
      .title, .value { fill: #1f2328; }
      .sub, .label { fill: #59636e; }
      .card { fill: #ffffff; stroke: #d0d7de; }
      .line { stroke: #d8dee4; }
    }
  </style>
  <rect class="card" x="0.75" y="0.75" width="498.5" height="168.5" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="1.5"/>
  <text class="title" x="28" y="38">Habuskid · GitHub Stats</text>
  <text class="sub" x="28" y="57">Generated from the GitHub API · refreshed daily</text>
  <path class="line" d="M28 70H472" stroke="#21262d"/>
  ${blocks}
  <path class="line" d="M28 124H472" stroke="#21262d"/>
  <text class="sub" x="28" y="148">Static SVG served from this repository — no per-view API calls</text>
</svg>`;

await mkdir("assets", { recursive: true });
await writeFile("assets/github-stats.svg", svg);
console.log({ username, publicRepos: user.public_repos, stars, followers: user.followers, forks });
