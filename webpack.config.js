var path = require("path");

module.exports = {
    entry: "./src/src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "index.js"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}