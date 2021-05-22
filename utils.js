const glob = require('glob');
const path = require('path');

const pugOptions = {
  nodir: true,
  ignore: ['./src/pug/mixins/**/*.pug', './src/pug/layout/**/*.pug'],
};
const jsOptions = {
  nodir: true,
  ignore: ['./src/js/theme/**/*.js'],
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

module.exports = {
  pugFiles,
  jsFiles,
};
