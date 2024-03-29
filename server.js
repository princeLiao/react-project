const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const port=4000;
const config = require('./webpack.dev.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(port, 'localhost', () => {
  console.log(`dev server listening on port ${port}`);
});