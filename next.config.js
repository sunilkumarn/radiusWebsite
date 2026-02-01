/** @type {import('next').NextConfig} */

const repoName = "radiusWebsite";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  images: {
    unoptimized: true
  },

  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : ""
};
