const glob = require('glob');
const path = require('path');
const obj = {
  tags: {
    headTags: [
      {
        tagName: 'script',
        voidTag: false,
        meta: { plugin: 'html-webpack-plugin' },
        attributes: { defer: true, src: 'js/vendors/%40popperjs.js' },
      },
      {
        tagName: 'script',
        voidTag: false,
        meta: { plugin: 'html-webpack-plugin' },
        attributes: { defer: true, src: 'js/vendors/list.js.js' },
      },
      {
        tagName: 'script',
        voidTag: false,
        meta: { plugin: 'html-webpack-plugin' },
        attributes: {
          defer: true,
          src: 'js/vendors/string-natural-compare.js',
        },
      },
      {
        tagName: 'script',
        voidTag: false,
        meta: { plugin: 'html-webpack-plugin' },
        attributes: { defer: true, src: 'js/vendors/overlayscrollbars.js' },
      },
      {
        tagName: 'script',
        voidTag: false,
        meta: { plugin: 'html-webpack-plugin' },
        attributes: { defer: true, src: 'js/vendors/is_js.js' },
      },
      {
        tagName: 'script',
        voidTag: false,
        meta: { plugin: 'html-webpack-plugin' },
        attributes: { defer: true, src: 'js/vendors/bootstrap.js' },
      },
      {
        tagName: 'script',
        voidTag: false,
        meta: { plugin: 'html-webpack-plugin' },
        attributes: { defer: true, src: 'js/theme.js' },
      },
      {
        tagName: 'link',
        voidTag: true,
        meta: { plugin: 'html-webpack-plugin' },
        attributes: { href: 'css/theme.min.css', rel: 'stylesheet' },
      },
      {
        tagName: 'link',
        voidTag: true,
        meta: { plugin: 'html-webpack-plugin' },
        attributes: { href: 'css/user.min.css', rel: 'stylesheet' },
      },
    ],
    bodyTags: [],
  },
  files: {
    publicPath: '',
    js: [
      'js/vendors/%40popperjs.js',
      'js/vendors/list.js.js',
      'js/vendors/string-natural-compare.js',
      'js/vendors/overlayscrollbars.js',
      'js/vendors/is_js.js',
      'js/vendors/bootstrap.js',
      'js/theme.js',
    ],
    css: ['css/theme.min.css', 'css/user.min.css'],
  },
  options: {
    template:
      'D:\\webpack-falcon\\node_modules\\html-webpack-plugin\\lib\\loader.js!D:\\webpack-falcon\\src\\pug\\test.pug',
    templateContent: false,
    filename: 'index.html',
    publicPath: 'auto',
    hash: false,
    inject: false,
    scriptLoading: 'defer',
    compile: true,
    favicon: false,
    minify: 'auto',
    cache: true,
    showErrors: true,
    chunks: ['theme', 'user'],
    excludeChunks: [],
    chunksSortMode: 'auto',
    meta: {},
    base: false,
    title: 'Webpack App',
    xhtml: false,
    data: 'test',
  },
};
const jsOptions = {
  nodir: true,
  ignore: ['./src/js/utils.js'],
};
let jsFiles = glob
  .sync('./src/js/*.js', jsOptions)
  .reduce((acc, val) => ({ ...acc, [path.basename(val, '.js')]: val }), {});

// console.log(jsFiles);

const tag = 'Asasdasder.min.css';
console.log(tag.replace(/([a-zA-Z]+)/, '$1-rtl'));
each tag in htmlWebpackPlugin.files.js
script(src=tag) 


each tag in htmlWebpackPlugin.files.css
link(rel="stylesheet", href=tag)