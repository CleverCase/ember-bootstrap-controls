/* eslint-env node */
'use strict';

const path = require('path');
const fastbootTransform = require('fastboot-transform');
const Funnel = require('broccoli-funnel');
const caniuse = require('caniuse-api');

function findHostShim() {
  let current = this;
  let app;
  do {
    app = current.app || app;
  } while (current.parent.parent && (current = current.parent));
  return app;
}

module.exports = {
  name: 'ember-cli-classlist-polyfill',

  included() {
    if (this.shouldImportPolyfill()) {
      this._import('vendor/classlist-polyfill/index.js');
    }
  },

  // polyfill `this.import` if required
  _import(file) {
    if (typeof this.import === 'function') {
      this.import(file);
    } else {
      let app = findHostShim.call(this);
      app.import(file);
    }
  },

  _findHost() {
    let current = this;
    let app;
    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));
    return app;
  },

  treeForVendor() {
    let modulePath = path.dirname(require.resolve('classlist-polyfill'));
    let vendorTree = new Funnel(modulePath, {
      destDir: 'classlist-polyfill'
    });

    return fastbootTransform(vendorTree);
  },

  shouldImportPolyfill() {
    let browsers = this.project.targets && this.project.targets.browsers;
    return !browsers || !caniuse.isSupported('classlist', browsers);
  }
};
