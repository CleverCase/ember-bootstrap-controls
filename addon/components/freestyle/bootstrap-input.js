/*eslint no-console: ["error", { allow: ["log"] }] */
import Ember from 'ember';
import layout from '../../templates/components/freestyle/bootstrap-input';

export default Ember.Component.extend({
  layout: layout,
  value: null,
  inputId: 1,
  type: "text",
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
