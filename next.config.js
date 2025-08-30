/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/plasmic-pages", destination: "/", permanent: false },
    ];
  },
};