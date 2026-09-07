const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// GitHub Pages 需要纯静态产物；平时（Cloudflare Workers）保持 SSR 默认行为。
const nextConfig = isGitHubPages
  ? {
      output: 'export' as const,
      assetPrefix: basePath,
      trailingSlash: true,
    }
  : {};

export default nextConfig;
