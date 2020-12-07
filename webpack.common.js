const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app/src'),
    entry: [
        './js/index.js',
        './sass/App.scss',
    ],

    output: {
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}