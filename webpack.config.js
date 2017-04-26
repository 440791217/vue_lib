var path = require('path')
var webpack = require('webpack')
var entry,output;

if(process.env.NODE_ENV==='lib'){
    entry={
        log:'./src/lib/log/log.js'
    }
    output={
        path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: '[name].js',
            library: '[name]',
            libraryTarget: 'umd',
    }
}else{
    entry={
        main:'./src/main.js'
    }
    output={
        path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: '[name].js',
    }
}



console.log("env:"+process.env.NODE_ENV);
// {
//     main: './src/main.js',
//         // http:'./src/lib/http/http.js',
//         log:'./src/lib/log/log.js',
//     // mint:'./src/lib/mint/mint.js',
//     // nav:'./src/lib/nav/nav.js',
//     // router:'./src/lib/router/router.js',
//     // toast:'./src/lib/toast/toast.js',
// }
module.exports = {
    entry: entry,
    output: output,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this nessessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production'||process.env.NODE_ENV === 'lib') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
