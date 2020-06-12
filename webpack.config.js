const path = require("path")

const isDevelopment = process.env.NODE_ENV === 'development'
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;// ...
const CompressionPlugin = require('compression-webpack-plugin');

let plugins;

if(isDevelopment) {
    plugins = []
} else {
    plugins = [new CompressionPlugin()]
}

module.exports = {
    watch: true,
    mode: "development",
    entry: "./src/js/index.jsx",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [path.resolve(__dirname, "node_modules")],
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]

            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/js/"),
        filename: "[name].bundle.js"
    },
    plugins: plugins,
    optimization: {
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: ".",
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/
                }
            }
        }
    }
}
