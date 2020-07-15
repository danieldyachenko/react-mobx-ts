const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    devServer: {
        index: 'index.html',
        contentBase: path.join(__dirname, 'public'),
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
    ],
}