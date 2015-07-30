var path = require('path');;
var pkg = require('./package.json');;

module.exports = {
  // cmd, homepage, bugs all pulled from package.json
  cmd: 'doublestandard',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Double Semicolons -- Just in case!',
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  formatter: null
};;
