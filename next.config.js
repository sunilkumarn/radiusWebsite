/** @type {import('next').NextConfig} */

const repoName = "radiusWebsite"; // your repo name

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  images: {
    unoptimized: true
  },

  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : ""
};
