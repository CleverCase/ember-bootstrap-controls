import { guidFor } from '@ember/object/internals';
import { computed } from '@ember/object';
import { or } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../../templates/components/bootstrap-inputs/-checkbox';
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
  label: {
    description: 'The label for the input.',
    type: PropTypes.string.isRequired,
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
    description: 'A boolean that is the value for the control.',
    type: PropTypes.bool.isRequired,
  },
  onChange: {
    description: 'A function that is called when the checkbox is changed.',
    type: PropTypes.func,
  },
};

export default Component.extend({
  classNames: ['form-check'],
  layout,
  propTypes: BuilderForPropTypes(propDefinitions),
  _disabled: or('formDisabled', 'disabled'),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },

  inputId: computed(function() {
    return `bootstrap-control-input-${guidFor(this)}`;
  }),
});
