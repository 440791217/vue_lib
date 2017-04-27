var path = require('path')
var webpack = require('webpack')
var glob = require('glob')
var log = require('mark_logger')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var entry, output, plugins;


if (process.env.NODE_ENV === 'lib') {
    entry = getEntry("./src/lib/**/*.js")
    output = {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'js/[name].js',
        library: '[name]',
        libraryTarget: 'umd',
    }
} else {
    entry = {
        main: './src/main.js'
    }
    output = {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js',
    }
}

plugins = [
    new ExtractTextPlugin("/style/styles.css"),
]


console.log("env:" + process.env.NODE_ENV);

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
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: ["css-loader", "postcss-loader"]
                }),

            },
        ]
    },
    plugins: plugins,
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

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'lib') {
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

/*
 extract entry
 */
function getEntry(globPath) {

    var array = {}


    /*
     获取地址
     */

    glob.sync(globPath).forEach(function (entry) {

        var key = path.basename(entry, '.js');
        array[key] = entry;
    })

    for (var key in array) {
        log.i("entry---" + key + ":" + array[key]);
    }

    return array;
}