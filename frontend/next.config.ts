import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(process.cwd(), ".."),
  images: {
    localPatterns: [
      {
        pathname: '/api/notion-thumbnail',
      },
      {
        pathname: '/api/notion-media',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'file.notion.so',
      },
    ],
  },
};

export default nextConfig;
