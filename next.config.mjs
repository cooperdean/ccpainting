/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      // Redirect non-www → www
      {
        source: "/:path*",
        has: [{ type: "host", value: "ccpainting.co" }],
        destination: "https://www.ccpainting.co/:path*",
        permanent: true,
      },
      // Redirect http → https (for www)
      {
        source: "/:path*",
        has: [{ type: "host", value: "http://www.ccpainting.co" }],
        destination: "https://www.ccpainting.co/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "http://ccpainting.co" }],
        destination: "https://www.ccpainting.co/:path*",
        permanent: true,
      },
      // Clean up index.html
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
