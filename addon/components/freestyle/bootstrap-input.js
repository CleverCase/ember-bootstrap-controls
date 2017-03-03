import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-input';

export default Ember.Component.extend({
  layout: layout,

  value: "test",
  inputId: 1,
  type: "text",
  readonly: false,
  disabled: false,

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
  },
});
