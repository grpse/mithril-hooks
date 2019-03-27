/* global process */
const createConfig = require("./webpack.config.js");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const env = process.env;
const config = createConfig(true);
config.mode = "production";

config.optimization = {
  minimizer: [new TerserPlugin({
    sourceMap: true
  })]
};

config.plugins.push(new CompressionPlugin());

if (env.ANALYSE) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
