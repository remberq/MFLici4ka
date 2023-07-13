const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),

        }),
        new ModuleFederationPlugin({
            name: 'Foxy',
            remotes: {
                crabApp: 'crabApp@http://localhost:3002/remoteEntry.js',
            },
            shared: ['react', 'react-dom']
        }),
    ],
    devServer: {
        static: './dist',
        port: 8080,
        hot: true,
    },
};
