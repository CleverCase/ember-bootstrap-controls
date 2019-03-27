import Component from '@ember/component';
import layout from '../../templates/components/bootstrap/simple-form';
import { BuilderForPropTypes, BuilderForPropDefaults } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { PropTypes } from 'ember-prop-types';

export const propDefinitions = {
  disabled: {
    description: 'Indicates whether the form and associated controls are disabled',
    type: PropTypes.bool,
    default: false,
  },

  submitAction: {
    description: 'Function to be ran when the submit button is clicked',
    type: PropTypes.function,
    default: null,
  },
};

export default Component.extend({
  layout,
  tagName: 'form',
  propTypes: BuilderForPropTypes(propDefinitions),

  getDefaultProps() {
    return BuilderForPropDefaults(propDefinitions)
  },
});
