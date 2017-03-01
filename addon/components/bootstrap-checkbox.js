import Ember from 'ember';
import layout from '../templates/components/bootstrap-checkbox';

export default Ember.Component.extend({
  layout: layout,

  tagName: '',

  label: null,
  name: null,
  value: null,
  inputId: null,
  disabled: false,
  required: false,
  autofocus: false,
  tabindex: 0,

  isChecked: false,
  srOnly: null,

  // Actions
  onclick: null,

  actions: {
    change: function(checked) {
      const onclickFunc = this.get('onclick');

      if (onclickFunc) {
        this.set('isChecked', checked);
        return onclickFunc(checked, !checked);
      }
    },
  },
});
