import Component from '@ember/component';
import layout from '../../templates/components/bootstrap-inputs/-url';
import { or } from '@ember/object/computed';
import { PropTypes } from 'ember-prop-types';
import {
  BuilderForPropTypes,
  BuilderForPropDefaults
} from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  autocomplete: {
    default: 'url',
    description: 'Indicates whether the value can be automatically completed by the browser.',
    type: PropTypes.oneOf(['off', 'url']),
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
    default: 'Url',
    description: 'The label for the input.',
    type: PropTypes.string.isRequired,
  },
  maxlength: {
    description: 'The maximum number of characters (in UTF-16 code units) that the user can enter.',
    type: PropTypes.number,
  },
  minlength: {
    description: 'The minimum number of characters (in UTF-16 code units) that the user can enter.',
    type: PropTypes.number,
  },
  pattern: {
    description: "A regular expression that the control's value is checked against.",
    type: PropTypes.instanceOf(RegExp),
  },
  placeholder: {
    description: 'A hint to the user of what can be entered in the control. This is displayed in the empty input.',
    type: PropTypes.string,
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
  tabindex: {
    description: 'The position of the element in the tabbing navigation order for the current document.',
    type: PropTypes.number,
  },
  value: {
    description: 'A string that is the value for the control.',
    type: PropTypes.string.isRequired,
  },
};

export default Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),
  _disabled: or('formDisabled', 'disabled'),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
