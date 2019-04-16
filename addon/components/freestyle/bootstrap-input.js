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
      if (console.debug) {
        console.debug('key pressed');
      } else {
        console.log('key pressed');
      }
    },
    keyUp() {
      if (console.debug) {
        console.debug('key up');
      } else {
        console.log('key up');
      }
    },
    keyDown() {
      if (console.debug) {
        console.debug('key down');
      } else {
        console.log('key down');
      }
    },
  },
});
