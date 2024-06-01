// @ts-check
!process.env.SKIP_ENV_VALIDATION && (await import("./src/services/libs/env.mjs"));
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/services/libs/i18n.ts')

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "cdn.computacao-amostra.com"
      }
    ]
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      }
    ]
  },
};

export default withNextIntl(nextConfig);
