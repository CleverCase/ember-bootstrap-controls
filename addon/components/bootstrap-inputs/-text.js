import Ember from 'ember';
import layout from '../../templates/components/bootstrap-inputs/-text';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

const autocompleteTypes = ['off', 'on', 'name', 'honorific-prefix',
  'given-name', 'additional-name', 'family-name', 'honorific-suffix',
  'nickname', 'username', 'organization-title', 'organization',
  'street-address', 'address-line1',
  'address-line2', 'address-line3', 'address-level4', 'address-level3',
  'address-level2', 'address-level1', 'country', 'country-name', 'postal-code',
  'cc-name', 'cc-given-name', 'cc-additional-name', 'cc-family-name',
  'cc-number', 'cc-exp', 'cc-exp-month', 'cc-exp-year', 'cc-csc', 'cc-type',
  'transaction-currency', 'transaction-amount', 'language', 'bday', 'bday-day',
  'bday-month', 'bday-year', 'sex'];

export const propDefinitions = {
  autocomplete: {
    default: 'on',
    description: 'Indicates whether the value can be automatically completed by the browser.',
    type: PropTypes.oneOf(autocompleteTypes),
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
    description: 'The label for the input.',
    type: PropTypes.string,
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
  label: {
    default: 'Text',
    description: 'The label shown above the input box.',
    type: PropTypes.string,
  }
};

export default Ember.Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
