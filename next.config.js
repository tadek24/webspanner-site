/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {               // <--- DODAJ TO
    unoptimized: true,    // <--- DODAJ TO
  },
};

export default nextConfig;
