const webpack = require('webpack')
const webpackConfig = require('./webpackfile.js');
webpack(webpackConfig, (err, stats) => {
  if (err) throw err
  console.log('已打包好了，我们做点别的事')
})