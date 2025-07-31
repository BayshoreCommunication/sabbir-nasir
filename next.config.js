/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Move this outside the remotePatterns array
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'bayshore.nyc3.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'dashboard-sabbir-nasir.vercel.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'backend-sabbir-nasir.vercel.app',
        port: '',
      },
    ],
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
