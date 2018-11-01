import Component from '@ember/component';
import layout from '../../templates/components/bootstrap-inputs/-date';
import { PropTypes } from 'ember-prop-types';
import {
  BuilderForPropTypes,
  BuilderForPropDefaults
} from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  autocomplete: {
    default: 'off',
    description: 'Indicates whether the value can be automatically completed by the browser.',
    type: PropTypes.oneOf(['off','on', 'cc-exp', 'bday']),
  },
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
    default: 'Date Picker',
    description: 'The label for the input.',
    type: PropTypes.string,
  },
  max: {
    description: 'The maximum future date that can be selected from the calandar.',
    type: PropTypes.date,
  },
  min: {
    description: 'The minimum future date that can be selected from the calandar.',
    type: PropTypes.date,
  },
  multiple: {
    default: false,
    description: 'Indicates whether the user can enter more than one value.',
    type: PropTypes.bool,
  },
  pattern: {
    description: "A regular expression that the control's value is checked against (used for fallback browser input formatting).",
    type: PropTypes.instanceOf(RegExp),
  },
  placeholder: {
    description: 'A hint to the user of what can be entered in the control. This is displayed in the empty input.',
    type: PropTypes.date,
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
    description: 'Indicates that the label should be hidden to all devices except screen readers',
    type: PropTypes.bool,
  },
  step: {
    description: 'Works with the min and max attributes to limit the increments at which a value can be set. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum.',
    type: PropTypes.number,
  },
  tabindex: {
    description: 'The position of the element in the tabbing navigation order for the current document.',
    type: PropTypes.number,
  },
  value: {
    default: new Date(),
    description: 'A formatted string that is the value for the control.',
    type: PropTypes.date.isRequired,
  },
};

export default Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  todayHighlight: true,
  format: 'mm/dd/yyyy',

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions);
  },
});
