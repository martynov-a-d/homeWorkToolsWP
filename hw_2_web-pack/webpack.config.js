const {resolve} =require('path')

module.exports = {
    mode: "development",
    entry: "./logic/main.js",
    output: {
        path: resolve(__dirname, 'build'),
        filename: "main.js",
    }
}