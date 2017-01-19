import Ember from 'ember';
import layout from '../templates/components/bootstrap-checkbox';

export default Ember.Component.extend({
  layout: layout,

  label: null,
  name: null,
  value: null,
  inputId: null,
  readonly: null,
  disabled: false,
  required: false,
  autofocus: false,
  tabindex: 0,

  isChecked: false,
  srOnly: null,

  // Actions
  onclick: null,

  isNotChecked: Ember.computed('isChecked', function() {
    return !this.get('isChecked');
  }),

  hasValue: Ember.computed('value', function() {
    const value = this.get('value');

    return value ? true : false;
  }),

  actions: {
    change: function(checked) {
      const onclickFunc = this.get('onclick');
      const readonly = this.get('readonly');
      const value = this.get('value');

      if(!readonly) {
        this.set('isChecked', checked);
      }

      if (onclickFunc) {
        if (this.hasValue()) {
          onclickFunc(checked, value);
        } else {
          onclickFunc(checked);
        }
      }
    },
  },
});
