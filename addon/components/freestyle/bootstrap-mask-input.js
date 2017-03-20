import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-mask-input';

export default Ember.Component.extend({
  layout: layout,

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
  },
});
