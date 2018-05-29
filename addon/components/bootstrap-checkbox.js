import Ember from 'ember';
import layout from '../templates/components/bootstrap-checkbox';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['checkbox', 'bootstrap-checked-component'],
  attributeBindings: ['disabled'],

  label: null,
  name: null,
  value: null,
  inputId: null,
  disabled: false,
  required: false,
  autofocus: false,
  tabindex: 0,

  isChecked: false,
  srOnly: false,

  // Actions
  onclick: null,

  didReceiveAttrs() {
    this._super(...arguments);

    if (this.get('errors')) {
      Ember.deprecate(
        "bootstrap-checkbox errors will be removed in the next minor version of ember-bootstrap-controls. Checkboxes should be hidden if they accept invalid input.",
        false, // always raise depecation
        { id: 'ember-bootstrap-controls' }
      );
    }
  },

  actions: {
    change: function(clickEvent) {
      const checked = clickEvent.currentTarget.checked
      const onclickFunc = this.get('onclick');

      if (onclickFunc) {
        this.set('isChecked', checked);
        return onclickFunc(checked, !checked);
      }
    },
  },
});
