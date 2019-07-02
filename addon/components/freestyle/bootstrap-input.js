/*eslint no-console: ["error", { allow: ["log"] }] */
import Component from '@ember/component';

import layout from '../../templates/components/freestyle/bootstrap-input';

export default Component.extend({
  layout: layout,
  value: undefined,
  readonly: false,
  disabled: false,
  console: window.console,

  actions: {
    keyPress() {
      if (this.console.debug) {
        this.console.debug('key pressed');
      } else {
        this.console.log('key pressed');
      }
    },
    keyUp() {
      if (this.console.debug) {
        this.console.debug('key up');
      } else {
        this.console.log('key up');
      }
    },
    keyDown() {
      if (this.console.debug) {
        this.console.debug('key down');
      } else {
        this.console.log('key down');
      }
    },
  },
});
