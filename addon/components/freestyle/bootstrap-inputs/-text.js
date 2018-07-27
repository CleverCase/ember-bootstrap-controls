import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-text';
import { BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-text';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
    label: 'Simple Text',
  }),

  basicValue: '',
  dynamicProperties: computed(function() {
    return {
      autocomplete: {
        value: false,
        inputType: 'checkbox',
        description: 'Indicates whether the value can be automatically completed by the browser.'
      },
      disabled: {
        value: false,
        inputType: 'checkbox',
        description: 'Indicates whether the control is disabled'
      },
      errors: {
        value: false,
        inputType: 'checkbox',
        description: 'An array of EmberData errors to display.'
      },
      help: {
        value: false,
        inputType: 'text',
        description: 'Helper text to provide context to the user.'
      },
      label: {
        value: 'Label Sample',
        inputType: 'text',
        description: 'The label for the input.'
      },
      maxlength: {
        value: 1,
        inputType: 'text',
        description: 'Max number of characters the user can enter. (UTF-16)'
      },
      minlength: {
        value: 1,
        inputType: 'text',
        description: 'Min number of characters the user can enter. (UTF-16)'
      },
      pattern: {
        inputType: 'text',
        description: 'A regular expression that the value is checked against.'
      },
      placeholder: {
        inputType: 'text',
        description: 'A hint to the user of what can be entered.'
      },
      readonly: {
        value: false,
        inputType: 'checkbox',
        description: 'Indicates that the user cannot modify the value of the control.'
      },
      required: {
        value: false,
        inputType: 'checkbox',
        description: 'Indicates that the user must fill in a value before submitting a form.'
      },
      srOnly: {
        value: false,
        inputType: 'checkbox',
        description: 'Indicated that the label should be hidden to all devices except screen readers'
      },
      tabindex: {
        value: '1',
        inputType: 'text',
        description: 'The position of the element in the tabbing navigation order for the current document.'
      },
      value: {
        inputType: 'text',
        description: 'A string that is the value for the control.'
      },
    }
  }),
});
