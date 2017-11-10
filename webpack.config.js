const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        // __dirname = o diretório atual
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    // Webpack dev server
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.js$s/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    }
}
