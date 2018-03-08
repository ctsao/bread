const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const objectToSass = require('./src/styles/objectToSass')
const colors = require('./src/styles/colors')

const dev = {
  mode: 'development',
  entry: {
    bread: [
      './src/index.js'
    ]
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].min.js'
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.template.html',
      injext: 'body'
    }),
    new DashboardPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
          {
            loader:
              './src/styles/prepend-loader?data=' +
              encodeURIComponent(objectToSass(colors)),
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        use: 'babel-loader'
      }
    ]
  }
}

const prod = {
  mode: 'production',
  entry: {
    bread: [
      './src/index.js'
    ]
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].min.js'
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.template.html',
      injext: 'body'
    }),
    new CompressionPlugin({
      asset: '[file].gz',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 0,
      minRatio: 0.8,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        use: 'babel-loader'
      }
    ]
  }
}

switch (process.env.npm_lifecycle_event) {
  case 'build':
    module.exports = prod
    break

  default:
    module.exports = dev
}
