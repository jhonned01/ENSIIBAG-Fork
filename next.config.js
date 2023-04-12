/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: [
      "www.ensiibague.edu.co",
      "ensiibague.edu.co",
      "ensiibague.edu.co/portal/",
      `ensiibague.edu.co/sygescol${new Date().getFullYear()}`,
    ],
  },
};

module.exports = nextConfig;
