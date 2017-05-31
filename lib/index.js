'use strict';

var app = require('./server');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");

if (process.env.NODE_ENV === 'development') {
    var compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: "/", // Same as `output.publicPath` in most cases.
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    }));
}

app.listen(8000, function() {
  console.log("Server listening on port 8000!")
});
