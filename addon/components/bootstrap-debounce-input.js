import Ember from 'ember';
import layout from '../templates/components/bootstrap-debounce-input';
import { task, timeout } from 'ember-concurrency';
import { INPUT_CLASS_NAME } from './bootstrap-input';

export default Ember.Component.extend({
  layout: layout,
  tagName: '',

  classNames: [INPUT_CLASS_NAME],

  /* Public Attrs */
  value: undefined,
  debounce: 800,

  /* Public Actions */
  onChange: undefined,

  _value: undefined,

  didReceiveAttrs() {
    this.set('_value', this.get('value'));
  },

  valueChanged: task(function * () {
    yield timeout(this.get('debounce')); // wait for a monent before changing

    if (this.get('onChange')) {
      this.get('onChange')(this.get('_value'));
    }
  }).restartable(),
});
