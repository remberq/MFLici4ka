const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
// const packageJson = require('./package.json');
// const deps = packageJson.devDependencies;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3002/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'crabApp',
      filename: 'remoteEntry.js',
      exposes: {
        './MFText': './src/MFText',
      },
      // shared: {
      //   ...deps,
      //   react: {
      //     singleton: true,
      //     eager: true,
      //     requiredVersion: deps.react,
      //   },
      //   'react-dom': {
      //     singleton: true,
      //     eager: true,
      //     requiredVersion: deps['react-dom'],
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3002,
    hot: true,
  },
};
