import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use unoptimized images for Cloudflare Workers compatibility
    // This avoids the WORKER_SELF_REFERENCE service binding requirement
    unoptimized: true,
  },
};

export default nextConfig;
