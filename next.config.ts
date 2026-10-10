import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Keep the old WordPress address of the services overview working
    return [{ source: "/leistungen", destination: "/#leistungen", permanent: false }];
  },
};

export default nextConfig;
