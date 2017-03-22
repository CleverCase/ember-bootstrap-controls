import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-mask-input';

export default Ember.Component.extend({
  layout: layout,

  value: null,
  inputId: 1,
  type: "text",
  readonly: false,
  disabled: false,

  myMask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],

  actions: {
    keyPress() {
      console.log('key pressed');
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
