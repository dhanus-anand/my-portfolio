/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    // pdfjs-dist optionally requires 'canvas' (Node only); alias so build succeeds
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
      encoding: false,
    };
    return config;
  },
};

export default nextConfig;
