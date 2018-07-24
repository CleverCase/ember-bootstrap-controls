import { guidFor } from '@ember/object/internals';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  classNames: ['form-group'],
  classNameBindings: ['hasSuccess:has-success', 'hasWarning:has-warning', 'showError:has-error'],

  errors: undefined,
  hasSuccess: undefined,
  hasWarning: undefined,
  disabled: undefined,

  hasError: alias('errors.length'),

  hasValue: computed('value', function() {
    const value = this.get('value');

    return value ? true : false;
  }),

  showError: computed('hasError', function() {
    const hasError = this.get('hasError');

    return !!hasError;
  }),

  inputId: computed(function() {
    return `bootstrap-control-input-${guidFor(this)}`;
  }),

  helpId: computed(function() {
    return `${guidFor(this)}-help`;
  }),
});
