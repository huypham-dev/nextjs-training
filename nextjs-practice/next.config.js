// next.config.js
module.exports = {
  images: {
    domains: ["images.prismic.io", "genk.mediacdn.vn"],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
