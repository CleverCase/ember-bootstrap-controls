import Ember from 'ember';
import generateUUID from 'ember-bootstrap-controls/utils/generate-uuid';

export default Ember.Mixin.create({
  errors: undefined,
  hasSuccess: undefined,
  hasWarning: undefined,
  disabled: undefined,

  hasError: Ember.computed.alias('errors.length'),

  hasValue: Ember.computed('value', function() {
    const value = this.get('value');

    return value ? true : false;
  }),

  showError: Ember.computed('hasError', 'required', 'hasValue', function() {
    const hasError = this.get('hasError');
    const required = this.get('required');
    const hasValue = this.get('hasValue');

    return hasError || (required && !hasValue);
  }),

  inputId: Ember.computed(function() {
    return `bootstrap-component-${generateUUID()}`;
  }),
});
