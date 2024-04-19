/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, 
  eslint: {
    ignoreDuringBuilds: true,
},
  images : { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
        pathname: '**',
      },
    ],
  } 
};

export default nextConfig;
