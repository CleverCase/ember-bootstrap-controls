/* eslint-env node */
const path = require('path');
const chalk = require('chalk');
const stringUtils = require('ember-cli-string-utils');

module.exports = {
  description: 'adds extra boilerplate files',

  beforeInstall(options) {
    const ComponentBlueprint = this.lookupBlueprint('component');
    const ComponentTestBlueprint = this.lookupBlueprint('component-test');

    return ComponentBlueprint.install(options).then(() => {
      return ComponentTestBlueprint.install(options);
    }).then(() => {
      let ui = options.ui;
      ui.writeLine(
        chalk.green('You can overwrite addon/components/' + stringUtils.dasherize(options.entity.name) + '.js')
      );
      ui.writeLine(
        chalk.green('You can overwrite tests/integrations/components/' + stringUtils.dasherize(options.entity.name) + '.js')
      );
    });
  },

  afterInstall(options) {
    const FreestyleComponentBlueprint = this.lookupBlueprint('freestyle-component', {
      paths: [path.resolve(__dirname, '..')]
    });

    return FreestyleComponentBlueprint.install(options);
  }
};
