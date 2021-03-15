// next.config.js
module.exports = {
  images: {
    domains: ["images.prismic.io", "genk.mediacdn.vn"],
  },
  excludeFile: (str) => /\*.{spec,test}.*/.test(str),
  webpack: (config, { isServer, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
