/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { NEXT_PUBLIC_DEPLOY_ENV: process.env.VERCEL_ENV || "development" },
  async redirects() {
    return [{ source: "/cennik", destination: "/oferta", permanent: true }];
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
