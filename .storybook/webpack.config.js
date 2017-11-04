
const mainConfig = require('../.config/webpack.main')

const storybookConfig = {
  resolve: mainConfig.resolve,
  module: {
    rules: mainConfig.module.loaders
  }
}

module.exports = storybookConfig
