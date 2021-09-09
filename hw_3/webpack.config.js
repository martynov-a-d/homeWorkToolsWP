const {resolve} =require('path')

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: resolve(__dirname, 'build'),
        filename: "main.js",
    }
}