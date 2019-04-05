const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const dev = !!env.development;

  return {
    entry: './src/index.jsx',
    output: {
      path: __dirname + '/public',
      filename: './app.js',
      publicPath: '/',
    },
    devServer: {
      port: 8080,
      contentBase: './public',
      compress: false,
      bonjour: true,
      overlay: true,
      host: '0.0.0.0',
      stats: 'errors-only',
      historyApiFallback: {
        disableDotRule: true
      },
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname + '/src'),
      },
      modules: [
        'node_modules',
        path.resolve(__dirname + '/src'),
      ],
    },
    module: {
      rules: [
        {
          test: /.js[x]?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
            },
          },
        },
        {
          test: /\.(png|jpg|svg|gif)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/img/',
              },
            }
          ]
        },
        {
          test: /\.(eot|woff|woff2|ttf)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/font/',
              },
            }
          ]
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin('./public', {
        exclude: ['index.html', 'favicon.ico'],
      }),
      new webpack.DefinePlugin({
        'process.env': {
          development: dev,
        }
      })
    ],
  }
};
