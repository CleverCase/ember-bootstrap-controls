/*eslint no-console: ["error", { allow: ["log"] }] */
import Component from '@ember/component';
import layout from '../../templates/components/freestyle/bootstrap-input';

export default Component.extend({
  layout: layout,
  value: undefined,
  readonly: false,
  disabled: false,

  actions: {
    keyPress() {
    },
    keyUp() {
    },
    keyDown() {
    },
  },
});
