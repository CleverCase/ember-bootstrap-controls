import Ember from 'ember';
import layout from '../../templates/components/bootstrap/simple-select';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

export const propDefinitions = {
  autofocus: {
    default: false,
    description: 'This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the autofocus attribute.',
    type: PropTypes.bool,
  },
  bootstrapCustomClass: {
    default: false,
    description: 'This Boolean attribute lets you specify custom-select class should be applied to the select.',
    type: PropTypes.bool,
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
  multiple: {
    default: false,
    description: 'This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When multiple is specified, most browsers will show a scrolling list box instead of a single line dropdown.',
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
  value: {
    description: 'A string that is the value for the control.',
    type: PropTypes.string.isRequired,
  },
  label: {
    default: 'Text',
    description: 'The label shown above the input box.',
    type: PropTypes.string,
  },
  options: {
    description: 'A collection of option values for each radio button.',
    type: PropTypes.arrayOf(PropTypes.object).isRequired,
  },
  onChange: {
    description: 'A function that is called when the radio is changed.',
    type: PropTypes.func.isRequired,
  },
};

export default Ember.Component.extend({
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
