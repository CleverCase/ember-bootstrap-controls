import Ember from 'ember';
import layout from '../templates/components/bootstrap-checkbox';

export default Ember.Component.extend({
  layout: layout,

  label: null,
  name: null,
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

  actions: {
    change: function(checked) {
      const onclickFunc = this.get('onclick');
      const readonly = this.get('readonly');

      if(!readonly) {
        this.set('isChecked', checked);
      }

      if(onclickFunc) {
        onclickFunc(checked);
      }
    },
  },
});
