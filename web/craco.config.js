const CracoLessPlugin = require('craco-less');
const webpack = require('webpack');
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          prependData: `@import "./src/styles/theme";`,
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
      plugins: [
        new webpack.DefinePlugin({
            BASEURL: process.env.NODE_ENV === 'development' ? JSON.stringify('/api') : JSON.stringify('/api'),
        }),
        new MonacoWebpackPlugin({
            languages: ['javascript', 'css', 'html', 'typescript', 'json']
        }),
      ],
      alias: {
        "@": path.resolve(__dirname, 'src')
      }
  }
};