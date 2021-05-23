const glob = require('glob');
const path = require('path');

const pugOptions = {
  nodir: true,
  ignore: ['./src/pug/mixins/**/*.pug', './src/pug/layout/**/*.pug'],
};
const jsOptions = {
  nodir: true,
  ignore: ['./src/js/theme.js', './src/js/utils.js', './src/js/test.js'],
};

let pugFiles = glob
  .sync('./src/pug/**/*.pug', pugOptions)
  .reduce((acc, val) => ({ ...acc, [val]: path.basename(val, '.pug') }), {});

let jsFiles = glob
  .sync('./src/js/*.js', jsOptions)
  .reduce((acc, val) => ({ ...acc, [path.basename(val, '.js')]: val }), {});

pugFiles = {
  ...pugFiles,
  './src/pug/index.pug': 'app',
};

const flatSitemap = siteMap => {
  function flatInnter(pages) {
    let flat = [];

    pages.map(page => {
      if (!page.hasOwnProperty('pages')) {
        flat = [...flat, page];
      } else {
        flat = [...flat, ...flatInnter(page.pages)];
      }
    });

    return flat;
  }

  const paths = {};

  flatInnter(siteMap.flatMap(item => item.pages))
    .filter(item => item.name !== '#!')
    .forEach(item => {
      paths[item.pathName] = item.path + '.html';
    });

  return paths;
};

module.exports = {
  pugFiles,
  jsFiles,
  flatSitemap,
};
