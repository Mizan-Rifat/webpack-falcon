const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const { pugFiles, jsFiles, flatSitemap } = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRTLPlugin = require('webpack-rtl-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

// const fileName = './src/pug/test.pug';
const fileName = './src/pug/pages/starter.pug';

console.log(fileName.replace('.pug', '').split('/').slice(3).join('/'));

module.exports = {
  mode: 'development',
  entry: {
    ...jsFiles,
    theme: ['./src/js/theme.js', './src/scss/theme.scss'],
    user: './src/scss/user.scss',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    // ...Object.keys(pugFiles).map(file => {
    //   return new HtmlWebpackPlugin({
    //     template: file,
    //     inject: false,
    //     filename: file.replace('.pug', '.html').split('/').slice(3).join('/'),
    //     data: file,
    //     chunks: ['theme', pugFiles[file], 'user'],
    //     chunksSortMode: 'manual',
    //   });
    // }),
    new HtmlWebpackPlugin({
      template: fileName,
      inject: false,
      // filename: file.replace('.pug', '.html').split('/').slice(3).join('/'),
      data: {
        pathName: fileName.replace('.pug', '').split('/').slice(3).join('/'),
        lll: flatSitemap,
      },
      chunks: ['theme', 'user'],
      // chunksSortMode: 'manual',
    }),
    new BeautifyHtmlWebpackPlugin({
      indent_size: 2,
      indent_char: ' ',
      indent_with_tabs: false,
      editorconfig: false,
      eol: '\n',
      end_with_newline: false,
      indent_level: 0,
      preserve_newlines: true,
      max_preserve_newlines: 2,
      space_in_paren: false,
      space_in_empty_paren: false,
      jslint_happy: false,
      space_after_anon_function: false,
      space_after_named_function: false,
      brace_style: 'collapse',
      unindent_chained_methods: false,
      break_chained_methods: false,
      keep_array_indentation: false,
      unescape_strings: false,
      wrap_line_length: 0,
      e4x: false,
      comma_first: false,
      operator_position: 'before-newline',
      indent_empty_lines: false,
      templating: ['auto'],
    }),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
    new WebpackRTLPlugin({
      filename: 'css/[name]-rtl.min.css',
      minify: true,
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        // include: path.join(__dirname, 'src'),
        use: ['pug-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: pathData => pathData.filename.replace('src/', ''),
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: module =>
            'vendors/' +
            module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1],
        },
      },
    },
  },
  devServer: {
    open: true,
    port: 8080,
    contentBase: path.resolve(__dirname, 'public'),
  },
};
