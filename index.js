'use strict';

module.exports = {
  name: 'ember-bootstrap-controls',

  isDevelopingAddon() {
    return true;
  },

  included(app, parentAddon) {
    this._super.included.apply(this, arguments);

    const target = (parentAddon || app);

    target.import('vendor/ember-bootstrap-controls.css');
  }
};
