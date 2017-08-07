import Ember from 'ember';
import layout from '../templates/components/bootstrap-debounce-input';
import InputableMixin from '../mixins/components/inputable';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  classNames: '',
  layout: layout,

  /* Public Attrs */
  value: null,
  debounce: 800,
  label: null,
  placeholder: null,
  required: false,

  /* Public Actions */
  onChange: null,

  _value: null,

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
