import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import Mixin from '@ember/object/mixin';
import generateUUID from 'ember-bootstrap-controls/utils/generate-uuid';

export default Mixin.create({
  errors: undefined,
  hasSuccess: undefined,
  hasWarning: undefined,
  disabled: undefined,

  hasError: alias('errors.length'),

  hasValue: computed('value', function() {
    const value = this.get('value');

    return value ? true : false;
  }),

  showError: computed('hasError', 'required', 'hasValue', function() {
    const hasError = this.get('hasError');
    const required = this.get('required');
    const hasValue = this.get('hasValue');

    return hasError || (required && !hasValue);
  }),

  inputId: computed(function() {
    return `bootstrap-component-${generateUUID()}`;
  }),
});
