import Ember from 'ember';
import layout from '../../templates/components/bootstrap/radio-group';
import { PropTypes } from 'ember-prop-types';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';

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
  inline: {
    default: false,
    description: 'Adds `form-check-inline` to all radio inputs to create an inline group.',
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
  tagName: 'fieldset',
  attributeBindings: ['disabled', 'role', 'labelId:aria-labelledby'],
  role: 'radiogroup',
  layout,

  propTypes: BuilderForPropTypes(propDefinitions),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },

  lastIndex: Ember.computed('options', function() {
    return this.get('options.length') - 1;
  }),

  inputId: Ember.computed(function() {
    return `bootstrap-control-input-${Ember.guidFor(this)}`;
  }),
  helpId: Ember.computed(function() {
    return `${Ember.guidFor(this)}-help`;
  }),
  labelId: Ember.computed(function() {
    return `${Ember.guidFor(this)}-group-label`;
  }),
});
