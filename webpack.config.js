const path = require('path');

const buildDist = path.resolve(__dirname, 'dist');


module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [{ 
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: [/node_modules/, /scripts/]
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: buildDist
  },
  devServer: {
    open: true,
    contentBase: buildDist,
    watchContentBase: true

  }

};
