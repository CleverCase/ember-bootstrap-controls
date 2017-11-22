import Ember from 'ember';

export default Ember.Mixin.create({
  classNames: ['form-group'],
  classNameBindings: ['hasSuccess:has-success', 'hasWarning:has-warning', 'showError:has-error'],

  errors: undefined,
  hasSuccess: undefined,
  hasWarning: undefined,
  disabled: undefined,

  hasError: Ember.computed.alias('errors.length'),

  hasValue: Ember.computed('value', function() {
    const value = this.get('value');

    return value ? true : false;
  }),

  showError: Ember.computed('hasError', function() {
    const hasError = this.get('hasError');

    return !!hasError;
  }),

  inputId: Ember.computed(function() {
    return `bootstrap-control-input-${Ember.guidFor(this)}`;
  }),
});
