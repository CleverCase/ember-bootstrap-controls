import Ember from 'ember';
import layout from '../templates/components/bootstrap-debounce-input';
import InputableMixin from '../mixins/components/inputable';
import computedActionKey from '../utils/computed-action-key';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  classNames: '',
  layout: layout,

  value: "",
  textValue: null,
  debounce: 1000,
  label: null,
  placeholder: null,
  required: false,

  didReceiveAttrs() {
    this.get('setValue').perform(this.get('textValue'));
  },

  setValue: task(function * (text) {
    yield timeout(this.get('debounce')); // wait for a monent before changing
    if (text !== this.get('value')) {
      this.set('value', text);
    }
  }).restartable(),
});
