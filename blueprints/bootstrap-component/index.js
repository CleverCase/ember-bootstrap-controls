/* eslint-env node */
const path = require('path');

module.exports = {
  description: 'adds extra boilerplate files',

  afterInstall(options) {
    const ComponentBlueprint = this.lookupBlueprint('component');
    const ComponentTestBlueprint = this.lookupBlueprint('component-test');
    const FreestyleComponentBlueprint = this.lookupBlueprint('freestyle-component', {
      paths: [path.resolve(__dirname, '..')]
    });

    // return ComponentBlueprint.install(options).then(() => {
    //   return ComponentTestBlueprint.install(options);
    // }).then(() => {
      return FreestyleComponentBlueprint.install(options);
    // });
  }
};
