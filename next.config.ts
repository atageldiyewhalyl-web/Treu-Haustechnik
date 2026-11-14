import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Keep the old WordPress address of the services overview working
      { source: "/leistungen", destination: "/#leistungen", permanent: false },
      // Old WordPress addresses Google still shows: send them to their new pages
      { source: "/datenschutzerklaerung", destination: "/datenschutz", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap.html", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;
