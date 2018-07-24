/*eslint no-console: ["error", { allow: ["log"] }] */
import Component from '@ember/component';

import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-input';

export default Component.extend({
  layout: layout,
  value: undefined,
  readonly: false,
  disabled: false,

  actions: {
    keyPress() {
      Ember.Logger.debug('key pressed');
    },
    keyUp() {
      Ember.Logger.debug('key up');
    },
    keyDown() {
      Ember.Logger.debug('key down');
    },
  },
});
