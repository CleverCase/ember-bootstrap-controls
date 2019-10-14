import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/bootstrap-currency-input';
import InputableMixin from '../mixins/components/inputable';
import { set } from '@ember/object';

export default Component.extend(InputableMixin, {
  tagName: '',
  classNames: '',
  layout: layout,

  placeholder: null,
  value: null,
  readonly: null,
  type: null,
  srOnly: false,
  required: true,


  prefix:'$',
  allowDecimal: true,
  decimalLimit: 2,

  hasValue: computed('value', function() {
    const value = this.get('value');

    return value ? true : false;
  }),

  didReceiveAttrs() {
    this._super(...arguments);
  },

  actions: {
    update(unmasked, masked) {
      set(this, 'value', masked);
      set(this, 'unmasked', unmasked);

      if (this.onUpdate) {
        this.onUpdate(unmasked, masked);
      }
    },
  }
});
