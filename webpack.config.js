// Entry point -> Output
const path = require('path')

module.exports = {
    entry: './src/app.js', // the file gets loaded
    output: {
        path: path.join(__dirname, 'public') , // An absolute path on your machine to put your output file
        filename: 'bundle.js'
    },
    module: { 
        rules: [{ // Define loaders
            loaders: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/ 
        }, {
            test: /\.s?css$/, // scss or css
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public') // Setup the path for the server
    }
};

