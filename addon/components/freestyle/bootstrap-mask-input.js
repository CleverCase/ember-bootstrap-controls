/*eslint no-console: ["error", { allow: ["log"] }] */
import Component from '@ember/component';
import layout from '../../templates/components/freestyle/bootstrap-mask-input';

export default Component.extend({
  layout: layout,

  value: null,
  inputId: 1,
  type: "text",
  readonly: false,
  disabled: false,
  showMaskOnHover: false,
  showMaskOnFocus: false,

  init() {
    this.myMask = '(999) 999-999';
    this._super(...arguments);
  },

  actions: {
    keyPress() {
      console.log('key pressed:');
    },
    keyUp() {
      console.log('key up');
    },
    keyDown() {
      console.log('key down');
    },
    focusOut() {
      console.log('focus out');
    }
  },
});
