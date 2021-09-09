const { resolve } = require('path');

module.exports = {     
    mode: 'development',             
    entry: './js/main.js',         
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js',
        devServer: {
            port: 9000
          }
    }
};