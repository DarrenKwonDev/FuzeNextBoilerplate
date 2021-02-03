const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = withBundleAnalyzer({
  compress: true,
  images: {
    domains: [],
  },
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    console.log(prod ? 'production build' : 'dev build');

    const plugins = [...config.plugins, new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/)];
    if (prod) {
      plugins.push(new CompressionPlugin());
    }
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'inline-source-map',
      plugins: plugins,
    };
  },
});

// async headers() {
//   return [
//     {
//       source: "/api/",
//       headers: [
//         {
//           key: "Access-Control-Allow-Origin",
//           value: "*",
//         },
//       ],
//     },
//     {
//       source: "/oauth/",
//       headers: [
//         {
//           key: "Access-Control-Allow-Origin",
//           value: "*",
//         },
//       ],
//     },
//     {
//       source: "/userprofile/",
//       headers: [
//         {
//           key: "Access-Control-Allow-Origin",
//           value: "*",
//         },
//       ],
//     },
//   ];
// },
