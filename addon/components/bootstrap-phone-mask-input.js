import Ember from 'ember';
import layout from '../templates/components/bootstrap-phone-mask-input';
import InputableMixin from '../mixins/components/inputable';
import computedActionKey from '../utils/computed-action-key';
import { createNumberMask } from '../text-mask-addons';

const { Component } = Ember;

export default Component.extend(InputableMixin, {
  tagName: '',
  classNames: '',
  layout: layout,

  placeholderChar: '_',
  placeholder: '(___) ___-____',
  value: null,
  readonly: null,
  type: null,
  srOnly: null,
  tabindex: 0,
  required: true,

  phoneMask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  keyPress: computedActionKey('key-press'),
  keyUp: computedActionKey('key-up'),
  keyDown: computedActionKey('key-down'),

  hasValue: Ember.computed('value', function() {
    const value = this.get('value');

    return value ? true : false;
  }),

  actions: {
    keyPress: function() {
      this.sendAction('key-press', ...arguments);
    },

    keyUp: function() {
      this.sendAction('key-up', ...arguments);
    },

    keyDown: function() {
      this.sendAction('key-down', ...arguments);
    },
  },
});
