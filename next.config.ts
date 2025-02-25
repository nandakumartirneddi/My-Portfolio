import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignores ESLint warnings during production
  },
  images: {
    domains: ["yourdomain.com", "anotherdomain.com"], // ✅ Allow external images
    formats: ["image/avif", "image/webp"], // ✅ Optimize images
  },
  reactStrictMode: true, // ✅ Helps detect issues
};

export default nextConfig; // ✅ Correct TypeScript export