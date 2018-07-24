import Component from '@ember/component';
import layout from '../../templates/components/bootstrap-inputs/-number';
import { PropTypes } from 'ember-prop-types';
import {
  BuilderForPropTypes,
  BuilderForPropDefaults
} from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  disabled: {
    description: 'Indicates whether the control is disabled',
    type: PropTypes.bool,
  },
  errors: {
    description: 'An array of EmberData errors to display.',
    type: PropTypes.arrayOf(PropTypes.string),
  },
  help: {
    description: 'Additonal text to provide additional context to the user that is displayed below the input.',
    type: PropTypes.string,
  },
  label: {
    description: 'The label for the input.',
    type: PropTypes.string.isRequired,
  },
  max: {
    description: 'The maximum numeric value for this item, which must not be less than its minimum (min attribute) value',
    type: PropTypes.number,
  },
  min: {
    description: 'The minimum numeric value for this item, which must not be greater than its maximum (max attribute) value.',
    type: PropTypes.number,
  },
  placeholder: {
    description: 'A hint to the user of what can be entered in the control. This is displayed in the empty input.',
    type: PropTypes.number,
  },
  readonly: {
    default: false,
    description: 'Indicates that the user cannot modify the value of the control.',
    type: PropTypes.bool,
  },
  required: {
    default: false,
    description: 'Indicates that the user must fill in a value before submitting a form.',
    type: PropTypes.bool,
  },
  srOnly: {
    default: false,
    description: 'Indicated that the label should be hidden to all devices except screen readers',
    type: PropTypes.bool,
  },
  step: {
    description: 'Works with the min and max attributes to limit the increments at which a value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum.',
    type: PropTypes.number,
  },
  tabindex: {
    description: 'The position of the element in the tabbing navigation order for the current document.',
    type: PropTypes.number,
  },
  value: {
    description: 'A number that is the value for the control.',
    type: PropTypes.string.isRequired,
  },
};

export default Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
