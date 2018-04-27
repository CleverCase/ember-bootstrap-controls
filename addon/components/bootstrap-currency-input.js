import Ember from 'ember';
import layout from '../templates/components/bootstrap-currency-input';
import InputableMixin from '../mixins/components/inputable';
import asserIfUsingRenamedEvents from '../utils/assert-if-using-renamed-events';
import { createNumberMask } from 'ember-text-mask-addons';

const { Component } = Ember;

export default Component.extend(InputableMixin, {
  tagName: '',
  classNames: '',
  layout: layout,

  placeholder: null,
  value: null,
  readonly: null,
  type: null,
  srOnly: false,
  tabindex: 0,
  required: true,

  currencyMask: createNumberMask({ prefix: '$', allowDecimal: true, decimalLimit: 2 }),

  hasValue: Ember.computed('value', function() {
    const value = this.get('value');

    return value ? true : false;
  }),

  didReceiveAttrs() {
    this._super(...arguments);

    asserIfUsingRenamedEvents(this);
  },
});
